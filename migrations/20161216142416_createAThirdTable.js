exports.up = function (knex, Promise) {
  return knex.schema.createTable('friends_night', function (table) {
    table.integer('friends_id')
    table.integer('night_id')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('friends_night')
}
