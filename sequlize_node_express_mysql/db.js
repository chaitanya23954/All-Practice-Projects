

const { Sequelize } = require('sequelize');

// Initialize Sequelize
const sequelize = new Sequelize('employee_db', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
