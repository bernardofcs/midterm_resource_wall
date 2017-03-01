exports.up = function(knex, Promise) {
  return knex.schema.createTable('categories', function (table) {
    table.increments();
    table.string('category');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('categories');
};
