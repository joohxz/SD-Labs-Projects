# Log of the commands used to create the back-end

'''bash
python -m venv .venv
./.venv/Scripts/activate
pip install django
pip install djangorestframework
pip install markdown
pip install django-cors-headers
pip install djangorestframework-simplejwt
pip install dj_database_url
pip install python-dotenv
pip install psycopg2-binary
pip install django-filter
django-admin startproject api .
cd api
django-admin startapp authentication
cd ..
python manage.py makemigrations
python manage.py migrate
python manage.py createsuperuser --username admin --email admin@example.com
python manage.py runserver 0.0.0.0:8000
'''
