const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const registerSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,

    },

    email : {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },

    mobile : {
        type: Number,
        required: true,
        unique: true
    },

    year : {
        type: String,
        required: true,
    },

    branch : {
        type: String,
        required: true,
    },

    password : {
        type: String,
        required: true,
    },

    confirmPassword : {
        type: String,
        required: true,
    }
},{timestamps: true});

registerSchema.methods.getJWT = async function () {
    const user = this;
    
    // Create a JWT Token
    const token = await jwt.sign({ _id: user._id }, "Yash123#", {expiresIn: "1d"})
    return token
}

registerSchema.methods.validatePassword = async function (passwordInputByUser) {
    const user = this;
    const passwordHash = user.password;

    const isPasswordValid = await bcrypt.compare(passwordInputByUser, passwordHash);

    return isPasswordValid;
}
const Register = mongoose.model('Register', registerSchema);
module.exports = Register;