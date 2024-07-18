import os
import time
import dotenv
import streamlit as st
import streamlit_authenticator as stauth
import gspread
from oauth2client.service_account import ServiceAccountCredentials
import pandas as pd
import json
from collections import defaultdict
import yaml
from yaml.loader import SafeLoader
from Dashboard.View.Pages import _2_admin_page
from Dashboard.View import login_page as login
from Dashboard.View.Pages.url_manager import add_url, get_all_urls, remove_url, run_line, edit_line, queue_line, \
    gsheets, wordpress

from openai import OpenAI
import openai

# Assuming your service account JSON file is named 'cred.json' and located in the ".streamlit" folder
gc = gspread.service_account(filename='.streamlit/cred.json')

dotenv.load_dotenv()

# Set your OpenAI API key
openai.api_key = os.getenv("OPENAI_API_KEY")


def display_all_elements():
    # Correct the path to go up from the current file location to the 'automation' directory, then into the
    # 'Scrapper' directory
    current_dir = os.path.dirname(os.path.dirname(
        os.path.dirname(os.path.dirname(__file__))))  # Move up four levels from _1_main_page.py to automation
    json_file_path = os.path.join(current_dir, 'Scrapper',
                                  'all_data_content.json')  # Constructs the path to content.json within the Scrapper
    # folder

    try:
        with open(json_file_path, 'r') as json_file:
            data = json.load(json_file)
        df = pd.json_normalize(data['elements'])

        # Dropdown for selecting data range
        data_range_options = ['All', 'First 5 Rows', 'Last 5 Rows']
        selected_range = st.selectbox('Select data range:', data_range_options)

        if selected_range == 'First 5 Rows':
            display_df = df.head(5)
        elif selected_range == 'Last 5 Rows':
            display_df = df.tail(5)
        else:
            display_df = df

        num_columns = len(df.columns)
        cols_per_row = 4
        rows = (num_columns + cols_per_row - 1) // cols_per_row

        selected_columns = []
        for i in range(rows):
            cols = st.columns(cols_per_row)
            for j in range(cols_per_row):
                idx = i * cols_per_row + j
                if idx < num_columns:
                    col_name = df.columns[idx]
                    if cols[j].checkbox(col_name, key=f'checkbox_{col_name}'):
                        selected_columns.append(col_name)

        if selected_columns:
            filtered_df = display_df[selected_columns]
        else:
            filtered_df = display_df

        # Checkbox to hide None values
        hide_none = st.checkbox('Hide rows with None values in selected columns')

        if hide_none:
            # Drop rows where all selected columns (if any) are None
            if selected_columns:
                filtered_df = filtered_df.dropna(how='all', subset=selected_columns)
            else:
                # If no columns are explicitly selected, consider all columns for dropping None rows
                filtered_df = filtered_df.dropna(how='all')
    except FileNotFoundError as e:
        st.error(f"File not found: {json_file_path}")
        filtered_df = pd.DataFrame()  # Return an empty DataFrame in case of error

    return filtered_df


def modify_url_sitemap():
    current_dir = os.path.dirname(os.path.dirname(
        os.path.dirname(os.path.dirname(__file__))))  # Adjust according to your directory structure
    json_file_path = os.path.join(current_dir, 'Scrapper', 'all_data_content.json')

    try:
        with open(json_file_path, 'r') as json_file:
            data = json.load(json_file)
        df = pd.json_normalize(data['elements'])

        # Filter for rows with 'href' attributes and remove duplicates
        href_df = df[df['href'].notnull()].drop_duplicates(subset=['href'])
        unique_urls = href_df['href'].tolist()

        # Display current URLs in a multiselect widget for potential removal
        urls_to_remove = st.multiselect('Select URLs to remove:', unique_urls, key='remove_urls')
        # Text input for adding new URLs
        new_url = st.text_input('Add new URL:', '')

        # Remove selected URLs
        if urls_to_remove:
            href_df = href_df[~href_df['href'].isin(urls_to_remove)]

        # Add new URL if provided
        if new_url and st.button('Add URL'):
            new_data = {'href': new_url}  # Assuming structure, adjust if your data has more fields
            href_df = href_df.append(new_data, ignore_index=True)

        # Button to save updated URLs to a new JSON file
        if st.button('Save Updated URLs as JSON'):
            updated_json_path = os.path.join(current_dir, 'Scrapper', 'updated_sitemap.json')
            href_df.to_json(updated_json_path, orient='records', lines=True)
            st.success(f'Updated URLs saved as JSON to {updated_json_path}')

    except FileNotFoundError as e:
        st.error(f"File not found: {json_file_path}")
        href_df = pd.DataFrame()  # Return an empty DataFrame in case of error

    return href_df


