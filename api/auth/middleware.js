const jwt = require('jsonwebtoken');

function checkTokenSetUser (req,res,next) {
    const authHeader = req.get('content-type');
    if (authHeader) {
    const token = req.get('token')
        if(token) {
            jwt.verify(token, 'qweascxzcasdwqeasxghjrtyfb', (error, user) => {
                if(error) {
                    console.log('-------',error)
                }
                req.user = user;
                console.log('-------',req.user)
                next();
            })
        } else {
            next();
        }
    } else{
        next();
    }
}


function isLoggedIn (req,res,next) {
    console.log('req.user--------',req.user)
    if (req.user) {
        next();
    }else {
        const error = new Error('unauthorized pip pip pip------');
        res.status(401);
        next(error);
    }
}

module.exports = {
    checkTokenSetUser,
    isLoggedIn
}