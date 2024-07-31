// controllers/employeeController.js
const Employee = require('../models/employeeModel');

exports.createEmployee = async (req, res) => {
  try {
    const { name, address, age, department, status, location } = req.body;
    const newEmployee = new Employee({
      name,
      address,
      age,
      department,
      status,
      location,
    });
    const employee = await newEmployee.save();
    res.status(201).json(employee);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.updateEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    const employee = await Employee.findById(id);

    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }

    employee.auditTrail.push({
      previousData: employee.toObject(),
      newData: updatedData,
    });

    Object.assign(employee, updatedData);
    await employee.save();

    res.status(200).json(employee);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
