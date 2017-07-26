var express = require('express');
var app = express();
var GoogleSpreadsheets = require("google-spreadsheets");


app.use(express.static('public'));

app.get("/data", function (req, res) {
  var data;
  
  GoogleSpreadsheets({
      key: "19o1rIntdoNmEVa7iG6x9eZc6Ph6UiPrBdbPvI1jiFjY"
  }, function(err, spreadsheet) {
      spreadsheet.worksheets[0].cells({
          // grab all the data
          range: "R1C1:R50C2"
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
        
          n.push({
            code: data[keys[keys.length - j]][1]["value"],
            date: data[keys[keys.length - j]][2]["value"]
          })
        }

        res.send({data: n});
      });
  });
  
  
});

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
