
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ratings').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('ratings').insert({user_id: 2, resource_id: 1, rating: 3}),
        knex('ratings').insert({user_id: 1, resource_id: 3, rating: 4}),
        knex('ratings').insert({user_id: 3, resource_id: 1, rating: 5}),
        knex('ratings').insert({user_id: 3, resource_id: 2, rating: 5}),
        knex('ratings').insert({user_id: 1, resource_id: 4, rating: 5}),
        knex('ratings').insert({user_id: 3, resource_id: 3, rating: 2})
      ]);
    });
};
