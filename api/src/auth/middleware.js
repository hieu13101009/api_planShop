const jwt = require('jsonwebtoken');

function checkTokenSetUser (req, res, next) {
    const authHeader = req.get('content-type');
    if (authHeader) {
    const token = req.get('token')
        if(token) {
            jwt.verify(token, 'qweascxzcasdwqeasxghjrtyfb', (error, user) => {
                if(error) {
                    console.log('-------a',error)
                }
                req.user = user;
                next();
            })
        } else {
            next();
        }
    } else{
        next();
    }
}


function isLoggedIn (req, res, next) {
    console.log('req.user',req.user)
    if (req.body) {
        next();
    } else {
        const error = new Error('unauthorized pip pip pip------');
        res.status(401);
        next(error);
    }
}

module.exports = {
    checkTokenSetUser,
    isLoggedIn
}