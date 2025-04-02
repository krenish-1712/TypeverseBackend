var express = require('express');
var router = express.Router();

let controller = require('../controller/ranking')

router.get('/fetchdata',controller.Fetchdata)


module.exports = router;