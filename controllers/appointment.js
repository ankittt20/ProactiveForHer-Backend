const Appointment = require("../models/Appointment");

// Create a New Appointment
const createAppointment = async (req, res) => {
  const { name, email, phone, consultation, day, time } = req.body;
  try {
    const appointment = await Appointment.create({
      name,
      email,
      phone,
      consultation,
      day,
      time,
    });
    res.status(200).json({ appointment });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


module.exports = {
    createAppointment,
};