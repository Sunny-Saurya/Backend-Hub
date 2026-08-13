const bcrypt = require("bcrypt");
const crypto = require("crypto");
const userModel = require("../models/user.model");
const pendingUserModel = require("../models/pendingUser.model");
const sendEmail = require("../config/sendEmail");

const registerUser = async (req, res) => {
  try {
    const {
      username,
      email,
      password,
      isVarified,
      verificationOTP,
      verificationOTPExpiry,
    } = req.body;

    if (!username || !email || !password) {
      return res
        .status(400)
        .json({ message: "Please provide all required fields" });
    }

    const existingUser = await userModel.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }
    // generate a random OTP of 6 digits
    const otp = crypto.randomInt(100000, 999999).toString();

    const message = `
  Hello ${username},

  Welcome to our application!

  Our verification code is:

  ${otp}

  This OTP is valid for 10 minutes.

  Do not share this code with anyone.
`;

    //     await sendEmail({
    //   from: process.env.SMTP_USER,
    //   to: email,
    //   subject: "Verify Your Email",
    //   text: message,
    // });

    //use css

    await sendEmail({
      from: process.env.SMTP_USER,
      to: email,
      subject: "Email Verification OTP",
      html: `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
      
      <h2 style="color: #2563eb; text-align: center;">
        Email Verification
      </h2>

      <p>Hello <strong>${username}</strong>,</p>

      <p>Welcome to our application! 🎉</p>

      <p>Your verification code is:</p>

      <div style="
        background: #f4f4f4;
        padding: 15px;
        text-align: center;
        border-radius: 8px;
        margin: 20px 0;
      ">
        <span style="
          font-size: 32px;
          font-weight: bold;
          letter-spacing: 8px;
          color: #2563eb;
        ">
          ${otp}
        </span>
      </div>

      <p>
        This OTP is valid for
        <strong>10 minutes</strong>.
      </p>

      <p style="color: red;">
        ⚠️ Do not share this code with anyone.
      </p>

      <hr>

      <p style="font-size: 12px; color: gray;">
        If you didn't request this verification, please ignore this email.
      </p>

    </div>
  `,
    });
    const hashedOTP = await bcrypt.hash(otp, 10);
    const hashedPassword = await bcrypt.hash(password, 10);

    const pendingUser = new pendingUserModel({
      username,
      email,
      password: hashedPassword,
      isVarified: false,
      verificationOTP: hashedOTP,
      verificationOTPExpiry: Date.now() + 10 * 60 * 1000, // 10 minutes from now
    });
    await pendingUser.save();

    return res.status(201).json({
      success: true,
      message: "OTP sent to your email. Please verify your email.",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Please provide all required fields" });
    }

    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { registerUser, loginUser };
