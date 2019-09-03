var SMS = require('./../controllers/sms');
var LOGIN = require('./../controllers/login');
const Properties = require('./../../config/properties');
const jwt = require('jsonwebtoken');

var validator = function(req, res, next) {
    try {
        var decode = jwt.verify(req.headers['authorization'], Properties.SECRET);
        req.user = decode;
        console.log(req.user);
        next();
    }catch(e) {
        console.log(e);
        res.status(403).json({error:'login is required'});
    }
}

module.exports = function(router) {
    router.post('/login', LOGIN.login);
    router.post('/outbound/sms', validator, SMS.outboundSMS);
    router.post('/inbound/sms', validator, SMS.inboundSMS);
}