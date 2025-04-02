let mongoose = require("mongoose");

let signupSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true,'Name is required']
    },
    contact : {
        type : String,
        required:[true,"Contact is required"]
    },
    email : {
        type : String,
        required:[true,"Email is required"],
        lowercase : true,
        match:[/^\S+@\S+\.\S{2,}$/]
    },
    password:{
        type:String,
        required:[true,"Password is required"],
        trim : true
       }
});

let SIGNUP = mongoose.model("signup", signupSchema);

module.exports = SIGNUP;
