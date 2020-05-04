const express = require('express');
app = express();

var response;

app.get('/', function(req, res) {

    response = 'Version 3 This time atleast you should work This is modified by Tennis Star.' + '\n';

    //send the response to the client and validate
    res.send(response);

});

app.listen(8080, function() {
    console.log('Server listening on port 8080...');
});