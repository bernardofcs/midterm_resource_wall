exports.up = function(knex, Promise) {
    return knex.schema.table('users', function(t) {
        t.string('email');
        t.string('username');
        t.string('password');
        t.string('avatar');

    });
};

exports.down = function(knex, Promise) {
    return knex.schema.table('resources', function(t) {
        t.dropColumn('user_id');
        t.dropColumn('username');
        t.dropColumn('password');
        t.dropColumn('avatar');
    });
};
