# Back-end of the project

## Pre-requisites

install Docker and docker-compose on your machine
https://docs.docker.com/get-docker/

create a .env file in the root directory of the project and add the following variables:

```
DATABASE_URL = postgresql://postgres:f2dDbaFgggebCcABGDBEFbaF*5f*343C@monorail.proxy.rlwy.net:48832/hermandai
```

## How to run the back-end
Docker-compose is used to run the back-end. To run the back-end, run the following command in the root directory of the project:

```bash
docker-compose up -d --build
docker-compose exec web python manage.py migrate
docker-compose exec web python manage.py createsuperuser
docker exec -it back_end-web-1 bash
python manage.py runserver
```

### Requirements
Docker and docker-compose installed


### Commands to control the Hazor Risk Forum web application:

Create project: django-admin startproject project_name

Create app:     python manage.py startapp app_name

Run Server:     python manage.py runserver     