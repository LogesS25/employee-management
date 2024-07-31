// routes/employeeRoutes.js
const express = require('express');
const { createEmployee, updateEmployee, getEmployees } = require('../controllers/employeeController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/employees', authMiddleware, createEmployee);
router.put('/employees/:id', authMiddleware, updateEmployee);
router.get('/employees', authMiddleware, getEmployees);

module.exports = router;
