require('dotenv').config();

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      user: 'root', 
      password: 'password', 
      database: 'sauti_test0',
      charset: 'utf8'
    }
  },

  staging: {
    client: 'mysql',
    connection: process.env.CLEARDB_DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'mysql',
    connection: process.env.CLEARDB_DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
