import streamlit as st
st.set_page_config(layout="wide",
                   initial_sidebar_state="expanded",
                   page_icon="🚀"
                   )

from Dashboard.View.Pages import _1_main_page

from Dashboard.View import login_page
import subprocess
#================================
# START THE DASHBOARD APPLICATION
#================================

#ok
if __name__=='__main__':


   _1_main_page.Main().main()
   # login_page.__login__()

































