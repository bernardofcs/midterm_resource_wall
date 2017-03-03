
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries

        knex('users').insert({email: 'johndoe@gmail.com', password: 'password', name: 'John Doe', avatar: 'johndoe.png'}),
        knex('users').insert({email: 'janedoe@gmail.com', password: 'password', name: 'Jane Doe', avatar: 'janedoe.png'}),
        knex('users').insert({email: 'foobar@gmail.com', password: 'password', name: 'Foo Bar', avatar: 'foobar.png'})
      ]);
    });
};
