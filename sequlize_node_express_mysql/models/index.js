

const sequelize = require('../db');
const Employee = require('./emp.model')(sequelize);

module.exports = {
  sequelize,
  Employee,
};
