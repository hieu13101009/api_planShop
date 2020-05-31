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
    origin: 'http://192.168.1.2:3000'
}))
app.get('/', (req, res) => {
    res.send('Hello World');
    console.log('---------2---------');
});
app.use('/auth',auth);
app.use(volleyball);

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);