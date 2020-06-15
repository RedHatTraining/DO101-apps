const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!\n'));

app.get('/mars', (req, res) => res.send('Hello Mars!\n'))

app.get('/venus', (req, res) => res.send('Hello Venus!\n'))

app.get('/mercury', (req, res) => res.send('Hello Mercury!\n'))

app.listen(8080, () => console.log('Example app listening on port 8080!'))
