const express = require('express');
const { registerNewUser, loginUser } = require('../controller/userController');
const router = express.Router(); 

//register
router.route('/register').post(registerNewUser);
//login
router.route('/login').post(loginUser);
module.exports = router;