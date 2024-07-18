# PostgresSQL 16.1

Este pasta contém os arquivos de configuração do banco de dados. Atualmente, o banco de dados utilizado é a o service de banco de dados do RailWay.

## Installation

Para instalar o banco de dados localmente, é necessário ter o docker instalado na máquina. Para instalar o docker, siga as instruções do site oficial: https://docs.docker.com/engine/install/

Após a instalação do docker, execute o comando abaixo para iniciar o banco de dados:

```bash
cd database # Entrar na pasta do banco de dados se ainda não estiver
docker build -t hermandai-database .
docker run -dp 48832:48832 hermandai-database
```

## Usage

Para acessar o banco de dados local, utilize o comando abaixo:

```bash
psql -h localhost -p 48832 -U postgres
```

Para acessar o banco de dados remoto, utilize o comando abaixo:

```bash
psql -h monorail.proxy.rlwy.net -p 48832 -U postgres
```

## Backup

Para realizar o backup do banco de dados remoto, utilize o comando abaixo:

```bash
pg_dump postgresql://postgres:f2dDbaFgggebCcABGDBEFbaF*5f*343C@monorail.proxy.rlwy.net:48832/hermandai > dump.sql
```

Para restaurar o banco de dados remoto a partir de um backup, utilize o comando abaixo:

```bash
pg_restore -h monorail.proxy.rlwy.net -p 48832 -U postgres -d hermandai -f dump.sql
```