def display_url_sitemap():
    # Correct the path to go up from the current file location to the 'automation' directory, then into the
    # 'Scrapper' directory
    current_dir = os.path.dirname(os.path.dirname(
        os.path.dirname(os.path.dirname(__file__))))  # Move up four levels from _1_main_page.py to automation
    json_file_path = os.path.join(current_dir, 'Scrapper', 'all_data_content.json')  # Constructs the path

    try:
        with open(json_file_path, 'r') as json_file:
            data = json.load(json_file)
        df = pd.json_normalize(data['elements'])

        # Filter the DataFrame for rows that have an 'href' attribute
        href_df = df[df['href'].notnull()]

        # Optionally, you might want to display only unique href values
        unique_href_df = href_df[['href']].drop_duplicates()
    except FileNotFoundError as e:
        st.error(f"File not found: {json_file_path}")
        unique_href_df = pd.DataFrame()  # Return an empty DataFrame in case of error

    return unique_href_df


def select_by_tag_name():
    current_dir = os.path.dirname(os.path.dirname(
        os.path.dirname(os.path.dirname(__file__))))  # Adjust according to your directory structure
    json_file_path = os.path.join(current_dir, 'Scrapper', 'all_data_content.json')

    try:
        with open(json_file_path, 'r') as json_file:
            data = json.load(json_file)
        df = pd.json_normalize(data['elements'])

        # Selecting tags to include
        unique_tags = df['tag_name'].unique()
        selected_tags = st.multiselect('Select tag_name to include:', unique_tags)

        # Filtering DataFrame for selected tag_names to include
        if selected_tags:
            filtered_df = df[df['tag_name'].isin(selected_tags)]
        else:
            filtered_df = pd.DataFrame(columns=df.columns)  # Empty DataFrame if no tags selected

        # Option to exclude rows by tag_name
        # excluded_tags = st.multiselect('Select tag_name to exclude:', unique_tags, key='exclude_tags')
        # if excluded_tags:
        #     filtered_df = filtered_df[~filtered_df['tag_name'].isin(excluded_tags)]

        # Inputs for row manipulation by index
        # add_rows = st.text_input('Add rows by index (comma-separated or range, e.g., 0,1,5-10):')
        # remove_rows = st.text_input('Remove rows by index (comma-separated or range, e.g., 2,3,6-8):')
        #
        # # Process addition and removal of rows by index
        # if add_rows:
        #     add_indices = parse_indices(add_rows)
        #     filtered_df = pd.concat([filtered_df, df.iloc[add_indices]]).drop_duplicates().reset_index(drop=True)
        #
        # if remove_rows:
        #     remove_indices = parse_indices(remove_rows)
        #     filtered_df = filtered_df.drop(remove_indices).reset_index(drop=True)

        # Display the updated DataFrame
        st.dataframe(filtered_df)

        # Button to save the updated DataFrame as JSON
        if st.button('Save Filtered DataFrame'):
            save_path = os.path.join(current_dir, 'Scrapper', 'filtered_data.json')
            # save_path = os.path.join(current_dir, 'Scrapper', 'all_data_content.json')
            filtered_df.to_json(save_path, orient='records', lines=True)
            st.success(f'Filtered DataFrame saved as JSON to {save_path}')
    except FileNotFoundError as e:
        st.error(f"File not found: {json_file_path}")
        filtered_df = pd.DataFrame()  # Return an empty DataFrame in case of error


