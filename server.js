// server.js
// where your node app starts

// init project
var express = require("express");
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/api/:date?", function (req, res) {
  console.log("Date: ", req.params.date);
  let date;
  if (req.params.date) {
    if (/^\d+$/.test(req.params.date)) {
      date = new Date(parseInt(req.params.date));
    } else {
      date = new Date(req.params.date);
    }
    if (date.getUTCHours()) date.setHours(-date.getUTCHours());
  } else {
    date = new Date();
  }

  if (isNaN(date.getTime())) {
    console.log("Res: ", { error: "Invalid Date" });
    res.json({ error: "Invalid Date" });
  } else {
    console.log("Res: ", { unix: date.valueOf(), utc: date.toUTCString() });
    res.json({ unix: date.valueOf(), utc: date.toUTCString() });
  }
});

// listen for requests :)
var listener = app.listen(3100, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
