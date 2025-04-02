let mongoose = require("mongoose");

let paragraphSchema = new mongoose.Schema({
  text :{
    type : String
  } 
});

let PARAGRAPH = mongoose.model("paragraph", paragraphSchema);

module.exports = PARAGRAPH;