def parse_indices(input_str):
    """Parse a string of indices (e.g., '1,2,3-7') and return a list of integers."""
    indices = []
    for part in input_str.split(','):
        if '-' in part:
            start, end = part.split('-')
            indices.extend(range(int(start), int(end) + 1))
        else:
            indices.append(int(part))
    return indices


def display_urls_with_checkboxes(urls_data):
    selected_urls = []
    for idx, (url_id, url) in enumerate(urls_data):
        cols = st.columns([1, 8])
        is_selected = cols[0].checkbox("", key=f"chk_{url_id}")
        cols[1].text(url)
        if is_selected:
            selected_urls.append(url_id)
    return selected_urls


# Assuming 'run_line()' updates 'content.json' within the 'Scrapper' directory
def display_scraped_data():
    # Define the path for 'content.json' within the Scrapper folder
    current_dir = os.path.dirname(os.path.dirname(
        os.path.dirname(os.path.dirname(__file__))))  # Adjust the path as necessary
    json_file_path = os.path.join(current_dir, 'Scrapper', 'content.json')

    try:
        with open(json_file_path, 'r') as json_file:
            data = json.load(json_file)
        df = pd.DataFrame([data])  # Assuming data is a dict; adjust if it's a list of dicts
        st.dataframe(df.T)
    except FileNotFoundError as e:
        st.error(f"Could not find 'content.json'. Looked in: {json_file_path}")


def display_url_panel():
    new_url = st.text_input("Add new URL:", key="new_url")

    col1, col2, col3, col4 = st.columns(4)
    with col1:
        if st.button("Add URL", key="add"):
            if add_url(new_url):
                st.success(f"URL added: {new_url}")
                st.experimental_rerun()
            else:
                st.error("Invalid URL")

    urls_data = get_all_urls()
    selected_urls = display_urls_with_checkboxes(urls_data)

    # Example button for removing a URL
    # You would need a way to select which URL to remove, such as a selectbox or multiselect
    with col2:
        if st.button("Remove Selected"):
            for url_id in selected_urls:
                remove_url(url_id)
            st.experimental_rerun()

    with st.expander("Run Selected URLs"):
        run_button = st.button("Run Selected")
        if run_button:
            total_urls = len(selected_urls)
            progress_bar = st.progress(0)
            status_text = st.empty()
            for idx, url_id in enumerate(selected_urls):
                url = next((url for id, url in urls_data if id == url_id), None)
                if url:
                    # Assuming each URL takes approximately 5 seconds to process
                    # This is just an example, adjust the time as needed based on actual processing time
                    estimated_time = (total_urls - idx) * 5
                    status_text.text(
                        f"Processing URL {idx + 1} of {total_urls}. Estimated time remaining: {estimated_time} minutes.")
                    progress_bar.progress((idx + 1) / total_urls)
                    run_line(url)  # Fill the content.json
                    time.sleep(5)  # Simulate processing time for each URL
            status_text.text("All selected URLs have been processed.")

    with col4:
        # if st.button("Edit line"):
        # Placeholder for select all logic
        pass

    # Display existing URLs in a DataFrame
    # urls_data = get_all_urls()
    # df = pd.DataFrame(urls_data, columns=['ID', 'URL'])
    # st.dataframe(df)

    display_scraped_data()


#  Function to read filtered JSON data
def read_filtered_json_data(filepath):
    data = []
    with open(filepath, 'r') as file:
        for line in file:
            try:
                data.append(json.loads(line))
            except json.JSONDecodeError as e:
                print(f"Error decoding JSON: {e}")
    return data


