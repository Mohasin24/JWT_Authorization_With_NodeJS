const {login,  dashboard} = require('../controller/Controller')
const express = require('express');

const authenticationMiddleware = require('../middleware/auth')

const router = express.Router();

router.route('/login').post(login)
router.route('/dashboard').get(authenticationMiddleware,dashboard)

module.exports=router