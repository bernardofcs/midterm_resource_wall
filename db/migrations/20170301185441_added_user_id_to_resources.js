exports.up = function(knex, Promise) {
    return knex.schema.table('resources', function(t) {
        t.integer('user_id').notNull();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.table('resources', function(t) {
        t.dropColumn('user_id');
    });
};
