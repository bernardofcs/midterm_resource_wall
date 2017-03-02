"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  // router.get("/", (req, res) => {
  //   knex
  //     .select("*")
  //     .from("users")
  //     .then((results) => {
  //       //res.json(results);
  //   });
  // });

  router.get("/", (req, res) => {
    res.render("login.ejs");
  })

  router.post("/login", (res, req) => {
    console.log("login post");
    res.redirect("/")
  })

  router.get("/:id/edit", (req, res) => {
    res.render("edit.ejs");
  });

  router.get("/:id/collection", (req, res) => {
    res.render("mycollection.ejs");
  })

  return router;
}
