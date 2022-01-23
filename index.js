const express = require('express')
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => res.send('Augusto Diaz App'))

app.listen(port, () => console.log(port))