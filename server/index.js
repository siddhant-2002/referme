const express = require("express");
const connectDB = require("./config/database");
const cors = require("cors");
const Admin = require("./models/admin");
const authRouter = require("./routes/auth");
const app = express();

app.use(express.json());
app.use(cors());

app.post("/Form", async (req, res) => {
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
});

const pdfRoutes = require("./routes/pdf");
app.use("/api/pdfs", pdfRoutes);

app.use('/', authRouter)


require("dotenv").config();
const PORT = process.env.PORT || 4000;

connectDB();

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});


