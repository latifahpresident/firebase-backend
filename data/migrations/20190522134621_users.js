
exports.up = function(knex, Promise) {
 return  knex.schema.createTable("users", users => {
    users.increments()
    users.string('username', 128).notNullable()
    users.string('password', 128).notNullable()
    users.string('firebase_id', 200).notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users')
};
