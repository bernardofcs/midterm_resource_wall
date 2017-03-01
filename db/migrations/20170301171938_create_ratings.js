exports.up = function(knex, Promise) {
  return knex.schema.createTable('ratings', function (table) {
    table.increments();
    table.integer('user_id');
    table.integer('resource_id');
    table.float('rating');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('ratings');
};
