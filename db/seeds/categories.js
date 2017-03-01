
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('categories').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('categories').insert({id: 1, category: 'Politics'}),
        knex('categories').insert({id: 2, category: 'Programming'}),
        knex('categories').insert({id: 3, category: 'Databases'}),
        knex('categories').insert({id: 4, category: 'Diverse'})
      ]);
    });
};
