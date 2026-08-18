const express = require("express");
const { z } = require("zod");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../../data/users");
const Product = require("../../data/product");
const app = express();

const userSchema = z.object({
  name: z.string().min(3, "Name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const userLoginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const register = async (req, res) => {
  const validationResult = userSchema.safeParse(req.body);

  if (!validationResult.success) {
    // validationResult.error contains detailed issues
    return res.status(400).json({
      message: "Validation failed",
    });
  }

  const { name, email, password } = validationResult.data;

  if (User.some((u) => u.email === email)) {
    return res.status(409).json({
      message: "Email Already Exist",
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = {
    name,
    email,
    password: hashedPassword,
  };

  User.push(newUser);
  console.log(User);

  return res.status(201).json({
    message: "User registered successfully",
    user: { name, email },
  });
};

const login = async (req, res) => {
  const validationResult = userLoginSchema.safeParse(req.body);

  if (!validationResult.success) {
    return res.status(400).json({
      message: "Validation failed",
    });
  }

  const { email, password } = validationResult.data;
  const user = User.find((u) => u.email === email);
  if (!user) {
    return res.status(400).json({
      message: "User doesn't exist!!",
    });
  }
  const passwordVarify = await bcrypt.compare(password, user.password);

  const token = jwt.sign(
    {
      user: {
        name: user.name,
        email: user.email,
      },
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1h",
    },
  );
  console.log("SIGN SECRET:", process.env.JWT_SECRET);
  if (user && passwordVarify) {
    return res.status(200).json({
      message: "User Login Successfully",
      greeting: "Welcome user :>",
      token,
    });
  }

};
module.exports = { register, login };
