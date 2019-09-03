var Accounts = require('./../daos/account');
const errorCodes = require('./../errorcode/errorcodes');
const Constants = require('./../utils/constants');
const Properties = require('./../../config/properties');
const jwt = require('jsonwebtoken');

const mandatoryInputValidation = function(req) {
    return !req.body.username || !req.body.authId;
}

exports.login = function(req, res, next) {
    if(mandatoryInputValidation(req)) {
        res.json(
            { error : "username and authId are mandatory.",
            "message" : "" }
        );
        return;
    }
    Accounts.gegetByUserNameAndAuthIdtById(req.body.username, req.body.authId,
         function(err, result){
            if(err) {
                var errMsg = "unknown failure.";
                if(err.errorCode === errorCodes.account_not_found.errorCode) {
                    errMsg = "username/authId not found";
                }
                res.json(
                    { error : errMsg,
                    "message" : "" }
                );
            }else{
                var token = jwt.sign(result[0].dataValues, Properties.SECRET, { expiresIn: Properties.TOKEN_EXPIRE });
                res.json(
                    {token : token}
                );
            }
    });
}