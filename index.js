const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 8000;
const paginationRoutes = require("./src/routes/paginationRoutes");
const sortingRoutes = require("./src/routes/sortingRoutes");

app.use(express.json());
app.use(cors());

app.use("/api", paginationRoutes);
app.use("/api/sorting", sortingRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
