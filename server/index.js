const express = require("express");
const connectDB = require("./config/database");
const cors = require("cors");

const PdfRouter = require("./routes/pdf");
const FormRouter = require("./routes/Form");
const app = express();

app.use(express.json());
app.use(cors());


app.use("/", PdfRouter);
app.use("/", FormRouter);


require("dotenv").config();
const PORT = process.env.PORT || 4000;



app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
	connectDB();
});


