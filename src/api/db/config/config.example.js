
module.exports = {
  development: {
    database: 'development_database',
    username: 'root',
    password: null,
    host: '127.0.0.1',
    dialect: 'postgres'
    },
    local: {
    "username": "root",
    "password": null,
    "database": "local_database",
    "host": "",
    "dialect": "postgres"
  },
  test: {
    "username": "root",
    "password": null,
    "database": "test_database",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  production: {
    "username": "root",
    "password": null,
    "database": "production_database",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
};
//export default config;
