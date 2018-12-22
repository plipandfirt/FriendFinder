var path = require("path");

module.exports = function(app) {
    app.get("/friends", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
      });
    

      app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
      });
    };


// ===========================================================

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "app/public/home.html"));
});


app.get("/home", function (req, res) {
  res.sendFile(path.join(__dirname, "app/public/home.html"));
});


app.get("/survey", function (req, res) {
  res.sendFile(path.join(__dirname, "app/public/survey.html"));
});


// ===========================================================

app.get("/api/friends", function (req, res) {
  return res.json(friends);
});


// ===========================================================


app.post("/api/survey", function (req, res) {

  var newFriend = req.body;

  console.log(newFriend);
  friends.push(newFriend);


  res.json(true);
});