def assistant(cell_value: str, content_input: str) -> str:
    # Load the OPENAI_API_KEY from your environment variables
    api_key = os.getenv("OPENAI_API_KEY")

    # Instantiate the OpenAI client with your API key
    client = OpenAI(api_key=api_key)

    # Format the prompt to include the task and the content input
    prompt_message = f"{cell_value}: {content_input}"

    # Create the chat completion request
    response = client.chat.completions.create(
        model="gpt-4",  
        messages=[
            {
                "role": "system",
                "content": "You are a helpful assistant trained to manage URL output from "
                           "Scrapper stored in google sheets cells through google sheets API. "
                           f"Complete the next tasks applying: {cell_value} "
                           f"On content input: {content_input} "
                           f" Please return only what is asked, not complement like"
                           f" 'The title is already in English'"

            },
            {
                "role": "user",
                "content": prompt_message
            }
        ],
        max_tokens=100,
        temperature=0.5,
    )

    if response.choices:
        content = response.choices[0].message.content  # Access 'content' attribute directly
    else:
        content = "No response generated."

    print(f"cell_value: {cell_value}")
    print(f"content_input: {content_input}")
    print(f"content: {content}")
    return content


def get_google_sheets_client():
    scope = [
        "https://www.googleapis.com/auth/spreadsheets",
        'https://spreadsheets.google.com/feeds',
        'https://www.googleapis.com/auth/drive'

    ]
    # Service Account
    creds = ServiceAccountCredentials.from_json_keyfile_name(".streamlit/cred.json", scope)
    client = gspread.authorize(creds)
    return client


def prompts_and_elements(tag_name: str, text_content: str) -> str:
    client = get_google_sheets_client()
    sheet = client.open_by_key('1bDUoY0iMddhvdS0TSBDxiKpGzez0u39FA2PLFeA-Kg8').worksheet("Prompts & elements")
    # sheet = client.open

    # Search for the tag_name in column C (TYPE column) to find the corresponding row
    cell_list = sheet.findall(tag_name, in_column=3)  # Assuming tag_name is unique and in column C

    if not cell_list:
        raise ValueError(f"Tag name '{tag_name}' not found in the 'TYPE' column.")

    # Assuming the first match is the desired one (or the only one)
    instruction_cell_row = cell_list[0].row
    # Fetching the instruction from column D using the found row
    instruction = sheet.cell(instruction_cell_row, 4).value

    # Transform the content using the assistant function with the fetched instruction
    transformed_content = assistant(instruction, text_content)
    return transformed_content


def prepare_data_for_sheets(filtered_data):
    # Define headers only for the structure, not for appending to rows
    global headers
    headers = ["date", "event", "count", "LANGUAGE", "H1", "P1", "LINK1", "URL",
               "H2-1", "P2", "IMG1", "IMG2", "H2-2", "P3", "QUOTE1", "H3-1", "P4",
               "URL-2", "FAQ-1 TITLE", "FAQ-1 ANSWER", "FAQ-2 TITLE", "FAQ-2 ANSWER",
               "FAQ-3 TITLE", "FAQ-3 ANSWER", "FAQ-4 TITLE", "FAQ-4 ANSWER"]

    N = 3  # Number of times to loop for each tag_name
    tag_name_counts = defaultdict(int)  # Track the number of times each tag_name has been processed

    sheet_data = {header: [] for header in headers}

    for item in filtered_data:
        tag_name = item.get("tag_name", "")
        text_content = item.get("text_content", "")
        href = item.get("href", "")

        # Determine if content transformation is needed based on the tag_name
        # and apply the transformation via prompts_and_elements function
        if tag_name_counts[tag_name] < N:
            if tag_name == "h1":
                transformed_content = prompts_and_elements(tag_name, text_content)
                sheet_data["H1"].append(transformed_content)
            elif tag_name == "h2":
                transformed_content = prompts_and_elements(tag_name, text_content)
                sheet_data["H2-1"].append(transformed_content)
            elif tag_name == "p":
                transformed_content = prompts_and_elements(tag_name, text_content)
                sheet_data["P1"].append(transformed_content)
            elif tag_name == "img":
                transformed_content = prompts_and_elements(tag_name, text_content)
                sheet_data["IMG1"].append(transformed_content)
            elif tag_name == "title":
                transformed_content = prompts_and_elements(tag_name, text_content)
                sheet_data["FAQ-1 TITLE"].append(transformed_content)
            elif tag_name == "link":
                transformed_content = prompts_and_elements(tag_name, href)
                sheet_data["LINK1"].append(transformed_content)
            tag_name_counts[tag_name] += 1

        # Handle other tags similarly

    # Create rows from sheet_data without including headers as the first row
    rows = create_rows_from_sheet_data(sheet_data)

    return rows


