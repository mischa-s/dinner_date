
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('friends').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('friends').insert({id: 1, friend_name: 'Sue'}),
        knex('friends').insert({id: 2, friend_name: 'Leonard'}),
        knex('friends').insert({id: 3, friend_name: 'Sally'}),
        knex('friends').insert({id: 4, friend_name: 'Paul'}),
        knex('friends').insert({id: 5, friend_name: 'Meghan'}),
        knex('friends').insert({id: 6, friend_name: 'Mischa'}),
        knex('friends').insert({id: 7, friend_name: 'Janie'})
      ]);
    });
};
