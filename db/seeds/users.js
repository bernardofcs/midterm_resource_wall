
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({id: 1, email: 'johndoe@gmail.com', password: 'password', name: 'John Doe', avatar: 'johndoe.png'}),
        knex('users').insert({id: 2, email: 'janedoe@gmail.com', password: 'password', name: 'Jane Doe', avatar: 'janedoe.png'}),
        knex('users').insert({id: 3, email: 'foobar@gmail.com', password: 'password', name: 'Foo Bar', avatar: 'foobar.png'})
      ]);
    });
};
