const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const userModel = require("../models/user.model");

async function register(req, res) {
    try {
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({
                message: "All fields are required",
            });
        }

        const existUser = await userModel.findOne({ email });

        if (existUser) {
            return res.status(400).json({
                message: "User Already Exists",
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await userModel.create({
            username,
            email,
            password: hashedPassword,
        });

        const token = jwt.sign(
            { id: newUser._id },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        return res.status(201).json({
            message: "User Created Successfully",
            newUser,
            token,
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
}
async function login(req, res) {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                message: "All fields are required",
            });
        }

        const user = await userModel.findOne({ email });

        if (!user) {
            return res.status(400).json({
                message: "User not found",
            });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(400).json({
                message: "Invalid Password",
            });
        }

        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        return res.status(200).json({
            message: "Login Successful",
            token,
            user,
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
}

async function logout(req, res){
    res.clearCookie("token");
    return res.status(200).json({
        message: "Logout Successful",
    });
}

async function getUser(req, res){
    try{
        const users = await userModel.find({});

        res.status(200).json({
            success: true,
            results: users.length,
            data: users
        });
    }
    catch(err){
        res.status(400).json({
            success: false,
            message: "Error fetching users !"
        });
    }
}

async function getUserId(req, res){
    const id = req.params.id;
    try{
        const user = await userModel.findById(id);
        if(!user){
            res.status(200).json({
            success: true,
            message: "User dosen't Exist !!"
        });
        }

        res.status(200).json({
            success: true,
            data: user
        });
    }
    catch(err){
        res.json(400).json({
            success: false,
            message:"Error fetching user !!"
        })
    }
}


module.exports = { register , login, logout, getUser, getUserId};