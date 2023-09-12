const mongoose = require('mongoose');
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true,
    },
    age: {
        type: Number,
        trim: true,
    },
    phone_number: {
        type: String, 
        trim: true
    }
}, { timestamps: true });

const userModel = mongoose.model("User", userSchema)

module.exports = userModel