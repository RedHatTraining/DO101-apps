var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World!\n');
});

app.get('/mars', function(req, res) {
  res.send('Hello Mars!\n');
});

app.listen(8080, function () {
  console.log('Ejempo de escucha en puerto 8080!');
});

