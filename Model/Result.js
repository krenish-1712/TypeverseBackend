let mongoose = require('mongoose')

let resultSchema = new mongoose.Schema({
    wpm : Number,
    cpm : Number,
    mistakes : Number,
    time : Number
})

let RESULT = mongoose.model('Result',resultSchema);

module.exports = RESULT