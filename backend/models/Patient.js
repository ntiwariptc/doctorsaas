const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  phone: String,
  address: String,
  medicalHistory: String,
  diagnosis: String,
  medicines: [String],
}, { timestamps: true });

module.exports = mongoose.model('Patient', patientSchema);
