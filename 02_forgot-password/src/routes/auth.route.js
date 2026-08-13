const express = require('express');
const router = express.Router();

const { registerRoute, loginRoute, logoutRoute } = require('../controllers/auth.route');

router.post('/register', registerRoute);
router.post('/login', loginRoute);
router.post('/logout', logoutRoute);

module.exports = router;