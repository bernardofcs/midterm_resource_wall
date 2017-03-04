"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/", (req, res) => {
    knex
      .select("*")
      .from("resources")
      .then((results) => {
        res.json(results);
    });
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

  // router.get("/:id/collection", (req, res) => {
  //   res.render("mycollection.ejs");
  // })

  return router;
}
