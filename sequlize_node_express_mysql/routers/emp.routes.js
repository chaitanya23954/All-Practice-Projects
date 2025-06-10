

const express = require('express');
const router = express.Router();
const emp_controller = require('../controllers/emp.controller');

router.post('/', emp_controller.createemp);
router.get('/', emp_controller.showallemp);
router.get('/', emp_controller.showempbyid);
router.put('/', emp_controller.updatedetails);
router.delete('/', emp_controller.deletedetails);
  
module.exports = router;