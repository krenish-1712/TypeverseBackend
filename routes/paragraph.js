var express = require('express');
var router = express.Router();

let controller = require('../controller/paragraph')

router.post('/create',controller.newParagraph)
router.get('/read',controller.readParagraph)
router.delete('/delete/:id',controller.deleteParagraph)
router.patch('/update/:id',controller.updateParagraph)



module.exports = router;