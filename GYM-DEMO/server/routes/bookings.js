const express = require('express');
const router = express.Router();

// Demo booking route
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, service, date, time } = req.body;
    
    // In a real app, you would save this to a database
    res.status(201).json({ 
      success: true, 
      message: 'Booking request submitted successfully! We will confirm your booking soon.' 
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: 'Error submitting booking', 
      error: error.message 
    });
  }
});

module.exports = router;

