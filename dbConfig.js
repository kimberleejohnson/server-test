const knex = require('knex');

const knexConfig = require('./knexfile.js');

// Need to put this key inside Heroku, so it detects whether in development  
// Defining environment variable; checking if environment variable is set, if not, go to development
const environment = process.env.ENVIRONMENT || "development"; 

const db = knex(knexConfig[environment]); 

// Need to make this dynamic, so not only pointing to .development
module.exports = db; 