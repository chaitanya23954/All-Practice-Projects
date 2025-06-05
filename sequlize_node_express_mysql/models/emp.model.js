
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Employee = sequelize.define('Employee', {
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
    tableName: 'employees',  // Explicitly set the table name
    timestamps: false        // Disable createdAt and updatedAt fields
  });

  return Employee;
};
