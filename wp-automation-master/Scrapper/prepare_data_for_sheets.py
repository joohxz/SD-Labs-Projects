import json
from collections import defaultdict

def select_rows(file_path, N=3):
    with open(file_path, 'r') as file:
        data = json.load(file)

    # Initialize a defaultdict to store selected rows
    selected_rows = defaultdict(list)

    # Iterate over each row and collect N samples for each tag_name
    for row in data:
        tag_name = row.get('tag_name')
        if len(selected_rows[tag_name]) < N:
            selected_rows[tag_name].append(row)

    # Flatten the defaultdict to a list
    selected_rows_list = [row for rows in selected_rows.values() for row in rows]

    # Write the selected rows to a new json file
    with open('Scrapper/selected_data.json', 'w') as file:
        json.dump(selected_rows_list, file, indent=4)

    return selected_rows_list
