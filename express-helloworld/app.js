var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('The cake is a lie on Earth!\n');
});

app.get('/mars', function (req, res) {
  res.send('The cake is a lie on Mars too!\n');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

