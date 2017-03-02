exports.up = function(knex, Promise) {
    return knex.schema.table('users', function(t) {
        t.dropColumn('username');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.table('users', function(t) {
        t.string('username');
    });
};
