import express, { Express, Response, Request } from "express";
import rateLimit from 'express-rate-limit';
import slowDown from 'express-slow-down';
// import middleware from './auth/middleware';
// import volleyball from 'volleyball';
// import auth from './auth/index.js';
// import notes from './api/notes.js';
import cors from 'cors';

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App

const app: Express = express();
// app.use(volleyball);
app.use(express.json());
app.use(cors({
    origin: '*'
}))

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 1000 // limit each IP to 100 requests per windowMs
});

const speedLimiter = slowDown({
    windowMs: 15 * 60 * 1000, // 15 minutes
    delayAfter: 1000, // allow 100 requests per 15 minutes, then...
    delayMs: 50000 // begin adding 500ms of delay per request above 100:
    // request # 101 is delayed by  500ms
    // request # 102 is delayed by 1000ms
    // request # 103 is delayed by 1500ms
    // etc.
});

// app.use(limiter, speedLimiter, middleware.checkTokenSetUser);

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World');
});

// app.use('/auth',auth);
// app.use('/api/v1/notes', middleware.isLoggedIn, notes);

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);