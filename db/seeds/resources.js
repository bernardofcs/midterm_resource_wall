
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('resources').insert({id: 1, url: 'https://www.w3schools.com/bootstrap/bootstrap_collapse.asp', description: 'Bootstrap collapse', likeCount: 1, rating: 4, user_id: 1, date_created: '2017-02-22'}),
        knex('resources').insert({id: 2, url: 'https://www.quora.com/Why-does-it-seem-like-Donald-Trump-is-very-trashy-and-low-class-to-me/answer/Simon-Kinahan', description: 'Why is Trump trashy?', likeCount: 3, rating: 5, user_id: 1, date_created: '2017-02-02'}),
        knex('resources').insert({id: 3, url: 'http://stackoverflow.com/questions/18776142/vagrant-postgresql-and-external-db-gui', description: 'GUI for postgresql', likeCount: 1, rating: 4, user_id: 2, date_created: '2017-02-08'}),
        knex('resources').insert({id: 4, url: 'https://www.reddit.com/r/AskReddit/comments/5wuzna/what_is_your_to_go_question_to_kill_awkward/', description: 'Killing the awkward silence', likeCount: 1, rating: 0, user_id: 3, date_created: '2017-02-25'})
      ]);
    });
};
