var express = require('express');
app = express();

app.get('/morocoo', function (req, res) {
  res.send('Hello Morocco!\n');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

