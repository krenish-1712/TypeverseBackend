let mongoose = require('mongoose');

let rankingSchema = new mongoose.Schema({
    // name : String,
    wpm : {
        type : mongoose.Schema.Types.Number,
        ref : 'Result'
    }
}) 

let RANKING = mongoose.model('Ranking', rankingSchema)

module.exports = RANKING