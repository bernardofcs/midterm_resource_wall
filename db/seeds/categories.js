
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('categories').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('categories').insert({category: 'Politics'}),
        knex('categories').insert({category: 'Programming'}),
        knex('categories').insert({category: 'Databases'}),
        knex('categories').insert({category: 'Diverse'})
      ]);
    });
};
