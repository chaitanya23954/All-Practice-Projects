const express = require("express");
const router = express.Router();


const employee_controller = require("../controllers/emp.controller");

// CREATE
router.post('/employees', employee_controller.createemp);
  
  // READ ALL
  router.get('/employees', employee_controller.showallemp);
  
  // READ ONE
  router.get('/employees/:id', employee_controller.showoneemp);
  
  // UPDATE
  router.put('/employees/:id', employee_controller.updateemp);
  
  // DELETE
  router.delete('/employees/:id', employee_controller.deleteemp);


  module.exports = router;

