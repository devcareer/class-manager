'use strict';
const  config = require('../../../config.js')

module.exports = {
  "development": {
    "username": config.username,
    "password": config.password,
    "database": config.database,
    "host": config.host,
    "dialect": "postgres"
  },
  local: {
    "username": "tgsowrsnnwphjg",
    "password": "da09381ea24589af12153a9aca04de1d9283245434520ba084ccc6b55065520d",
    "database": "d3a0e6i6blrn6p",
    "host": "https://ec2-3-227-68-43.compute-1.amazonaws.com",
    "dialect": "postgres"
  },
  test: {
    "username": "root",
    "password": null,
    "database": "classManager_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  production: {
    "username": "tgsowrsnnwphjg",
    "password": "da09381ea24589af12153a9aca04de1d9283245434520ba084ccc6b55065520d",
    "database": "d3a0e6i6blrn6p",
    "host": "ec2-3-227-68-43.compute-1.amazonaws.com",
    "dialect": "postgres"
  }
};