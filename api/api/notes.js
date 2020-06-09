const express = require('express');
const Joi = require('joi');
const mongoose = require('mongoose');
const db = require('../db/connection');
const jwt = require('jsonwebtoken');


const Schema = mongoose.Schema;

const noteSchema = new Schema({
    title: String,
    notes: String,
});

const schema = Joi.object().keys({
    title: Joi.string().trim().max(100).required(),
    note: Joi.string().trim().max(8).required(),
});
const router = express.Router();

router.get('/', (req, res) => {
    console.log('notesnotesnotes')
    res.json([])
});

router.post('/', (req, res) => {
    const result = Joi.validate(req.body, schema);
    if (result.error == null) {
        const token = req.get('authorization')
        console.log('tokenzzzz',token)
        jwt.verify(token, 'qweascxzcasdwqeasxghjrtyfb', (error, user) => {
            req.user = user;
        })
        userId = req.user._id
        const Notes = mongoose.model('Notes', noteSchema);
        Notes.create({
            title: req.body.title,
            note: req.body.note,
        })
    } else {
        const error = new Error(result.error);
        res.status(422);
        next(error);
    }
});

module.exports = router;