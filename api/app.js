const express = require('express');
const volleyball = require('volleyball');
const auth = require('./auth/index.js');
const cors = require('cors');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App

const app = express();
app.use(volleyball);
app.use(express.json());
app.use(cors({
    origin: '*'
}))

app.use((req, res, next) => {
    console.log('every thing go here');
    next();
});

app.get('/', (req, res) => {
    res.send('Hello World');
});
app.use('/auth',auth);

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);