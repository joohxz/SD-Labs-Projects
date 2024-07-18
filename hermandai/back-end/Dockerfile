FROM python:3.12.1-slim-bookworm

ENV PIP_DISABLE_PIP_VERSION_CHECK 1
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /backend

COPY . /backend/

RUN pip install -r requirements.txt

EXPOSE 8000

CMD sh -c "python manage.py makemigrations && python manage.py makemigrations authentication && python manage.py migrate && python manage.py runserver 0.0.0.0:8000"