def create_rows_from_sheet_data(sheet_data):
    # Create rows from sheet_data without including headers as the first row
    rows = []
    max_length = max(len(sheet_data[header]) for header in headers)
    for i in range(max_length):
        row = [sheet_data[header][i] if i < len(sheet_data[header]) else "" for header in headers]
        rows.append(row)
    return rows


# Function to append data to Google Sheets, adjusted to use gspread for authentication and appending
def append_data_to_google_sheets_with_gspread(spreadsheet_id, worksheet_name, data):
    # Open the spreadsheet and worksheet
    sh = gc.open_by_key(spreadsheet_id)
    worksheet = sh.worksheet(worksheet_name)

    # Calculate the first empty row. Assume headers are in the first row, so data starts from row 2
    first_empty_row = len(
        worksheet.get_all_values()) + 1  # +1 because list indexing starts at 0, spreadsheet rows start at 1

    # Determine the last row based on the amount of data to append
    last_row = first_empty_row + len(data) - 1

    # Determine the range to update. Assume data fills from column A onwards
    # This example assumes the data fills up to column Z. Adjust based on your data's width
    update_range = f'A{first_empty_row}:Z{last_row}'

    # Append data starting from the first empty row
    worksheet.update(update_range, data)

    # # Define the headers as a global variable to be used across functions
    # global headers
    # headers = ["date", "event", "count", "LANGUAGE", "H1", "P1", "LINK1", "URL",
    #            "H2-1", "P2", "IMG1", "IMG2", "H2-2", "P3", "QUOTE1", "H3-1", "P4",
    #            "URL-2", "FAQ-1 TITLE", "FAQ-1 ANSWER", "FAQ-2 TITLE", "FAQ-2 ANSWER",
    #            "FAQ-3 TITLE", "FAQ-3 ANSWER", "FAQ-4 TITLE", "FAQ-4 ANSWER"]


