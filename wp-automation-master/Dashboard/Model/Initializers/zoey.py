
import os
import glob
import numpy as np
import matplotlib.pyplot as plt
import time
import pyautogui as ptg


# for future
import pyinputplus as i
import logging
import sched
from datetime import datetime, timedelta

# =====================================================================
#  The libraries below are to handle rpa and xlsx.
# =====================================================================


import rpa as r
import openpyxl
import pandas as pd
from openpyxl import load_workbook
from openpyxl.worksheet.table import Table
from openpyxl.worksheet.table import TableStyleInfo
from openpyxl.styles import Font, NamedStyle
from openpyxl.cell.cell import Cell

# =======================================================================
# Class to parser and handle Accesses Sheet
# =======================================================================






#=======================================
#      Zoey execution: Reports
#=======================================

# bot.enter_talabat()
# r.wait(15)  # Extract 7 last days reports
# bot.tabalat_extract_reports()
# r.wait(4)
# bot.exit_talabat()
# r.wait(2)
# bot.talabat_close_page()
# bot.tab_time()
# r.wait(3)   # Read the download file
# handler.talabat_read_average_order_per_day()
# r.wait(3)   # Calculate the average Order
# handler.tabalat_average_order_per_day()
# r.wait(3)   # Get formula, coordinate but not the formula
# handler.tabalat_get_average_order_value()
# r.wait(3)
