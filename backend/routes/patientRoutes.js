// For example in server.js or patientRoutes.js
const express = require("express");
const Patient = require("../models/Patient");
const router = express.Router(); 
// ✅ Dummy GET route to test
router.get('/', (req, res) => {
  res.json({ message: "Patient GET route working ✅" });
});


// @route   POST /api/patients
router.post("/", async (req, res) => {
  try {
    const patient = new Patient(req.body);
    await patient.save();
    res.status(201).json({ message: "Patient added successfully" });
  } catch (error) {
    console.error("Error saving patient:", error);
    res.status(500).json({ message: "Error saving patient", error });
  }
});
router.get('/', async (req, res) => {
  const patients = await Patient.find();
  res.json(patients);
});

module.exports = router;