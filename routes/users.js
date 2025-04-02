var express = require('express');
var router = express.Router();

let controller = require('../controller/resultcon')

/* GET users listing. */
router.post('/create',controller.newResult)
router.get('/read',controller.readResult)
router.delete('/delete/:id',controller.deleteResult)

module.exports = router;
