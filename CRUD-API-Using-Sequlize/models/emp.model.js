
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Employee = sequelize.define('Employees', {
    id: {
      type: DataTypes.INTEGER,
      unique: true,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    employee_code: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    salary: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    tableName: "employees",
    timestamps: false
  }
);

  return Employee;
};
