"use strict";
exports.__esModule = true;
var express_1 = require("express");
var rateLimit = require('express-rate-limit');
var slowDown = require('express-slow-down');
var middleware = require('./auth/middleware');
var volleyball = require('volleyball');
var auth = require('./auth/index.js');
var notes = require('./api/notes.js');
var cors = require('cors');
// Constants
var PORT = 8080;
var HOST = '0.0.0.0';
// App
var app = express_1["default"]();
app.use(volleyball);
app.use(express_1["default"].json());
app.use(cors({
    origin: '*'
}));
var limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 1000 // limit each IP to 100 requests per windowMs
});
var speedLimiter = slowDown({
    windowMs: 15 * 60 * 1000,
    delayAfter: 1000,
    delayMs: 50000 // begin adding 500ms of delay per request above 100:
    // request # 101 is delayed by  500ms
    // request # 102 is delayed by 1000ms
    // request # 103 is delayed by 1500ms
    // etc.
});
app.use(limiter, speedLimiter, middleware.checkTokenSetUser);
app.get('/', function (req, res) {
    res.send('Hello World');
});
app.use('/auth', auth);
app.use('/api/v1/notes', middleware.isLoggedIn, notes);
app.listen(PORT, HOST);
console.log("Running on http://" + HOST + ":" + PORT);
