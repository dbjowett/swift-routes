# Project Template

This project is a template that sets up a development environment using Docker containers for a Vite-React app as the frontend, a NestJS app as the backend, and a PostgreSQL database.

## Development Mode

To start the development environment, use the following command:

```bash
docker compose -f compose.dev.yml up --build
```

    Frontend: React/Vite
    Backend: NestJS
    Database: PostgreSQL

Runs on port 8000.

## Production Mode

In production, the frontend is served by Nginx, and the PostgreSQL database needs to be manually configured.

To start the production environment, use the following command:

```bash
docker compose -f compose.prod.yml up --build
```

    Frontend: React/Vite
    Web server: Nginx
    Backend: NestJS
    Database: PostgreSQL

Runs on port 80 (localhost).

### Required .env

For development, create a .env file and paste in the in `DB_URL` from below.

```
DB_URL="postgres://postgres:postgres@localhost:5432/postgres-dev?schema=SCHEMA"
```
