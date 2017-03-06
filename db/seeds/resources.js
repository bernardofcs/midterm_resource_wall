
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('resources').insert({url: 'https://www.w3schools.com/bootstrap/bootstrap_collapse.asp', description: 'Bootstrap collapse', likecount: 1, rating: 4, user_id: 1, date_created: '2017-02-22 12:05:01', image: 'https://1.bp.blogspot.com/-mTHc1c2DevA/WEDyKE1Mf7I/AAAAAAAAA8Q/mLb9vZa_l6Il2LAQm41St6cEPKmR6zb-ACLcB/s1600/w3schools_logo.png'}),
        knex('resources').insert({url: 'https://www.quora.com/Why-does-it-seem-like-Donald-Trump-is-very-trashy-and-low-class-to-me/answer/Simon-Kinahan', description: 'Why is Trump trashy?', likecount: 3, rating: 5, user_id: 1, date_created: '2017-02-02 18:12:13', image:'https://qph.ec.quoracdn.net/main-qimg-46fdf5186143bd062d40722da7b4d3ca-p'}),
        knex('resources').insert({url: 'http://stackoverflow.com/questions/18776142/vagrant-postgresql-and-external-db-gui', description: 'GUI for postgresql', likecount: 1, rating: 4, user_id: 2, date_created: '2017-02-08 09:39:45', image:'https://cdn.sstatic.net/Sites/stackoverflow/img/apple-touch-icon@2.png?v=73d79a89bded'}),
        knex('resources').insert({url: 'https://www.reddit.com/r/AskReddit/comments/5wuzna/what_is_your_to_go_question_to_kill_awkward/', description: 'Killing the awkward silence', likecount: 1, rating: 0, user_id: 3, date_created: '2017-02-25 16:21:24', image: 'http://cdn.ndtv.com/tech/images/gadgets/thumb/reddit_logo_ndtv_small.jpg'}),
        knex('resources').insert({url: 'http://www.imdb.com/title/tt3731562/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=2750721702&pf_rd_r=18K9T3TEQ0BSBY1Y71V6&pf_rd_s=right-2&pf_rd_t=15061&pf_rd_i=homepage&ref_=hm_otw_t0', description: 'Kong: Skull Island', likecount: 2, rating: 3, user_id: 3, date_created: '2017-03-05 10:39:45', image:'https://images-na.ssl-images-amazon.com/images/M/MV5BMTUwMzI5ODEwNF5BMl5BanBnXkFtZTgwNjAzNjI2MDI@._V1_UX182_CR0,0,182,268_AL_.jpg'})

      ]);
    });
};
