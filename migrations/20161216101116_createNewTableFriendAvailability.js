exports.up = function (knex, Promise) {
  return knex.schema.createTable('availability', function (table) {
    table.increments('availability_id').primary()
    table.string('night')
    table.integer('friend_id')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('availability')
}
