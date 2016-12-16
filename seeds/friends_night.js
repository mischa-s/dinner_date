
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('friends_night').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('friends_night').insert({friends_id: 1, night_id: 7}),
        knex('friends_night').insert({friends_id: 1, night_id: 4}),
        knex('friends_night').insert({friends_id: 1, night_id: 2}),
        knex('friends_night').insert({friends_id: 3, night_id: 1}),
        knex('friends_night').insert({friends_id: 3, night_id: 6}),
        knex('friends_night').insert({friends_id: 3, night_id: 5}),
        knex('friends_night').insert({friends_id: 2, night_id: 1}),
        knex('friends_night').insert({friends_id: 2, night_id: 7}),
        knex('friends_night').insert({friends_id: 2, night_id: 3}),
        knex('friends_night').insert({friends_id: 7, night_id: 2}),
        knex('friends_night').insert({friends_id: 7, night_id: 1}),
        knex('friends_night').insert({friends_id: 7, night_id: 3}),
        knex('friends_night').insert({friends_id: 5, night_id: 5}),
        knex('friends_night').insert({friends_id: 5, night_id: 6}),
        knex('friends_night').insert({friends_id: 5, night_id: 7}),
        knex('friends_night').insert({friends_id: 4, night_id: 3}),
        knex('friends_night').insert({friends_id: 4, night_id: 4}),
        knex('friends_night').insert({friends_id: 4, night_id: 5}),
        knex('friends_night').insert({friends_id: 6, night_id: 6}),
        knex('friends_night').insert({friends_id: 6, night_id: 7}),
        knex('friends_night').insert({friends_id: 6, night_id: 1})
      ]);
    });
};
