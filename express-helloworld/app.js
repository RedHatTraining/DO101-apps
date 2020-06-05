var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World!\n');
});

app.get('/mars', function (req, res) {
  res.send('Hello amrs!\n');
});

app.get('/abc', function (req, res) {
  res.send('Hello abcd!\n');
});

app.get('/abcd', function (req, res) {
  res.send('Hello abcdddd!\n');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

