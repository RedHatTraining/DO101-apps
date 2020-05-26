
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  console.log('estou no consolse')
  res.send('ola mundo');
});


app.get('/mars', function (req, res) {
  console.log('estou no consolse')
  res.send('ola marte');
});



app.listen(8000, function () {
  console.log('escrevendo na porta 8000!');
});

