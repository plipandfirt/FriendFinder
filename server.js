// Dependencies
var express = require("express");
var path = require("path");

var friends = require("./app/data/friends");

// tell node we are creating an "express" server
var app = express();

// set initial port
var PORT = process.env.PORT || 8080;

// tell express app to handle data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// server maps
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "app/public/home.html"));
  });

  app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname, "app/public/home.html"));
  });

  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "app/public/survey.html"));
  });
// Listener - starts the server
app.listen(PORT, function() {
    console.log("App is listening on PORT: " + PORT);
});

