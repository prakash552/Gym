const express = require('express');
const router = express.Router();
const Membership = require('../models/Membership');

// Submit membership inquiry
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, plan, paymentMethod } = req.body;
    
    const membership = new Membership({
      name,
      email,
      phone,
      plan,
      paymentMethod: paymentMethod || 'EMI'
    });
    
    await membership.save();
    
    res.status(201).json({ 
      success: true, 
      message: 'Membership inquiry submitted successfully! We will contact you soon.' 
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: 'Error submitting membership inquiry', 
      error: error.message 
    });
  }
});

// Get all memberships (admin)
router.get('/', async (req, res) => {
  try {
    const memberships = await Membership.find().sort({ createdAt: -1 });
    res.json({ success: true, memberships });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: 'Error fetching memberships', 
      error: error.message 
    });
  }
});

module.exports = router;

