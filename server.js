var express = require('express');
var app = express();
var GoogleSpreadsheets = require("google-spreadsheets");

app.set('view engine', 'ejs');
app.use(express.static('public'));


app.get("/", function(req, res) {
  var host = req.get('host');
  var domain = host.substring(host.indexOf("."));
  console.log(domain);
  res.render("index", {
    domain: domain
  });
});


app.get("/data", function (req, res) {
  var data;

  GoogleSpreadsheets({
      key: "19o1rIntdoNmEVa7iG6x9eZc6Ph6UiPrBdbPvI1jiFjY"
  }, function(err, spreadsheet) {
      spreadsheet.worksheets[0].cells({
          // grab all the data
          range: "R1C1:R50C5"
      }, function(err, result) {
        // Put in-memory store for now
        data = result.cells;
        var keys = [];
        for (var i in data) {
          keys.push(i);
        }

        keys.sort();

        var n = [];

        for (var j = 1; j < 4; j++) {
          var fields = ["title", "link", "date", "description", "embed"];
          var currentItem = data[keys[keys.length - j]];
          var newItem = {};
          for (var k = 0; k < fields.length; k++) {
            if (currentItem[k + 1]) {
              newItem[fields[k]] = currentItem[k + 1]["value"];
            }
          }
          n.push(newItem);
        }

        res.send({data: n});
      });
  });
});

app.get("/new", function(req, res) {
  res.redirect("/now");
});

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
