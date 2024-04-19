const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/sortedPhotos", async (req, res) => {
  try {
    const { category, sort } = req.query;

    const requestUrl = `https://pixabay.com/api/?key=25540812-faf2b76d586c1787d2dd02736&q=${category}`;

    const response = await axios.get(requestUrl);
    let data = response.data.hits;

    if (sort === "id") {
      data.sort((a, b) => a.id - b.id);
    } else if (sort === "date") {
      data.sort((a, b) => new Date(b.date) - new Date(a.date));
    }

    res.json(data);
  } catch (error) {
    console.error("Error fetching images:", error);
    res.status(500).json({ error: "Error fetching images" });
  }
});

module.exports = router;
