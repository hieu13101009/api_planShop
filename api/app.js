const express = require('express');
const volleyball = require('volleyball');
const auth = require('./auth/index.js');
const cors = require('cors');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.use(express.json());
app.use(cors({
    origin: '*'
}))
app.get('/', (req, res) => {
    res.send('Hello Worlds');
    console.log('---------11111---------');
});
app.use('/auth',auth);
app.use(volleyball);

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);