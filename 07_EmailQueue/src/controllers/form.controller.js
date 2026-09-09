const formSchema = require("../models/form.model");
const emailQueue = require("../queues/email.queue");
const formData = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const form = new formSchema({
      name,
      email,
      subject,
      message,
    });

    await form.save();

    await emailQueue.add("send-contact-email", {
      name,
      email,
      subject,
      message,
    });
    res.status(201).json({
      success: true,
      data: form,
      message: "Form data saved successfully",
    });
  } catch (error) {
    res.status(500).json({ message: "Error saving form data", error });
  }
};

module.exports = { formData };
