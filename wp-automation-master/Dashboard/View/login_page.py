import streamlit as st
import pickle
import time
from pathlib import Path
import plotly.express as px
import pandas as pd
import streamlit_authenticator as stauth  # pip install streamlit-authenticator==0.1.5

from Dashboard.View.Pages import _1_main_page, _2_admin_page, _0_sidebar_page

from streamlit_lottie import st_lottie
from streamlit_option_menu import option_menu
from .utils import load_lottieurl

from barfi import st_barfi, barfi_schemas, Block

from Dashboard.Controller import client as cli

import asyncio

from httpx_oauth.clients.google import GoogleOAuth2
import hashlib


def make_hashes(password):
    return hashlib.sha256(str.encode(password)).hexdigest()


async def write_authorization_url(cli, redirect_uri):
    authorization_url = await cli.get_authorization_url(
        redirect_uri,
        scope=["profile", "email"],
        extras_params={"access_type": "offline"},
    )
    return authorization_url


async def write_access_token(cli,
                             redirect_uri,
                             code):
    token = await cli.get_access_token(code, redirect_uri)
    return token


async def get_email(cli,
                    token):
    user_id, user_email = await cli.get_id_email(token)
    return user_id, user_email


def main(user_id, user_email):
    st.write(f"You're logged in as {user_email}")


class __login__:


    def __init__(self):
        self.width = 200
        self.height = 250
        self.lottie_url = r"https://assets5.lottiefiles.com/packages/lf20_rj4titti.json"
        self.client_id = "201966250610-v4kud30sqcim4i2s7ta4c0ne6qs9779i.apps.googleusercontent.com"
        self.client_secret = "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"
        self.redirect_uri = "http://localhost:8501/"
        self.google_icon = r'rocket_kitchens//Dashboard//View//Assets//google.jpg'

        options = ['Login', 'Create Account', 'Forgot Password?', 'Reset Password']
        # choice = st.sidebar.selectbox("Menu", options)



        main_page_sidebar = st.sidebar.empty()
        fields_sidebar = st.sidebar.empty()


        st.sidebar.markdown("---")



        with main_page_sidebar:

            choice = option_menu(menu_title='Navigation',
                                 menu_icon='list-columns-reverse',
                                 icons=['box-arrow-in-right', 'person-plus', 'x-circle', 'arrow-counterclockwise'],
                                 options=['Login', 'Create Account', 'Forgot Password?', 'Reset Password'],
                                 styles={
                                     "container": {"padding": "5px"},
                                     "nav-link": {"font-size": "14px", "text-align": "left", "margin": "0px"}},

                                 key='nav-sidebar'

                                 )

        authent = True

        if choice == "Login":


            user, passwd, st_b = _0_sidebar_page.fields()

            if st.sidebar.checkbox('Login'):
                with fields_sidebar:
                    # cli.create_usertable()
                    hashed_pswd = cli.make_hashes(passwd)
                    result = cli.login_user(user, cli.check_hashes(passwd, hashed_pswd))

                if result:
                    main_page_sidebar.empty()
                    st.success("Logged In as {}".format(user))

                    _1_main_page.Main().main()
                    ...


        elif choice == "Create Account":
            st.subheader("Create New Account")
            new_user = st.text_input("Username", key='new')
            new_password = st.text_input("Password", type='password',  key='new_pass')

            if st.button("Signup"):
                cli.create_usertable()
                cli.add_userdata(new_user, make_hashes(new_password))
                st.success("You have successfully created a valid Account")
                st.info("Go to Login Menu to login")

        elif choice == 'Forgot Password?':
            ...

        def hide_menu() -> None:
            """
            Hides the streamlit menu situated in the top right.
            """
            st.markdown(""" <style>
            #MainMenu {visibility: hidden;}
            </style> """, unsafe_allow_html=True)


        def hide_footer() -> None:
            """
            Hides the 'made with streamlit' footer.
            """
            st.markdown(""" <style>
            footer {visibility: hidden;}
            </style> """, unsafe_allow_html=True)


        def navigator():
            ...

        # self.hide_menu = hide_menu()
        # self.hide_footer = hide_footer()
        # self.nav = nav_sidebar()
        self.nav = navigator()

    def auth_values(self):
        print(self.name, self.authentication_status, self.username)
        return self.name, self.authentication_status, self.username

    def main(self):

        # ---- SIDEBAR ----

        global name
        st.sidebar.title(f"Welcome {name}")
        c = ['Home', 'Admin', 'Orders', 'Marketing Analysis', 'Chat', 'Communication', 'Zoey Custom', 'Financial',
             "Operations", 'Accounting']

        option = st.sidebar.radio(
            'Navigate through various features of the app!',
            ('Home', 'Admin', 'Communication', 'Chat', 'Marketing Analysis', 'Zoey Custom', 'Financial', "Operations",
             'Accounting'),
            key="main_option"
        )

        if option == 'Home':
            _1_main_page.main_page()
            # pass
        if option == 'Admin':
            _2_admin_page.Admin().admin_page()
            # pass
        if option == 'Orders':
            _1_main_page.main_page()
            # pass


        st.sidebar.markdown("# Rocket Kitchens 🚀")

        st.sidebar.image(r'Dashboard/View/Assets/deliverect.png', use_column_width=500)
        st.sidebar.image(r'Dashboard/View/Assets/deliveroo.png', use_column_width=500)
        st.sidebar.image(r'Dashboard/View/Assets/talabat.jpg', use_column_width=500)
        st.sidebar.image(r'Dashboard/View/Assets/zomato.png', use_column_width=500)
        st.sidebar.image(r'Dashboard/View/Assets/careem.png', use_column_width=500)

    def animation(self) -> None:
        """
        Renders the lottie animation.
        """
        lottie_json = load_lottieurl(self.lottie_url)
        st_lottie(lottie_json, width=self.width, height=self.height)

        def hide_menu() -> None:
            """
            Hides the streamlit menu situated in the top right.
            """
            st.markdown(""" <style>
            #MainMenu {visibility: hidden;}
            </style> """, unsafe_allow_html=True)

        def hide_footer() -> None:
            """
            Hides the 'made with streamlit' footer.
            """
            st.markdown(""" <style>
            footer {visibility: hidden;}
            </style> """, unsafe_allow_html=True)

    def sign_up_widget(self):

        """
            Creates the sign-up widget and stores the user info in a secure way in the _secret_auth_.json file.
        """

    def forgot_password(self):
        pass

    def reset_password(self):
        pass

    def logout_widget(self):
        pass

    def nav_sidebar(self):
        pass
