
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('comments').insert({user_id: 1, resource_id: 2, content: 'Trump is a f****** baffoon.'}),
        knex('comments').insert({user_id: 2, resource_id: 3, content: "I can't make this work on vagrant zzz."}),
        knex('comments').insert({user_id: 3, resource_id: 4, content: "It's always awkward."}),
        knex('comments').insert({user_id: 2, resource_id: 4, content: 'Same.'}),
        knex('comments').insert({user_id: 3, resource_id: 1, content: 'Materialize is better kek.'})
      ]);
    });
};
