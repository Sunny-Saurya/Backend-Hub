const mongoose = require("mongoose");

const pendingUserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    verificationOTP: {
      type: String,
      required: true,
    },

    verificationOTPExpiry: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const pendingUserModel = mongoose.model(
  "PendingUser",
  pendingUserSchema
);

module.exports = pendingUserModel;