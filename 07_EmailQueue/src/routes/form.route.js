const express = require('express');

const router = express.Router();
const formController = require('../controllers/form.controller');

router.post("/submit", formController.formData);

module.exports = router;