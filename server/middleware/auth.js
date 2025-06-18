const jwt = require('jsonwebtoken');
const RegisterSchema = require('../models/register');

const userAuth = async(req, res, next) => {
    try{
        // Read the token from the req cookies
        const {token} = req.cookies;

        if(!token)
        {
            throw new Error("Token is not valid");
        }

        const decodedObj = await jwt.verify(token, "Yash123#")

        const {_id} = decodedObj;
        const user = await RegisterSchema.findById(_id);

        if(!user)
        {
            throw new Error("User not found");
        }

        req.user = user; // Attach the user to the request object
        next(); // Call the next middleware or route handler
    }
    catch(err)
    {
        res.status(401).send("Unauthorized: " + err.message);
    }
}

module.exports = {userAuth};