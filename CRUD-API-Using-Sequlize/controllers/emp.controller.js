

const { Emp } = require("../models");

exports.createemp = async (req, res) => {
    try {
      const employeeData = await Emp.create(req.body);
      res.status(201).json(employeeData);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };


exports.showallemp = async (req, res) => {
    try {
        const employeeData = await Emp.findAll();
        res.status(200).json(employeeData);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
  };



exports.showoneemp = async (req, res) => {
    try {
      const employeeData = await Emp.findByPk(req.params.id);
      if (employeeData) {
        res.json(employeeData);
      } else {
        res.status(404).json({ error: 'Employee not found' });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  


exports.updateemp = async (req, res) => {
    const [updated] = await Emp.update(req.body, {
        where: { id: req.params.id },
      });
      if (updated === 0) {
        return res.status(404).json({ message: 'Employee not found or no changes made' });
      }
      res.json({ message: 'Employee updated successfully' });
      
  };



module.exports.deleteemp = async (req, res) => {
    try {
      const deleted = await Emp.destroy({ where: { id: req.params.id } });
      if (deleted === 0) {
        return res.status(404).json({ message: 'Employee not found' });
      }
      res.json({ message: 'Deleted successfully' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
