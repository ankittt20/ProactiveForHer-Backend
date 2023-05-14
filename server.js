require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const appointmentRouter = require("./routes/appointments");
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());

app.use((res, req, next) => {
  console.log(req.path, req.method);
  next();
});

// Routes
app.use("/api/appointment", appointmentRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log("Server listening on port", port);
    });
  })
  .catch((err) => console.log(err));
