const mongoose = require('mongoose');

require("dotenv").config();

const connectDB = () => {

 mongoose.connect(process.env.MONGO_URI)

    .then(() => {
      console.log("Connected to the database");
    })

    .catch((err) => {
      console.log("Error connecting to the database: ", err.message);
      console.error(err.message);
      process.exit(1);
    });
};

module.exports = connectDB;