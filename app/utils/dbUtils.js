const Sequelize = require('sequelize');
const dbProperties = require('./../../config/database');
const dbUtils = {};

const sequelize = new Sequelize(dbProperties.DATABASE, dbProperties.USERNAME, dbProperties.PASSWORD, {
    host: dbProperties.HOST,
    dialect: dbProperties.DIALECT,
    pool: {
        max: dbProperties.MAX_CONN,
        min: dbProperties.MIN_CONN,
        acquire: dbProperties.MAX_ACTIVE,
        idle: dbProperties.IDLE
      }
  });

  const  test = 
    sequelize
    .authenticate()
    .then(() => {
      console.log('Connection has been established successfully.');
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err);
    });

  dbUtils.test = test;
  dbUtils.sequelize = sequelize;
  dbUtils.Sequelize = Sequelize;

  module.exports = dbUtils;