
exports.up = function(knex, Promise) {

  return knex.schema.table('availability', function(table){
    table.integer('friend_id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('availability', function(table){
    table.dropColumn('friend_id')
  })
};
