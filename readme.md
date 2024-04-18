# Desafio IBS

## Objetivo:

Crud para desafio contido em /docs

## Tecnologias utilizadas:

- NestJs
    - TypeORM
    - Swagger
    - Rate limiting
    - JWT
- PostgreSQL
- Docker [docker-compose]
- Prometheus
- Nginx

## Setup:

```bash
$ docker-compose up [-d]
```

## Endpoints:


Auth token:

```bash
curl -X POST http://localhost:3000/api/v1/auth/login -d '{"username": "your_username", "password": "your_password"}' -H "Content-Type: application/json"
```

Swagger:

- `localhost:3000/docs`

## TODO:

- [ ] Nestjs doesn't load env variables from .env file
- [ ] Add Tests [integration, unit]