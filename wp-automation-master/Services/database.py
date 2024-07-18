import streamlit as st
import psycopg2

# Initialize connection using hardcoded credentials
def init_connection():
    return psycopg2.connect(
        host="localhost",
        port="5432",
        dbname="postgres",
        user="postgres",
        password="123",
    )

# Initialize connection using hardcoded credentials
# def init_connection():
#     return psycopg2.connect(
#         host="dumbo.db.elephantsql.com",
#         port="5432",
#         dbname="qwqyhxvz",
#         user="qwqyhxvz",
#         password="KvC3lxdRaH5nk7_YaiR6GRvwcmQXaoon",
#     )

# Without POSTGRES DATABASE
# conn = init_connection()

