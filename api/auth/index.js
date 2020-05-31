const express = require('express')
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const router = express.Router()

const Joi = require('joi');
const db = require('../db/connection')

const Schema = mongoose.Schema;

var userSchema = new Schema({
    username: String,
    password: {type: String, required: true},
});

const schema = Joi.object().keys({
    username: Joi.string().trim().alphanum().min(3).max(30).required(),
    password: Joi.string().trim().min(6).max(8).required(),
});

router.get('/', function (req, res) {
    res.send('Birds home page')
})

router.post('/sigup', async (req, res) =>{
    const result = Joi.validate(req.body, schema);
    var User = mongoose.model('User', userSchema);
    if (result.error) {
        res.send(result.error.details)
    } else {
        const user = await User.findOne({ username: req.body.username });

        if (user) {
            const mess = 'User is have';
            res.send(JSON.stringify(mess))
        } else {
            const Password = await bcrypt.hash(req.body.password.trim(), 8);
            User.create({
                username: req.body.username,
                password: Password,
            })
            const mess = 'New user is ss';
            res.send(JSON.stringify(mess))
        }
    }
})

module.exports = router