var path = require("path");

module.exports = function(app) {
    app.get("/friends", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
      });
    
      // If no matching route is found default to home
      app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
      });
    };

    // MG Routes for displaying HTML pages
// ===========================================================
// route sends user to home page
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "app/public/home.html"));
});

// route sends user to home page
app.get("/home", function (req, res) {
  res.sendFile(path.join(__dirname, "app/public/home.html"));
});

// route sends user to survey page
app.get("/survey", function (req, res) {
  res.sendFile(path.join(__dirname, "app/public/survey.html"));
});

// Routes for gets
// ===========================================================
// Displays all tables
app.get("/api/friends", function (req, res) {
  return res.json(friends);
});

// Routes for posts
// ===========================================================

// Take in the survey information - takes in JSON input
app.post("/api/survey", function (req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newFriend = req.body;

  console.log(newFriend);
  friends.push(newFriend);

  // run the survey match logic here.
  // var surveyResults = processSurvey(newFriend);

  // We then display the survey  JSON to the users
  res.json(true);
});