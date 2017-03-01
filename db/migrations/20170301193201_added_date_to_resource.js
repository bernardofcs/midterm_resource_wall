exports.up = function(knex, Promise) {
    return knex.schema.table('resources', function(t) {
        t.date('date_created');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.table('resources', function(t) {
        t.dropColumn('date_created');
    });
};
