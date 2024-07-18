import pickle
import time
from pathlib import Path
import plotly.express as px
import pandas as pd

import streamlit as st
import streamlit_authenticator as stauth  #  pip install streamlit-authenticator==0.1.5

from Dashboard.View.Pages import _2_admin_page





class Main:

    def __init__(self):

        # emojis: https://www.webfx.com/tools/emoji-cheat-sheet/
        # st.set_page_config(page_title="Sales Dashboard", page_icon=":bar_chart:", layout="wide", initial_sidebar_state="expanded")


        # --- USER AUTHENTICATION ---
        names = ["Gustavo Felicidade", "Ahmd", "Peter Parker", "Rebecca Miller"]
        usernames = ["gustavo","amhd","pparker", "rmiller"]


        # load hashed passwords
        file_path = Path(__file__).parent / "hashed_pw.pkl"
        with file_path.open("rb") as file:
            hashed_passwords = pickle.load(file)

        def authenticator():

            auth = stauth.Authenticate(names, usernames, hashed_passwords,
                                                "sales_dashboard", "abcdef", cookie_expiry_days=0)

            name, authentication_status, username = auth.login("Login", "main")

            return name, authentication_status, username

        # name, authentication_status, username = authenticator.login("Login", "main")   # main body or sidebar


        if authenticator == False:
            st.error("Username/password is incorrect")

        if authenticator == None:
            st.warning("Please enter your username and password")

        # time.sleep(5)

        if authenticator:

            with st.spinner('Wait for it...'):
                time.sleep(2)
            st.success('Done!')

        # ---- READ EXCEL ----
        @st.cache
        def get_data_from_excel():
            df = pd.read_excel(
                io=Path(r"Dashboard/View/supermarkt_sales.xlsx"),
                engine="openpyxl",
                sheet_name="Sales",
                skiprows=3,
                usecols="B:R",
                nrows=1000,
            )
            # Add 'hour' column to dataframe
            df["hour"] = pd.to_datetime(df["Time"], format="%H:%M:%S").dt.hour
            return df


        df = get_data_from_excel()



        # ---- SIDEBAR ----
        authenticator()
        st.sidebar.title(f"Welcome {authenticator.__name__}")

        option = st.sidebar.radio(
            'Navigate through various features of the app!',
            ('Home', 'Admin', 'Communication','Financial', "Operations", 'Accounting')
        )

        if option == 'Home':
            pass

        if option == 'Admin':
            _2_admin_page.Admin().admin_page()


        if option == 'Communication':
            # _3_communication_page()
            pass

        if option == 'Financial':
            # _4_financial_page()
            pass

        if option == 'Operations':
            # _5_operations_page
            pass

        if option == 'Accounting':
            # _6_accounting_page
            pass


        st.sidebar.markdown("# Rocket Kitchens 🚀")

        st.sidebar.header("Please Filter Here:")
        city = st.sidebar.multiselect(
            "Select the City:",
            options=df["City"].unique(),
            default=df["City"].unique()
        )

        customer_type = st.sidebar.multiselect(
            "Select the Customer Type:",
            options=df["Customer_type"].unique(),
            default=df["Customer_type"].unique(),
        )

        gender = st.sidebar.multiselect(
            "Select the Gender:",
            options=df["Gender"].unique(),
            default=df["Gender"].unique()
        )

        df_selection = df.query(
            "City == @city & Customer_type ==@customer_type & Gender == @gender"
        )

        #   Windows
        # st.sidebar.image(r'Dashboard\View\Assets\deliverect.png',use_column_width=500)
        # st.sidebar.image(r'Dashboard\View\Assets\deliveroo.png',use_column_width=500)
        # st.sidebar.image(r'Dashboard\View\Assets\talabat.jpg',use_column_width=500)
        # st.sidebar.image(r'Dashboard\View\Assets\zomato.png',use_column_width=500)
        # st.sidebar.image(r'Dashboard\View\Assets\careem.png',use_column_width=500)

        # Heroku
        st.sidebar.image(r'Dashboard/View/Assets/deliverect.png',use_column_width=500)
        st.sidebar.image(r'Dashboard/View/Assets/deliveroo.png',use_column_width=500)
        st.sidebar.image(r'Dashboard/View/Assets/talabat.jpg',use_column_width=500)
        st.sidebar.image(r'Dashboard/View/Assets/zomato.png',use_column_width=500)
        st.sidebar.image(r'Dashboard/View/Assets/careem.png',use_column_width=500)

        # ---- MAINPAGE ----

        # st.title(":bar_chart: Sales Dashboard")
        st.markdown("# Rocket Kitchens 🚀")
        st.subheader('How to Install Task Automator App by Rocket Kitchens')
        st.write("Follow the next steps to run the process:")
        st.write("Download and Install the Rocket Kitchen program accordingly with your enviroment system.")
        st.write("Create an Account in Rocket kitchen. Sign up clicking here.")
        st.write("Set up your robots")
        st.write("Launch your Automated Tasks.")
        st.markdown("##")

        # TOP KPI's
        total_sales = int(df_selection["Total"].sum())
        average_rating = round(df_selection["Rating"].mean(), 1)
        star_rating = ":star:" * int(round(average_rating, 0))
        average_sale_by_transaction = round(df_selection["Total"].mean(), 2)

        left_column, middle_column, right_column = st.columns(3)
        with left_column:
            st.subheader("Total Sales:")
            st.subheader(f"AED $ {total_sales:,}")
        with middle_column:
            st.subheader("Average Rating:")
            st.subheader(f"{average_rating} {star_rating}")
        with right_column:
            st.subheader("Average Sales Per Transaction:")
            st.subheader(f"AED $ {average_sale_by_transaction}")

        st.markdown("""---""")

        # SALES BY PRODUCT LINE [BAR CHART]
        sales_by_product_line = (
            df_selection.groupby(by=["Product line"]).sum()[["Total"]].sort_values(by="Total")
        )
        fig_product_sales = px.bar(
            sales_by_product_line,
            x="Total",
            y=sales_by_product_line.index,
            orientation="h",
            title="<b>Sales by Product Line</b>",
            color_discrete_sequence=["#0083B8"] * len(sales_by_product_line),
            template="plotly_white",
        )
        fig_product_sales.update_layout(
            plot_bgcolor="rgba(0,0,0,0)",
            xaxis=(dict(showgrid=False))
        )

        # SALES BY HOUR [BAR CHART]
        sales_by_hour = df_selection.groupby(by=["hour"]).sum()[["Total"]]
        fig_hourly_sales = px.bar(
            sales_by_hour,
            x=sales_by_hour.index,
            y="Total",
            title="<b>Sales by hour</b>",
            color_discrete_sequence=["#0083B8"] * len(sales_by_hour),
            template="plotly_white",
        )
        fig_hourly_sales.update_layout(
            xaxis=dict(tickmode="linear"),
            plot_bgcolor="rgba(0,0,0,0)",
            yaxis=(dict(showgrid=False)),
        )

        left_column, right_column = st.columns(2)
        left_column.plotly_chart(fig_hourly_sales, use_container_width=True)
        right_column.plotly_chart(fig_product_sales, use_container_width=True)

        # ---- HIDE STREAMLIT STYLE ----
        hide_st_style = """
                        <style>
                        #MainMenu {visibility: hidden;}
                        footer {visibility: hidden;}
                        header {visibility: hidden;}
                        </style>
                        """
        st.markdown(hide_st_style, unsafe_allow_html=False)
