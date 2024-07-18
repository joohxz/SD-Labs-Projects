import base64
import streamlit as st
import requests
import datetime
from st_aggrid import GridOptionsBuilder, AgGrid, GridUpdateMode, DataReturnMode
from st_aggrid.shared import JsCode
import streamlit_authenticator as stauth   # pip install streamlit-authenticator==0.1.5
from streamlit_extras.metric_cards import style_metric_cards

#=====================================================================

from Dashboard.Model.functionforDownloadButtons import download_button

#=====================================================================

import os
import glob
import pickle
import time
from pathlib import Path
import io
import pandas as pd
import numpy as np
import subprocess
import openpyxl
import matplotlib
import matplotlib.pyplot as plt


import plotly.express as px
import plotly.graph_objects as go

from matplotlib.backends.backend_agg import RendererAgg
from matplotlib.figure import Figure

#=====================================================================


matplotlib.use("agg")
# _lock = RendererAgg.lock

#=====================================================================
from Dashboard.View import login_page
from Dashboard.View.Pages import _1_main_page

# from Dashboard.Controller import client
#=====================================================================



class Admin:



    def __init__(self):

        '''Dashboard Page:: URL Control

        ------------------------
        '''


    def admin_page(self):


        # ---- MAINPAGE ----


        st.subheader("Manage your URL list")
        st.markdown("##")

        ####################
        ### INTRODUCTION ###
        ####################

        st.write("")
        row_order, row_sales = st.columns([2,  2])

        with row_order:
            st.title("📊 Dashboard Panel")
        with row_sales:
            ...
        uploaded_file = "assets/Example.xlsx"
        shows = pd.read_excel(uploaded_file)


        st.markdown("### Preview")
        st.text("Choose the process for execution")
        # st.dataframe(shows.head())

        gb = GridOptionsBuilder.from_dataframe(shows)
        # enables pivoting on all columns, however i'd need to change ag grid to allow export of pivoted/grouped data, however it select/filters groups
        gb.configure_default_column(enablePivot=True, enableValue=True, enableRowGroup=True)
        gb.configure_selection(selection_mode="multiple", use_checkbox=True)
        gb.configure_side_bar()  # side_bar is clearly a typo :) should by sidebar

        gridOptions = gb.build()
        response = AgGrid(
            shows,
            gridOptions=gridOptions,
            enable_enterprise_modules=True,
            update_mode=GridUpdateMode.MODEL_CHANGED,
            data_return_mode=DataReturnMode.FILTERED_AND_SORTED,
            fit_columns_on_grid_load=False,
        )
        print('df')
        df = pd.DataFrame(response["selected_rows"])
        # print(df)
        # df2 = pd.DataFrame(response)
        #
        col1, col2, col3 = st.columns([.5, 2, 2])
        with col1:
            st.write('Sheet Properties: ')
            ...
        with col2:
            # st.metric('Robot Execution TIME', '{03:00}')
            st.write("Inside the form")
            slider_val = st.slider("Form slider")
            checkbox_val = st.checkbox("Form checkbox")

        with col3:

            ...

        st.subheader("Filtered Rows will appear below 👇 ")

        st.text("")

        st.table(df)

        st.text("")

        c29, c30, c31 = st.columns([.6, .6, 2])

        #path = './assets/robots/'
        #os.chdir(path)
        # os.getcwd()

        filename = r"Dashboard/View/Pages/RobotsOrderss.xlsx"

        #out = os.path.join(path, download_filename)
        #print(out)
        with c29:

            CSVButton = download_button(
                object_to_download=None,
                download_filename="empty.txt",
                button_text="Empty"
            )

        with c30:
            CSVButton = download_button(
                df,
                "File.csv",
                "Run Selected"
            )

        # ------------------------------
        # Robot Execution Metrics
        # ------------------------------

        # fetch from database
        st.subheader("Scrapper Time Execution Metrics 📈")

        col1, col2, col3 = st.columns([2, 2, 2])

        with col1:
            col1.metric(label="Time Execution", value='0:39:18', delta=1000)

            # fetch from database
            # create sample data for chart
            df = pd.DataFrame({
                'time': ['2022-01-01', '2022-02-01', '2022-03-01', '2022-04-01', '2022-05-01'],
                'execution': [20, 40, 60, 80, 100]
            })

            # create chart using plotly express
            fig = px.line(df, x='time', y='execution', title='Scrapper Execution over Time')

            # display chart in Streamlit
            st.plotly_chart(fig)

        with col2:
            col2.metric(label="Hours Today", value='01:42:18', delta=-1000)

            # generate sample data
            time_data = np.random.randint(0, 24, size=(24, 1))
            robot_time = np.random.randint(0, 60, size=(24, 1))
            df = pd.DataFrame({"Hour": time_data[:, 0], "Scrapper Time": robot_time[:, 0]})

            # create line chart
            fig = px.line(df, x="Hour", y="Scrapper Time", title="Time consumed by scrapper in hours")

            # display chart
            st.plotly_chart(fig)

        with col3:
            col3.metric(label="Total Time", value='05:00:18', delta=0)

            # generate sample data
            num_months = 12
            start_date = datetime.datetime.now() - datetime.timedelta(days=365)
            dates = [start_date + datetime.timedelta(days=30 * x) for x in range(num_months)]
            robot_time = np.random.randint(0, 100, size=(num_months, 1))
            df = pd.DataFrame({"Month": dates, "Scrapper Time": robot_time[:, 0]})

            # create line chart
            fig = px.line(df, x="Month", y="Scrapper Time", title="Total Monthly Time consumed by scrapper")

            # display chart
            st.plotly_chart(fig)

        style_metric_cards(background_color="#817878",
                           border_size_px= 1,
                           border_color="#CCC",
                           border_radius_px= 5,
                           border_left_color="#1652CE",
                           box_shadow=True)


