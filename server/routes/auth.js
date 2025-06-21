const express = require('express');
const authRouter = express.Router();
const bcrypt = require('bcrypt');

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