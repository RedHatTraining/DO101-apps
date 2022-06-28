const express = require('express');
app = express();

var response;

app.get('/', function (req, res) {

    response = 'Hello World, este es el segundo ejercicio!' + '\n';

    //send the response to the client
    res.send(response);

});

app.listen(8080, function () {
  console.log('Server listening on port 8080...');
});
