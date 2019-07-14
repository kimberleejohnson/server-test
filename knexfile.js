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
    connection: {
      host: 'localhost',
      user: 'root', 
      password: 'password', 
      database: 'sauti_test0',
      charset: 'utf8'
    },
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
    connection: {
      host: 'localhost',
      user: 'root', 
      password: 'password', 
      database: 'sauti_test0',
      charset: 'utf8'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
