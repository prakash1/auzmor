const Sequelize = require('sequelize');
const dbUtils = require('./../utils/dbUtils');
const account = require('./../models/account');

module.exports = dbUtils.sequelize.define(
    'phone_number', 
    {
    id: {type: Sequelize.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true},
    number: {type: Sequelize.STRING, allowNull: false},
    account_id: {type: Sequelize.INTEGER, allowNull: false, references:{
        model: account,
        key: 'id'
    }}
},
{
    timestamps: false,
    freezeTableName: true
}
);