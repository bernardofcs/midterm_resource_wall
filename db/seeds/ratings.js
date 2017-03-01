
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ratings').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('ratings').insert({id: 1, user_id: 2, resource_id: 1, rating: 3}),
        knex('ratings').insert({id: 2, user_id: 1, resource_id: 3, rating: 4}),
        knex('ratings').insert({id: 3, user_id: 3, resource_id: 1, rating: 5}),
        knex('ratings').insert({id: 4, user_id: 3, resource_id: 2, rating: 5}),
        knex('ratings').insert({id: 5, user_id: 1, resource_id: 4, rating: 5}),
        knex('ratings').insert({id: 6, user_id: 3, resource_id: 3, rating: 2})
      ]);
    });
};
