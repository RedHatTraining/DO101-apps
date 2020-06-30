var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World!  Welcome to DO101\n');
});

app.get('/mars', function (req, res) {
  res.send('Hello Mars!\n');
});

app.get('/moon', function (req, res) {
  res.send('Hello Apollo!\n');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

