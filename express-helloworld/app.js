var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World!\n');
});
app.get('/four', function(req, res) {
  res.send('Hello Four..Welcome to Red Hat DO101 course!\n');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

