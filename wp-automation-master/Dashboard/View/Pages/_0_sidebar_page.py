import streamlit as st


def fields():
    user = st.sidebar.text_input('Username')
    passwd = st.sidebar.text_input('Password', type='password')
    st_b = st.sidebar.button('Login')


    return user, passwd, st_b


def fields_empty():
    user = st.sidebar.text_input('Username')
    passwd = st.sidebar.text_input('Password', type='password')
    st.sidebar.empty()
    return user, passwd
