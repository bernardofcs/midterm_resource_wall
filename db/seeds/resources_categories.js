
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('resources_categories').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('resources_categories').insert({resource_id:  1, category_id: 2}),
        knex('resources_categories').insert({resource_id:  2, category_id: 1}),
        knex('resources_categories').insert({resource_id:  2, category_id: 4}),
        knex('resources_categories').insert({resource_id:  3, category_id: 2}),
        knex('resources_categories').insert({resource_id:  3, category_id: 3}),
        knex('resources_categories').insert({resource_id:  4, category_id: 4})
      ]);
    });
};
