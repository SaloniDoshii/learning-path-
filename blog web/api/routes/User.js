const express = require('express');
const router = express.Router();
const User = require('../models/User');
const UserController = require('../controllers/User');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// login route for static admin
router.get('/login', UserController.user_get_all);

//logout route for static admin
router.get('/logout', UserController.user_logout_all);


module.exports = router;