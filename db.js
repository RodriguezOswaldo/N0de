const pgp = require('pg-promise')();
require('dotenv').config();

//use the DATABASE_URL environment variable
const db = pgp(process.env.DATABASE_URL);

module.exports = db;
