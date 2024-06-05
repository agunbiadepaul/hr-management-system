// backend/routes/hrRoutes.js
const express = require('express');
const auth = require('../middleware/auth');
const Employee = require('../models/Employee');

const router = express.Router();

// Get all employees
router.get('/employees', auth, async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Other HR routes...

module.exports = router;
