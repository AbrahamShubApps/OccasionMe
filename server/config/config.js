export default {
  "development": {
    "username": "menachem",
    "password": null,
    "database": "occasionme-dev",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "menachem",
    "password": null,
    "database": "occasionme-test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": 'menachem',
    "password": null,
    "database": "occasionme-prod",
    "host": process.env.DATABASE_URL,
    "dialect": "postgres",
  }
}
