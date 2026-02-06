const express = require("express");
const Crop = require("../models/Crop");
const router = express.Router();

// Add crop
router.post("/", async (req, res) => {
  const crop = new Crop(req.body);
  await crop.save();
  res.json({ message: "Crop added" });
});

// Get crops by user
router.get("/:userId", async (req, res) => {
  const crops = await Crop.find({ userId: req.params.userId });
  res.json(crops);
});

module.exports = router;
