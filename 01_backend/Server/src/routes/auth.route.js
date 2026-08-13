const express = require('express');
const { register, login, logout, getUser,getUserId } = require('../controllers/auth.controller');
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

// get the user

router.get("/getuser", getUser);
router.get("/userid/:id", getUserId);
module.exports = router;