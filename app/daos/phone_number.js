const PhoneNumber = require('./../models/phone_number');
const Account = require('./../models/account');
const dbUtils = require('./../utils/dbUtils');
const errorCodes = require('./../errorcode/errorcodes');

const phoneNumberDAO = {};

const getPhoneNumber = function(phoneNumber, accountId, result) {
    dbUtils.sequelize.query("SELECT number FROM `phone_number` where number = :phoneNumber"+
    " and account_id = :accountId",
    { replacements: { phoneNumber: phoneNumber, accountId : accountId },
     type: dbUtils.sequelize.QueryTypes.SELECT})
  .then(phoneNumber => {
    console.log(phoneNumber);
    if(phoneNumber && phoneNumber.length > 0) {
        result(null, phoneNumber);
    }else {
        result(errorCodes.phone_not_found,null);
    }
  }).catch( err =>
    {result(err, null);});
   /* PhoneNumber.findAll(phoneNumber).then( phoneNumber =>
    {
        if(phoneNumber) {
            result(null, phoneNumber);
        }else {
            result(errorCodes.phone_not_found,null);
        }
    }).catch( err =>
         {result(err, null);});*/
}

phoneNumberDAO.getPhoneNumber = getPhoneNumber;
module.exports = phoneNumberDAO;