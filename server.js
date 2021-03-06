"use strict";

require('dotenv').config();

const PORT        = process.env.PORT || 8080;
const ENV         = process.env.ENV || "development";
const express     = require("express");
const bodyParser  = require("body-parser");
const sass        = require("node-sass-middleware");
const app         = express();
const cookieSession = require('cookie-session')
const flash = require('connect-flash');
const knexConfig  = require("./knexfile");
const knex        = require("knex")(knexConfig[ENV]);
const morgan      = require('morgan');
const knexLogger  = require('knex-logger');

// Seperated Routes for each Resource
const usersRoutes = require("./routes/users");
const resourcesRoutes = require("./routes/resources");

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2']
}))

// Log knex SQL queries to STDOUT as well
app.use(knexLogger(knex));
app.use(flash());

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));
app.use(express.static("public"));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Mount all resource routes
app.use("/users", usersRoutes(knex));
app.use("/resources", resourcesRoutes(knex));

// Home page
app.get("/", (req, res) => {
  if(req.session.userId){
    knex
    .select('name')
    .from('users')
    .where('id', '=', req.session.userId)
    .then((result) =>{
      let loggedname = '';
      for(let row of result){
        loggedname = row.name;
      }
      res.render("index", {name: loggedname});
    return;
    })

  }
  else{
    res.render("login.ejs")
  }
});

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
