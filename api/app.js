const express = require('express');
const middleware = require('./auth/middleware');
const volleyball = require('volleyball');
const auth = require('./auth/index.js');
const notes = require('./routers/index.js')
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

app.use(middleware.checkTokenSetUser);

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/auth',auth);
app.use('/api/v1/notes', middleware.isLoggedIn, notes);

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);