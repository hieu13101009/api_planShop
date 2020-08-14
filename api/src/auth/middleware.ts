import express, { Response, Request, NextFunction } from "express";
const jwt = require('jsonwebtoken');

export function checkTokenSetUser (req: Request, res: Response, next: NextFunction) {
    const authHeader = req.get('content-type');
    if (authHeader) {
    const token = req.get('token')
        if(token) {
            jwt.verify(token, 'qweascxzcasdwqeasxghjrtyfb', (error: any, user: any) => {
                if(error) {
                    console.log('-------a',error)
                }
                console.log(user);
                next();
            })
        } else {
            next();
        }
    } else{
        next();
    }
}


export function isLoggedIn (req: Request, res: Response, next: NextFunction) {
    if (req.body) {
        next();
    } else {
        const error = new Error('unauthorized pip pip pip------');
        res.status(401);
        next(error);
    }
}