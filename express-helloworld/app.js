const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/mars', (req, res) => res.send('Welcome to Mars!'));
app.get('/myworld', (req, res) => res.send('This is my world!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
