"use strict";

const express = require('express');
const router  = express.Router();
const md5 = require('md5');

module.exports = (knex) => {

  function createAvatar(email){
    const avatarUrlPrefix = `https://vanillicon.com/${md5(email)}`;
    const avatars = {
      small:   `${avatarUrlPrefix}_50.png`,
      regular: `${avatarUrlPrefix}.png`,
      large:   `${avatarUrlPrefix}_200.png`
    }
    console.log(avatars);
    return avatars.small;
  }

  router.get("/", (req, res) => {
    res.render("login.ejs");
  })

  router.post("/login", (req, res) => {
    console.log(req.body.userEmail, req.body.userPassword);
    knex('users').where({
      email: req.body.userEmail,
      password: req.body.userPassword
    })
      .asCallback(function(err, rows){
        if(rows.length > 0){
          req.session.userId = rows[0].id;
          console.log(req.session.userId);
          res.redirect("/");
        } else {
          res.send("Username or password do not exist");
        }
      })
  })

  router.post("/register", (req, res) => {
    knex('users').insert([{name: req.body.name, email: req.body.reg_email, password: req.body.reg_password, avatar: createAvatar(req.body.reg_email)
    }])
    .then(function(resp) {
        res.redirect("/");
    })
  })

  router.post("/saveurl", (req, res) => {
    knex('resources').insert([{
      url: req.body.url,
      description: req.body.desc,
      likecount: 0,
      rating: 0,
      user_id: req.session.userId,
      date_created: '2017-03-02'
    }])
      .then(function() {
        console.log("done");
      })
  })

  router.get("/:id/edit", (req, res) => {
    res.render("edit.ejs");
  });

  router.get("/:id/collection", (req, res) => {
    res.render("mycollection.ejs");
  });



  return router;
}
