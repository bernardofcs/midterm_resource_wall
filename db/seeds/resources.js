
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('resources').insert({url: 'https://www.w3schools.com/bootstrap/bootstrap_collapse.asp', description: 'Bootstrap collapse', likecount: 1, rating: 4, user_id: 1, date_created: '2017-02-22 12:05:01'}),
        knex('resources').insert({url: 'https://www.quora.com/Why-does-it-seem-like-Donald-Trump-is-very-trashy-and-low-class-to-me/answer/Simon-Kinahan', description: 'Why is Trump trashy?', likecount: 3, rating: 5, user_id: 1, date_created: '2017-02-02 18:12:13'}),
        knex('resources').insert({url: 'http://stackoverflow.com/questions/18776142/vagrant-postgresql-and-external-db-gui', description: 'GUI for postgresql', likecount: 1, rating: 4, user_id: 2, date_created: '2017-02-08 09:39:45'}),
        knex('resources').insert({url: 'https://www.reddit.com/r/AskReddit/comments/5wuzna/what_is_your_to_go_question_to_kill_awkward/', description: 'Killing the awkward silence', likecount: 1, rating: 0, user_id: 3, date_created: '2017-02-25 16:21:24'})
      ]);
    });
};
