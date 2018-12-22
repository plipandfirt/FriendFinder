// load data

var friendsData = require("../data/friends");

//honestly, I don't understand what requests go in what files. I know putting all of them in every file isn't correct. Right now I have app.xxx requests in 3 files...very frustrating.  :`(

app.get("/api/friends", function (req, res) {
    res.json(friendsData);
});

app.post("/api/friends", function (req, res) {
    if (friendsData.length < 5) {
        friendsData.push(req.body);
        res.json(true);
    }
});

app.post("/api/friends", function (req, res) {
    tableData.length = [];
});

module.exports = function (app){}
