import re
import json
#from trycourier import Courier
import secrets
from argon2 import PasswordHasher
import requests



def load_lottieurl(url: str) -> str:
    """
    Fetches the lottie animation using the URL.
    """
    try:
        r = requests.get(url)
        if r.status_code != 200:
            return None
        return r.json()
    except:
        pass
