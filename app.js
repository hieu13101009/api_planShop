const express = require('express')
const volleyball = require('volleyball')
const app = express()
const port = 3000
const auth = require('./auth/index.js');

app.use(volleyball);
app.use(express.json());
app.use('/auth',auth);
app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))