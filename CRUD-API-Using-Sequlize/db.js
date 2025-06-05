

const { Sequelize } = require('sequelize');


// Setup Sequelize connection
const sequelize = new Sequelize('employee_db', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
  });


module.exports = sequelize;
