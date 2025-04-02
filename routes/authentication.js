var express = require('express');
var router = express.Router();

let controller = require('../controller/authentication')

router.post('/signup',controller.signup)
router.post('/login',controller.login)


module.exports = router;