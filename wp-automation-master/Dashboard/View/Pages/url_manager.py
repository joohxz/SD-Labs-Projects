# url_manager.py
import os
import sys
import json
import sqlite3
import subprocess
import streamlit as st
import pandas as pd
import validators

DATABASE_PATH = 'url_panel.db'


def init_db():
    conn = sqlite3.connect(DATABASE_PATH)
    c = conn.cursor()
    c.execute('''CREATE TABLE IF NOT EXISTS urls
                 (id INTEGER PRIMARY KEY, url TEXT)''')
    conn.commit()
    conn.close()


def add_url(url):
    if validators.url(url):
        conn = sqlite3.connect(DATABASE_PATH)
        c = conn.cursor()
        c.execute('INSERT INTO urls (url) VALUES (?)', (url,))
        conn.commit()
        conn.close()
        # Valid URL
        return True
    else:
        # Invalid URL
        return False


def get_all_urls():
    conn = sqlite3.connect(DATABASE_PATH)
    c = conn.cursor()
    c.execute('SELECT id, url FROM urls')
    urls = c.fetchall()
    conn.close()
    return urls


def remove_url(id):
    """Remove a URL by its ID."""
    conn = sqlite3.connect(DATABASE_PATH)
    c = conn.cursor()
    c.execute('DELETE FROM urls WHERE id = ?', (id,))
    conn.commit()
    conn.close()


def json_to_dataframe(json_file_path):
    with open(json_file_path, 'r') as json_file:
        data = json.load(json_file)
    df = pd.DataFrame([data])  # Convert the dictionary to a DataFrame
    return df


def run_line(url):
    try:
        subprocess.run(
            [sys.executable, "Scrapper/playwright_scraper.py", url],
            check=True,
            text=True,
            capture_output=True
        )

        # Correctly resolve the path to the 'content.json'
        current_dir = os.path.dirname(__file__)
        project_root = os.path.abspath(os.path.join(current_dir, '..', '..', '..'))
        json_file_path = os.path.join(project_root, 'Scrapper', 'content.json')

        # Debugging prints
        print(f"Current Dir: {current_dir}")
        print(f"project_root: {project_root}")
        print(f"json_file_path Dir: {json_file_path}")

        if os.path.exists(json_file_path):
            with open(json_file_path, 'r') as json_file:
                data = json.load(json_file)
            df = pd.DataFrame([data])
            st.dataframe(df)
        else:
            st.error(f"content.json not found at {json_file_path}")

    except subprocess.CalledProcessError as e:
        st.error(f"Error running scraper for {url}: {e}")
    except Exception as e:
        st.error(f"An error occurred: {e}")


def edit_line():
    ...


def queue_line():
    ...


def gsheets():
    ...


def wordpress():
    ...


def url_dashboard():
    ...


def url_elements():
    ...


def url_sitemap():
    ...

# Implement additional functions for remove, select all, remove all, edit, etc.
# as needed based on your application requirements.

init_db()  # Initialize the database and table
