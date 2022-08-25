var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Version1!\n '+ new Date());
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

