const sequelize = require("../db");
const Emp = require("./emp.model")(sequelize);

module.exports = {
  Emp,
};
