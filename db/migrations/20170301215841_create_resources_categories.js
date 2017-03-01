exports.up = function(knex, Promise) {
  return knex.schema.createTable('resources_categories', function (table) {
    table.increments();
    table.integer('resource_id');
    table.integer('category_id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('resources_categories');
};
