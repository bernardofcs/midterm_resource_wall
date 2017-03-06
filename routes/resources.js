"use strict";

const express = require('express');
const router  = express.Router();
var jsdom = require("node-jsdom");


// jsdom.env(
// HtmlString,
//   function (errors, window) {
//     var imgs = window.document.getElementsByTagName('img');
//     for (var i = 0; i < imgs.length; i++) {
//       var src = imgs[i].getAttribute('src');
//       images.push(src);
//     }
//   });
//   console.log(img_source('http://comicbook.com/thewalkingdead/2017/03/01/the-walking-dead-season-7-fills-out-imdbs-top-10-worst-episodes-/'));

module.exports = (knex) => {

  router.get("/search/:desc", (req, res) => {
    // let search = req.body.searchText;
    console.log('hello /search/:desc')
    console.log('req.params.desc: ' + req.params.desc);
    if(req.params.desc !== 'undefined'){
      knex
        .select('*')
        .from("resources")
        .where('description', 'like', ('%' + req.params.desc + '%'))
        .then((results) => {
          res.json(results);
        });
      }else{
        knex
      .select("*")
      .from("resources")
      .then((results) => {
        res.json(results);
      });
      }
  });
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
      .orderBy('description', 'asc')
      .then((results) => {
        res.json(results);
      });
  });



  router.get("/mycollection/:id", (req, res) => {
    knex("resources")
      .join("users", "user_id", "=", "users.id")
      .select('*')
      .where('user_id', '=', req.session.userId)
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
  let desp = req.body.url;
  console.log(desp);
  jsdom.env(desp, function(errors, window){
    var images = [];
    let imageToDb = "";
    var searchString = /.jpg/i;
    var imgs = window.document.getElementsByTagName('img');
    for (var i = 0; i < imgs.length; i++) {
      var src = imgs[i].getAttribute('src');
      let url = src.search(searchString, src);
      if(!(url === -1)){
        images.push(src);
      }
    }
    if(images.length === 0){
      imageToDb = '/images/no_image.gif';
    } else {
      imageToDb = images[0];
    }

    let url_raw = req.body.url;
    knex('resources').insert([{
      url: url_raw,
      description: req.body.desc,
      image: imageToDb,
      likecount: 0,
      rating: 0,
      user_id: req.session.userId,
      date_created: '2017-03-02'
    }]).then(() => {
      res.redirect("/");
    })
  })
})


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
