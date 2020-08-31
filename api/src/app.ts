import express, { Express, Response, Request } from "express";
import rateLimit from 'express-rate-limit';
import slowDown from 'express-slow-down';
import morgan from 'morgan';
import cors from 'cors';

import {checkTokenSetUser, isLoggedIn} from './auth/middleware';
import {routerAuth} from './auth/index';
import {router} from './api/notes';

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App

const app: Express = express();
app.use(morgan('tiny'));
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

app.use(
    limiter, 
    speedLimiter, 
    checkTokenSetUser);

app.get('/api/list', (req: Request, res: Response) => {
    console.log('call')
    const data = {
        mess: [
            {
                id: 0,
                user: 'Hello World',
                message: 'From backend',
                timestamp: Date()
            },
            {
                id: 1,
                user: 'Hello World 2',
                message: 'From backend 2',
                timestamp: Date()
            },
        ],
        ping: '404'
    }
    res.send(JSON.stringify(data));
});

app.use('/auth', routerAuth);
app.use('/api/v1/notes', isLoggedIn, router);

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);