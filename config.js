// Import env package
require('dotenv').config({ silent: true, path: '.env' });

module.exports = {
  port: process.env.PORT,
  database: process.env.DBNAME,
  username: process.env.DBUSER,
  password: process.env.DBPASSWORD,
  host: process.env.DBHOST,
  dialect: process.env.DBDIALECT,
};
