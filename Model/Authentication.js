let mongoose = require("mongoose");

let authSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true,
        minlength: [3, 'Name must be at least 3 characters long'],
        maxlength: [50, 'Name cannot exceed 50 characters'],
        match: [/^(?!.*\.\w{2,}$)[a-zA-Z\s]+$/, 'Name cannot contain domain extensions like .com, .in, etc.']
    },
    contact: {
        type: String,
        required: [true, "Contact is required"],
        match: [/^\d{10}$/, 'Contact must be exactly 10 digits']
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        lowercase: true,
        unique: true, 
        match: [/^\S+@\S+\.\S{2,}$/, 'Enter a valid email address']
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        trim: true,
        minlength: [6, "Password must be at least 6 characters long"]
    }
});

let Authentication = mongoose.model("authentication", authSchema);

module.exports = Authentication;
