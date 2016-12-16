
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('availability').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('availability').insert({availability_id: 1, night: 'monday'}),
        knex('availability').insert({availability_id: 2, night: 'tuesday'}),
        knex('availability').insert({availability_id: 3, night: 'wednesday'}),
        knex('availability').insert({availability_id: 4, night: 'thursday'}),
        knex('availability').insert({availability_id: 5, night: 'friday'}),
        knex('availability').insert({availability_id: 6, night: 'saturday'}),
        knex('availability').insert({availability_id: 7, night: 'sunday'}),
      ]);
    });
};
