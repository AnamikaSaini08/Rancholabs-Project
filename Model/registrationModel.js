const mongoose = require('mongoose');
const registrationSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        maxLength: [15, "Can't exceed >15 characters"],
        unique: true
    },
    password:{
        type: String,
        required: true,
        trim: true
    },
    confirmPassword:{
        type: String,
        required: true,
        trim: true,
    },
    gameLevel:{
        type:Number,
        default: 1
    }
});
const User = mongoose.model('User', registrationSchema);
module.exports = User;