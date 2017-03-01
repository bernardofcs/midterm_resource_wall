exports.up = function(knex, Promise) {
  return knex.schema.createTable('likes', function (table) {
    table.increments();
    table.integer('user_id');
    table.integer('resource_id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('likes');
};
