const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Admin = require("./models/admin");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/admin");

app.post("/Form", async (req, res) => {
	const {email, password} = req.body;
	const user = await Admin.findOne({email: email}).then((user) => {
		if (user) {
			if (user.password === password) {
				res.json("true");
			} else {
				res.json("password is incorrect");
			}
		} else {
			res.json("no record  existed");
		}
	});
});

app.listen(3000, () => {
	console.log("server is running at port 3000");
});
