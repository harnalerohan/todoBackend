const jwt = require('jsonwebtoken');

function checkValidToken(req, res, next) {
    if(true) {
        next();
    }
}

module.exports = {checkValidToken};