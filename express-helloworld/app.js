var express = require('express');
app = express();

app.get('/', function(req, res) {
    res.send('Hello World!\n');
});

app.get('/Jup', function(req, res) {
    res.send('Hello Namaste Jupiter!\n');
});

app.get('/Sat', function(req, res) {
    res.send('Hello Saturn Thanks for coming!\n');
});

app.listen(8080, function() {
    console.log('Example app listening on port 8080!');
});