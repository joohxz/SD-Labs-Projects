FROM postgres:16.1-bullseye

ENV POSTGRES_PASSWORD=123
ENV POSTGRES_DB=risk_forum
ENV POSTGRES_USER=postgres

WORKDIR /database

COPY . /database

EXPOSE 48832

CMD sh -c "pg_restore -h localhost -p 48832 -U postgres -d hermandai -f ./sql/dump.sql"