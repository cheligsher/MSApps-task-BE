const express = require("express");
const axios = require("axios");
const router = express.Router();

const ITEMS_PER_PAGE = 9;

// Route for fetching paginated data from Pixabay API
router.get("/photos", async (req, res) => {
  try {
    const category = req.query.category;
    const page = parseInt(req.query.page) || 1;
    const startIndex = (page - 1) * ITEMS_PER_PAGE;
    const apiUrl = `https://pixabay.com/api/?key=25540812-faf2b76d586c1787d2dd02736&q=${category}`;

    const response = await axios.get(apiUrl);
    const data = response.data;

    res.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
