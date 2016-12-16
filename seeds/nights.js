
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('availability').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('availability').insert({availability_id: 1, night: 'Monday'}),
        knex('availability').insert({availability_id: 2, night: 'Tuesday'}),
        knex('availability').insert({availability_id: 3, night: 'Wednesday'}),
        knex('availability').insert({availability_id: 4, night: 'Thursday'}),
        knex('availability').insert({availability_id: 5, night: 'Friday'}),
        knex('availability').insert({availability_id: 6, night: 'Saturday'}),
        knex('availability').insert({availability_id: 7, night: 'Sunday'}),
      ]);
    });
};
