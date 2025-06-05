const { Employee } = require('../models');
const sequelize = require('../db');

// Create Employee
exports.createemp = async (req, res) => {
  try {
    const new_emp = await Employee.create(req.body);
    res.status(201).json({ message: 'Employee added successfully', data: new_emp });
  } catch (err) {
    console.error('Error adding employee:', err.message);
    res.status(500).json({ error: err.message });
  }
};

// Show All Employees
exports.showallemp = async (req, res) => {
  try {
    const [data] = await sequelize.query("SELECT * FROM employees");
    res.status(200).json({ message: "Employees data", data });
  } catch (err) {
    console.error('Error fetching data:', err.message);
    res.status(500).json({ error: err.message });
  }
};

// Show Employee by ID
exports.showempbyid = async (req, res) => {
  try {
    const { id } = req.params;
    const [emp] = await sequelize.query("SELECT * FROM employees WHERE id = ?", {
      replacements: [id],
    });

    if (emp.length === 0) {
      return res.status(404).json({ message: `Employee not found with id: ${id}` });
    }

    res.status(200).json({ message: `Employee details with id: ${id}`, data: emp[0] });
  } catch (err) {
    console.error('Error fetching data:', err.message);
    res.status(500).json({ error: err.message });
  }
};

// Update Employee
exports.updatedetails = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Employee.update(req.body, { where: { id } });

    if (updated === 0) {
      return res.status(404).json({ message: `No employee found with id: ${id}` });
    }

    res.json({ message: `Employee updated with id: ${id}` });
  } catch (err) {
    console.error('Error updating data:', err.message);
    res.status(500).json({ error: err.message });
  }
};

// Delete Employee
exports.deletedetails = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteCount = await Employee.destroy({ where: { id } });

    if (deleteCount === 0) {
      return res.status(404).json({ message: `No employee found with id: ${id}` });
    }

    res.json({ message: `Employee deleted with id: ${id}` });
  } catch (err) {
    console.error('Error deleting data:', err.message);
    res.status(500).json({ error: err.message });
  }
};
