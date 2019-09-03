const Account = require('./../models/account');
const errorCodes = require('./../errorcode/errorcodes');

const accountDAO = {};

const getByUserNameAndAuthId = function(username, authId, result) {
    var account = {
        where : {username: username,
        auth_id : authId}
    };
    Account.findAll(account).then( account =>
    {
        if(account && account.length > 0) {
            result(null, account);
        }else {
            result(errorCodes.account_not_found,null);
        }
    }).catch( err =>
         {result(err, null);});
}

accountDAO.gegetByUserNameAndAuthIdtById = getByUserNameAndAuthId;
module.exports = accountDAO;