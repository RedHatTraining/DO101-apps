var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World!\n');
});

// Display different message when someone visits /mars endpoint.
app.get('/mars', function(req, res) {
  res.send('Hello Mars!\n');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080, to visit open http://localhost:8080!');
});

