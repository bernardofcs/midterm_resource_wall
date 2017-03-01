
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('resources_categories').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('resources_categories').insert({id: 1, resource_id:  1, category_id: 2}),
        knex('resources_categories').insert({id: 2, resource_id:  2, category_id: 1}),
        knex('resources_categories').insert({id: 3, resource_id:  2, category_id: 4}),
        knex('resources_categories').insert({id: 4, resource_id:  3, category_id: 2}),
        knex('resources_categories').insert({id: 5, resource_id:  3, category_id: 3}),
        knex('resources_categories').insert({id: 6, resource_id:  4, category_id: 4})
      ]);
    });
};
