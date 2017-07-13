var express = require('express');
var app = express();
app.use(express.static('public'));

app.get("/", function (req, res) {
  res.send("pw17");
});

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
