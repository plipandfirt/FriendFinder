// Dependencies
var express = require("express");
var path = require("path");

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

// Listener - starts the server
app.listen(PORT, function() {
    console.log("App is listening on PORT: " + PORT);
});

// Routes
// =============================================================

// // Basic route that sends the user first to the AJAX Page
// app.get("/", function(req, res) {
//     // res.send("Welcome to the Star Wars Page!")
//     res.sendFile(path.join(__dirname, "view.html"));
//   });