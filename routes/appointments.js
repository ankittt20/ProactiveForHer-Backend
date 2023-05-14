const express = require("express");
const { createAppointment } = require("../controllers/appointment");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("GET Request");
});

router.post("/", createAppointment);

module.exports = router;
