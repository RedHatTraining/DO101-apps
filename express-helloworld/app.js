const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!\n'));

app.get('/mars', (req, res) => res.send('Hello Mars!\n'))

app.listen(8080, () => console.log('Example app listening on port 8080!'))
