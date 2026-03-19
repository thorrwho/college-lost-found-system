const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const verifyToken = require('../middleware/authMiddleware');
const { addFoundItem } = require('../controllers/foundItemController');
const FoundItem = require('../models/FoundItem');

// GET all found items
router.get('/', verifyToken, async (req, res) => {
  try {
    const items = await FoundItem.find().sort({ createdAt: -1 });
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// GET my found items
router.get('/my', verifyToken, async (req, res) => {
  try {
    const items = await FoundItem.find({ user: req.user.id });
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// POST /api/found — add found item
router.post('/', verifyToken, upload.single('image'), addFoundItem);

module.exports = router;