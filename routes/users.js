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

  router.get("/collection", (req, res) => {
    res.render("mycollection.ejs");
  })

  router.get("/liked", (req, res) => {
    res.render("myliked.ejs");
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


  router.get("/:id/edit", (req, res) => {
    res.render("edit.ejs");
  })



  return router;
}
