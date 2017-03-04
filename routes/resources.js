"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.post("/search", (req, res) => {
    let search = req.body.searchText;
    knex
      .select('*')
      .from("resources")
      .where('description', 'like', ('%' + search + '%'))
      .then((results) => {
        res.json(results)
      })
  })

  router.get("/", (req, res) => {
    knex
      .select("*")
      .from("resources")
      .then((results) => {
        res.json(results);
      });
  });



  router.post("/mycollection/:id", (req, res) => {
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
    knex('resources').insert([{
      url: req.body.url,
      description: req.body.desc,
      likecount: 0,
      rating: 0,
      user_id: req.session.userId,
      date_created: '2017-03-02'
    }])
      .then(function() {
        res.redirect("/");
      })
  })


  // router.get("/:id/edit", (req, res) => {
  //   res.render("edit.ejs");
  // });

  router.get("/:id/collection", (req, res) => {
    res.render("mycollection.ejs");
  })

  return router;
}
