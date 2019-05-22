// Update with your config settings.

const localpg = {
  host: "localhost",
  database: 'firebase-ex',
  user: 'postgres',
  password: "firebase-ex"
}
module.exports = {


  development: {
    client: 'pg',
    connection: localpg,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './data/migrations'
    }
  },

  // production: {
  //   client: 'pg',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // }

};
