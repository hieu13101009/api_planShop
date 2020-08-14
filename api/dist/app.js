"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var express_rate_limit_1 = __importDefault(require("express-rate-limit"));
var express_slow_down_1 = __importDefault(require("express-slow-down"));
// import middleware from './auth/middleware';
// import volleyball from 'volleyball';
// import auth from './auth/index.js';
// import notes from './api/notes.js';
var cors_1 = __importDefault(require("cors"));
// Constants
var PORT = 8080;
var HOST = '0.0.0.0';
// App
var app = express_1.default();
// app.use(volleyball);
app.use(express_1.default.json());
app.use(cors_1.default({
    origin: '*'
}));
var limiter = express_rate_limit_1.default({
    windowMs: 15 * 60 * 1000,
    max: 1000 // limit each IP to 100 requests per windowMs
});
var speedLimiter = express_slow_down_1.default({
    windowMs: 15 * 60 * 1000,
    delayAfter: 1000,
    delayMs: 50000 // begin adding 500ms of delay per request above 100:
    // request # 101 is delayed by  500ms
    // request # 102 is delayed by 1000ms
    // request # 103 is delayed by 1500ms
    // etc.
});
// app.use(limiter, speedLimiter, middleware.checkTokenSetUser);
app.get('/', function (req, res) {
    res.send('Hello World');
});
// app.use('/auth',auth);
// app.use('/api/v1/notes', middleware.isLoggedIn, notes);
app.listen(PORT, HOST);
console.log("Running on http://" + HOST + ":" + PORT);
//# sourceMappingURL=app.js.map