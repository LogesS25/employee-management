// models/employeeModel.js
const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: String,
  address: String,
  age: Number,
  department: String,
  status: { type: String, enum: ['Remote Location', 'Contract Employee', 'Full-Time'] },
  location: {
    latitude: Number,
    longitude: Number,
  },
  auditTrail: [
    {
      previousData: Object,
      newData: Object,
      timestamp: { type: Date, default: Date.now },
    },
  ],
});

module.exports = mongoose.model('Employee', employeeSchema);
