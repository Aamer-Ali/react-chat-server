const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Server is up and running");
});

router.get("/data", (req, res) => {
  res.send("The data is comming for you");
});

module.exports = router;
