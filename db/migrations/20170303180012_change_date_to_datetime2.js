exports.up = function(knex, Promise) {
    return knex.schema.table('resources', function(t) {
        t.datetime('date_created');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.table('resources', function(t) {
        t.dropColumn('date_created');
    });
};
