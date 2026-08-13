const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
const User = require('../models/user.model');

const registerRoute = async (req, res) => {
    const { username, email, password } = req.body;

    if(!username || !email || !password) {
        return res.status(400).json({ message: 'Please provide all required fields' });
    }

    const existingUser = await User.findOne({ email });

    if(existingUser) {
        return res.status(400).json({ message: 'User already exists' });
    }

    const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
        username,
        email,
        password: hashedPassword,
        token,
    });

    res.status(201).json({ message: 'User created successfully', token: newUser.token });
}

const loginRoute = async (req, res) => {
    const { email, password } = req.body;
    if(!email || !password) {
        return res.status(400).json({ message: 'Please provide all required fields' });
    }

    const user = await User.findOne({ email });
    if(!user) {
        return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if(!isPasswordValid) {
        return res.status(400).json({ message: 'Invalid credentials' });
    }
    
    res.status(200).json({ message: 'Login successful', token: user.token });
}

const logoutRoute = (req, res) => {
    res.clearCookie('token');
    res.status(200).json({ message: 'Logout successful' });
}