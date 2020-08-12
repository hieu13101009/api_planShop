import {Response, Request} from "express";

const express = require('express');
const Joi = require('joi');
const mongoose = require('mongoose');
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
const router = express.Router();

router.get('/',async (req: Request, res: Response) => {
    console.log('notesnotesnotes')
        const token = req.get('authorization')
        console.log('tokenzzzz',token)
        jwt.verify(
            token,
            'qweascxzcasdwqeasxghjrtyfb', 
            (error, user) => {
                console.log('user',user)
                takeUserInfo = user;
        })
        const userId = takeUserInfo._id
        console.log('userId',userId)
        const Notes = mongoose.model('Notes', noteSchema);
        const list = await Notes.find({
            user_id: userId,
        })
        console.log('list', list)
        res.send(list)
});

router.post('/', (req, res) => {
    const result = Joi.validate(req.body, schema);
    if (result.error == null) {
        const token = req.get('authorization')
        console.log('tokenzzzz',token)
        jwt.verify(
            token,
            'qweascxzcasdwqeasxghjrtyfb', 
            (error, user) => {
                takeUserInfo = user;
        })
        const userId = takeUserInfo._id
        console.log('userId',userId)
        const Notes = mongoose.model('Notes', noteSchema);
        Notes.create({
            user_id: userId,
            title: req.body.title,
            notes: req.body.note,
        })
    } else {
        const error = new Error(result.error);
        res.status(422);
        next(error);
    }
});

module.exports = router;