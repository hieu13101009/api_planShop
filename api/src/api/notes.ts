import mongoose from 'mongoose';
import express, { Response, Request, NextFunction } from "express";
const Joi = require('joi');
const db = require('../db/connection');
const jwt = require('jsonwebtoken');


const Schema = mongoose.Schema;

const noteSchema = new Schema({
    title: String,
    notes: String,
    user_id: String,
});

const schema = Joi.object().keys({
    title: Joi.string().trim().max(100).required(),
    note: Joi.string().trim().max(100).required(),
});

export const router = express.Router();

router.get('/', (req: Request, res: Response) => {
    console.log('notesnotesnotes')
        const token = req.get('authorization')
        console.log('tokenzzzz',token)
        jwt.verify(
            token,
            'qweascxzcasdwqeasxghjrtyfb', 
            async (error: any, user: any) => {
                console.log('user',user)
                const takeUserInfo = user;
                const userId = takeUserInfo._id
                console.log('userId',userId)
                const Notes = mongoose.model('Notes', noteSchema);
                const list = await Notes.find({
                    user_id: userId,
                })
                console.log('list', list)
                res.send(list)
        })

});

router.post('/', (req: Request, res: Response) => {
    const result = Joi.validate(req.body, schema);
    if (result.error == null) {
        const token = req.get('authorization')
        console.log('tokenzzzz',token)
        jwt.verify(
            token,
            'qweascxzcasdwqeasxghjrtyfb', 
            (user: any) => {
                const takeUserInfo = user;
                const userId = takeUserInfo._id
                console.log('userId',userId)
                const Notes = mongoose.model('Notes', noteSchema);
                Notes.create({
                    user_id: userId,
                    title: req.body.title,
                    notes: req.body.note,
                })
        })
    } else {
        const error = new Error(result.error);
        res.status(422);
        res.send(JSON.stringify(error))
    }
});
