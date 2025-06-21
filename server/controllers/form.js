const Admin = require("../models/admin");

exports.form = async (req, res) => {
    const {email, password} = req.body;
	const user = await Admin.findOne({email: email}).then((user) => {
		if (user) {
			if (user.password === password) {
				res.json("true");
				console.log("true");
			} else {
				res.json("password is incorrect");
			}
		} else {
			res.json("no record  existed");
		}
	});
}