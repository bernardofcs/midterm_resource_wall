exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments', function (table) {
    table.increments();
    table.integer('user_id');
    table.integer('resource_id');
    table.string('content');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comments');
};
