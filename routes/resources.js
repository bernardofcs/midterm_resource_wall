"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.post("/add-likes", (req, res) => {
    console.log("you have reached the router!");
    debugger;
    knex('resources')
      .where('id', '=', req.body.resourceId)
      .increment('likecount', 1)
      .then(function() {
        knex('likes').insert([{
          user_id: req.session.userId,
          resource_id: req.body.resourceId
        }]).then( function() {
          res.redirect("/");
        })
        console.log("updated!")
      })
  })

  router.post("/ratings", (req, res) => {
    knex('ratings')
    .insert([{
      user_id: req.session.userId,
      resource_id: req.body.resourceId
    }])
      .then(function() {
        knex('likes').insert([{
          user_id: req.session.userId,
          resource_id: req.body.resourceId,
          rating: req.body.rating
        }])
        console.log("updated!")
        res.redirect("/");
      })
  })

  router.get("/", (req, res) => {
    console.log("hello resource /");
    knex
      .select("*")
      .from("resources")
      .then((results) => {
        res.json(results);
      });
  });

  router.get("/:id", (req, res) => {
    knex("resources")
      .join("users", "user_id", "=", "users.id")
      .select('*')
      .where('user_id', '=', req.params.id)
      .then((results) => {
        res.json(results);
      });
  });

  router.get("/liked/:id", (req, res) => {
    knex("resources")
      .join("likes", "resource_id", "=", "resources.id")
      .select('*')
      .where('likes.user_id', '=', req.params.id)
      .then((results) => {
        res.json(results);
      });
  });

  router.post("/saveurl", (req, res) => {
    let url_raw = req.body.url;
    knex('resources').insert([{
      url: url_raw,
      description: req.body.desc,
      likecount: 0,
      rating: 0,
      user_id: req.session.userId,
      date_created: '2017-03-02'
    }])
    .then( () => {
      res.redirect('/')
    })
  });

  router.post("/add-likes", (req, res) => {
    knex('resources')
    .where('id', '=', req.body.resourceId)
    .increment('likecount', 1)
      .then(function() {
        res.redirect("/");
      })
  })

  // router.get("/", (req, res) => {
  //   res.render("login.ejs");
  // })

  // router.get("/:id/edit", (req, res) => {
  //   res.render("edit.ejs");
  // });

  router.get("/:id/collection", (req, res) => {
    res.render("mycollection.ejs");
  })

  return router;
}
