const express = require('express');
app = express();

var response;

app.get('/', function(req, res) {

    response = 'Version 6 Both Rohith and Chetan are Bad Boys :-) .' + '\n';

    //send the response to the client and validate
    res.send(response);

});

app.listen(8080, function() {
    console.log('Server listening on port 8080...');
});