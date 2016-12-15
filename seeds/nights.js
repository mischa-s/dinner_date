
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('availability').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('availability').insert({availability_id: 1, night: 'monday', friend_id: 1 }),
        knex('availability').insert({availability_id: 2, night: 'wed', friend_id: 1}),
        knex('availability').insert({availability_id: 3, night: 'monday', friend_id: 2}),
        knex('availability').insert({availability_id: 4, night: 'tuesday', friend_id:2}),
        knex('availability').insert({availability_id: 5, night: 'thursday', friend_id: 3}),
        knex('availability').insert({availability_id: 6, night: 'friday', friend_id:3}),
        knex('availability').insert({availability_id: 7, night: 'sat', friend_id:4}),
        knex('availability').insert({availability_id: 8, night: 'sun', friend_id: 4}),
        knex('availability').insert({availability_id: 9, night: 'monday', friend_id: 5}),
        knex('availability').insert({availability_id: 10, night: 'tuesday', friend_id: 5}),
        knex('availability').insert({availability_id: 11, night: 'wed', friend_id: 6}),
        knex('availability').insert({availability_id: 12, night: 'thursday', friend_id: 6}),
        knex('availability').insert({availability_id: 13, night: 'friday', friend_id: 7}),
        knex('availability').insert({availability_id: 14, night: 'sat', friend_id: 7}),
        knex('availability').insert({availability_id: 15, night: 'sun', friend_id: 3})
      ]);
    });
};
