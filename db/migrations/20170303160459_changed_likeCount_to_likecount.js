exports.up = function(knex, Promise) {
    return knex.schema.table('resources', function(t) {
        t.dropColumn('likeCount');
        t.integer('likecount');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.table('resources', function(t) {
        t.dropColumn('likecount');
        t.integer('likeCount');
    });
};
