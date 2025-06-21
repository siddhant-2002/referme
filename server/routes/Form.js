const express = require("express");
const FormRouter = express.Router();
const { form } = require("../controllers/form");

FormRouter.post("/Form", form);

module.exports = FormRouter;