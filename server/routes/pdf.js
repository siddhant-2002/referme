const express = require("express");
const router = express.Router();

const {pdf} = require("../controllers/pdf");

router.post("/", pdf);

module.exports = router;