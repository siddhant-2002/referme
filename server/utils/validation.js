const validator = require('validator');

const validateSignUpData = (req) => {
    const {name, email, mobile, password, confirmPassword} = req.body;

    if(!name)
    {
        throw new Error("Name is required");
    }

    else if(name.length < 3 || name.length > 50)
    {
        throw new Error("Name must be between 3 and 50 characters");
    }

    else if(!validator.isEmail(email))
    {
        throw new Error("Invalid email format");
    }

    else if(!mobile || !validator.isMobilePhone(mobile.toString(), 'any'))
    {
        throw new Error("Invalid mobile number");
    }

    else if(!validator.isStrongPassword(password))
    {
        throw new Error("Please enter a strong password");
    }

    else if(password !== confirmPassword)
    {
        throw new Error("Passwords do not match" + password);
    }
}

module.exports = {validateSignUpData};  