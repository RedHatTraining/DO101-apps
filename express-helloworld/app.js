var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World!\n');
});

app.get('/mars', function (req, res) {
  res.send('Hello Mars!\n');
});

app.get('/vm', function (req, res) {
  res.send('Hello Vishal Mishra!\n');
});

app.get('/vishal', function (req, res) {
  res.send('Hello Vishal Mishra!\n');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

