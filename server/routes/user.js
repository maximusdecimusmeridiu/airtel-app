const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const User = require('../models/User');

// Get user details
router.get('/details', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Recharge
router.post('/recharge', auth, async (req, res) => {
  const { amount } = req.body;

  try {
    const user = await User.findById(req.user.id);
    user.balance += Number(amount);
    await user.save();
    res.json({ message: 'Recharge successful', balance: user.balance });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;