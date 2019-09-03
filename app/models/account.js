const Sequelize = require('sequelize');
const dbUtils = require('./../utils/dbUtils');

module.exports = dbUtils.sequelize.define(
'account',
 {
    id: {type: Sequelize.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true},
    auth_id: {type: Sequelize.STRING, allowNull: false},
    username: {type: Sequelize.STRING, allowNull: false}
},
{
    timestamps: false,
    freezeTableName: true
}
);