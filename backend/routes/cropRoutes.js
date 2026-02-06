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

// DELETE crop by ID
router.delete("/:id", async (req, res) => {
  try {
    await Crop.findByIdAndDelete(req.params.id);
    res.json({ message: "Record deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Delete failed" });
  }
});




module.exports = router;
