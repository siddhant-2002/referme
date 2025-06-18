const express = require('express');
const authRouter = express.Router();
const { validateSignUpData } = require('../utils/validation');
const RegisterSchema = require('../models/register');
const bcrypt = require('bcrypt');

authRouter.post('/signup', async (req, res) => {
    try{
        // validation of data
        validateSignUpData(req);

        const {name, email, mobile, year, branch, password, confirmPassword} = new RegisterSchema(req.body);

        // Encrypt the password
        const passwordHash = await bcrypt.hash(password, 10);

        // Creating a new instance of the RegisterSchema
        const user = new RegisterSchema({
            name,
            email,
            mobile,
            year,
            branch,
            password: passwordHash,
            confirmPassword: passwordHash // Store the hashed password
        });

        await user.save();

        res.status(400).send("User Added Successfully");
    }
    catch(err)
    {
        res.status(400).send("Error: " + err.message);
    }
})

authRouter.post('/login', async (req, res) => {
    try {
        const {email, password} = req.body;
        const user =  await RegisterSchema.findOne({email: email});

        if(!user)
        {
            throw new Error("Invalid Credential");
        }

        const isPasswordValid = await user.validatePassword(password);
        if(isPasswordValid)
        {
            const token = await user.getJWT();

            // Add the token to cookie and send the response back to user
            res.cookie("token", token);
            res.send("Login Successful");
        }

        else{
            throw new Error("Password is not correct");
        }
    }
    catch(err)
    {
        res.status(400).send("Error: " + err.message);
    }
})

authRouter.post('/logout', async(req,res) => {
    try{
        res.cookie("token", null, {
            expires: new Date(Date.now()),
        })
    }   
    catch(err)
    {
        res.status(400).send("Error: " + err.message);
    }
})
module.exports = authRouter;