def main_page():
    # ---- MAINPAGE ----

    col1, col2 = st.columns([10, 4])
    with col2:
        st.markdown("# Getting Start")
        st.subheader('Know how to Scrap')
        ...
    with col1:
        st.markdown("# SNB 🚀")
        # st.subheader('URL Manager ')
        st.write("Follow the next steps to URL process:")

    st.markdown("## URL's")
    st.warning(
        """ \n Insert the URL \n
                Click add url \n
            Select the URL in Checkbox \n
            Click Run Selected ( 1 per time ) \n
            Expand the Dataframe to see""",
        icon="⚠️",
    )

    display_url_panel()
    st.markdown("""---""")


    st.markdown("## URL Elements")
    st.text('All content available')
    # st.text('Select the element and click to hide  rows with empty cells')

    # selected_elements = display_all_elements()
    #
    # st.dataframe(selected_elements)
    tag_name = select_by_tag_name()
    st.text("Select elements by tag name")
    # st.dataframe(tag_name)
    st.markdown("""---""")



    st.markdown("""Generate Post""")

    # ===========================================================
    # Section to append data to Google Sheets
    # ===========================================================
    st.markdown("### Post Data to Google Sheets")
    if st.button('Post to Google Sheets'):
        # try:

        filtered_data = read_filtered_json_data('Scrapper/filtered_data.json')

        # Add prompts to openai before append
        values_to_append = prepare_data_for_sheets(filtered_data)

        # Specify your Google Sheets document ID and the name of the worksheet you want to append data to
        global spreadsheet_id, worksheet_name
        spreadsheet_id = "1bDUoY0iMddhvdS0TSBDxiKpGzez0u39FA2PLFeA-Kg8"  # Make sure this is your Spreadsheet ID
        worksheet_name = "001"  # Make sure this worksheet exists in your Google Sheets document

        # Call the function to append data to the specified Google Sheets worksheet
        append_data_to_google_sheets_with_gspread(spreadsheet_id, worksheet_name, values_to_append)

        st.success("Data posted successfully to Google Sheets.")
        # except gspread.exceptions.APIError as e:
        #     if e.response.status_code == 429:
        #         st.error("Quota limit reached for Google Sheets API. Please input less content.")
        #     else:
        #         st.error(f"Failed to post data to Google Sheets. Error: {e}")

    # ===========================================================

    st.markdown("""---""")

    # ===========================================================
    # Section to post data to WordPress
    # ===========================================================
    st.markdown("### Post Data to WordPress")
    wordpress_url = st.text_input("WordPress Website URL:", key="wordpress_url")
    content_cell = st.text_input("Cell Coordinate for Content (e.g., 'A1', 'D23'):", key="content_cell")
    if st.button('Submit to WordPress'):
        # Here you would include the logic to post data to WordPress
        # For example, you might retrieve the content from Google Sheets using the content_cell coordinate
        # and then use the WordPress API to post the content to the wordpress_url
        st.success("Content submitted to WordPress.")
    st.markdown("""---""")


    st.markdown("## URL's Sitemap")
    st.text("URL's in this site")

    url_sitemap = display_url_sitemap()
    st.dataframe(url_sitemap)

    st.text("Modify URL")
    modify_url_sitemap()

    st.markdown("""---""")


    st.markdown("""Footer""")

    # ---- HIDE STREAMLIT STYLE ----
    hide_st_style = """
                    <style>
                    #MainMenu {visibility: hidden;}
                    footer {visibility: hidden;}
                    header {visibility: hidden;}
                    </style>
                    """
    st.markdown(hide_st_style, unsafe_allow_html=True)


class Main:

    def __init__(self):

        with open('config.yaml') as file:
            self.config = yaml.load(file, Loader=SafeLoader)

        ...

    def logout(self):
        self.name, self.authentication_status, self.username = login.__login__().auth_values()
        authenticator = stauth.Authenticate(
            self.config['credentials'],
            self.config['cookie']['name'],
            self.config['cookie']['key'],
            self.config['cookie']['expiry_days'],
            self.config['preauthorized']
        )
        authenticator.logout("Logout", "sidebar")
        # stauth.Authenticate(name, authentication_status, username).logout("Logout", "sidebar")

    def main(self):

        # ---- SIDEBAR ----

        global name
        name = "Client"
        st.sidebar.title(f"Welcome {name}")

        button = st.sidebar.button("Logout")
        if button:
            self.logout()

        c = ['Home', 'Dashboard', 'Chat', 'Communication']

        option = st.sidebar.radio(
            'Navigate through various features of the app!',
            # ('Home', 'Dashboard', 'Communication', 'Chat'),
            ('Home', 'Dashboard'),
            key="main_option"
        )

        if option == 'Home':
            main_page()
            # pass
        if option == 'Dashboard':
            _2_admin_page.Admin().admin_page()
            # pass

        st.sidebar.markdown("# SNB Project")
