exports.up = function(knex, Promise) {
  return knex.schema.createTable('resources', function (table) {
    table.increments();
    table.string('url');
    table.string('description');
    table.integer('likeCount');
    table.float('rating');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('resources');
};
