exports.up = function(knex, Promise) {
    return knex.schema.table('resources', function(t) {
        t.string('image');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.table('resources', function(t) {
        t.dropColumn('image');
    });
};
