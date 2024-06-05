// backend/routes/employeeRoutes.js
const express = require('express');
const auth = require('../middleware/auth');
const Employee = require('../models/Employee');

const router = express.Router();

// Get employee data
router.get('/me', auth, async (req, res) => {
  try {
    const employee = await Employee.findById(req.user.id).select('-password');
    res.json(employee);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Other employee routes...

module.exports = router;
