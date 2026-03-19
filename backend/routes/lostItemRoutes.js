const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const verifyToken = require('../middleware/authMiddleware');
const { addLostItem } = require('../controllers/lostItemController');
const LostItem = require('../models/LostItem');

// GET all lost items
router.get('/', verifyToken, async (req, res) => {
  try {
    const items = await LostItem.find().sort({ createdAt: -1 });
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// GET my lost items
router.get('/my', verifyToken, async (req, res) => {
  try {
    const items = await LostItem.find({ user: req.user.id });
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// POST /api/lost — add lost item
router.post('/', verifyToken, upload.single('image'), addLostItem);

module.exports = router;