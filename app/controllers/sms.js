var PhoneNumbers = require('./../daos/phone_number');
const errorCodes = require('./../errorcode/errorcodes');
const Cache = require('./../cache/redis');
const Constants = require('./../utils/constants');
const util = require('util');

const mandatoryInputValidation = function(req) {
    if(!req.body.from) {
        return "from";
    }
    if(!req.body.to){
        return "to";
    }
    if(!req.body.text){
        return "text";
    }
}

const lengthValidation = function(input, min, max) {
    if(input.length < min || input.length > max) {
        return false;
    }
    return true;
}

const inputValidation = function(req) {
    if(!lengthValidation(req.body.from, 6, 16)) {
        return "from";
    }
    if(!lengthValidation(req.body.to, 6, 16)){
        return "to";
    }
    if(!lengthValidation(req.body.text, 1, 120)){
        return "text";
    }
}

exports.inboundSMS = function(req, res, next) {
    var status = mandatoryInputValidation(req);
    if(status) {
        res.json({
            message : "",
            error : status + " is missing."
        });
        return;
    }
    status = inputValidation(req);
    if(status) {
        res.json({
            message : "",
            error : status + " is invalid."
        });
        return;
    }
    PhoneNumbers.getPhoneNumber(req.body.to, req.user.id, function(err, result){
        if(err) {
            var errMsg = "unknown failure.";
            if(err.errorCode === errorCodes.phone_not_found.errorCode) {
                errMsg = "to parameter not found";
            }
            res.json(
                { error : errMsg,
                "message" : "" }
            );
        } else {
            if(req.body.text === 'STOP' || req.body.text === 'STOP\n' || 
                    req.body.text === 'STOP\r\n' || req.body.text === 'STOP\r') {
                var cache_key = req.body.to+"_"+req.body.from;
                Cache.cacheClient.set(cache_key, "STOP", function(err, reply) {
                        if(err){
                            res.json({
                                error : "unknown failure.",
                                message : ""
                            });
                        }else{
                            Cache.cacheClient.expire(cache_key, Constants.EXPIRE_IN_SECS);
                            res.json({
                                error : "",
                                message : "inbound sms ok"
                            });
                        }
                });
            }
        }
    });
}

exports.outboundSMS = function(req, res, next) {
    var status = mandatoryInputValidation(req);
    if(status) {
        res.json({
            message : "",
            error : status + " is missing."
        });
        return;
    }
    status = inputValidation(req);
    if(status) {
        res.json({
            message : "",
            error : status + " is invalid."
        });
        return;
    }
    PhoneNumbers.getPhoneNumber(req.body.from, req.user.id, function(err, result){
        if(err) {
            var errMsg = "unknown failure.";
            if(err.errorCode === errorCodes.phone_not_found.errorCode) {
                errMsg = "from parameter not found";
            }
            res.json(
                { error : errMsg,
                "message" : "" }
            );
        } else {
            var cache_key = req.body.from+"_"+req.body.to;
            Cache.cacheClient.get(cache_key, function(err, reply) {
                if(reply === 'STOP') {
                    res.json({
                        error : "sms from "+req.body.from+" to "+req.body.to+" blocked by STOP request.",
                        message : ""
                    });
                } else {
                    Cache.cacheClient.get(req.body.from, function(err, reply) {
                        if(!reply) {
                            Cache.cacheClient.set(req.body.from, 1, function(err, reply) {
                                Cache.cacheClient.expire(req.body.from, Constants.SMS_LIMIT_TIME);
                                res.json({
                                    error : "",
                                    message : "outbound sms ok"
                                })
                            });
                        }else{
                            if(reply >= Constants.SMS_LIMIT_COUNT) {
                                res.json({
                                    error : "limit reached for from "+req.body.from,
                                    message : ""
                                });
                            }else {
                                Cache.cacheClient.incr(req.body.from);
                                res.json({
                                    error : "",
                                    message : "outbound sms ok"
                                });
                            }
                        }
                    });
                }
            });
        }
    });
}