var express = require('express');
app = express();

app.get('/mars', function (req, res) {
  res.send('Hello Mars!\n');
});

app.get('/natsheh', function (req, res) {
  res.send('Hello Mr. Natsheh, this rocks sir!!!!!!!!\n');
});

app.get('/', function (req, res) {
  res.send('Hello World!\n');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

