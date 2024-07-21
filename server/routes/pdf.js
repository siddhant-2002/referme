const express = require("express");
const router = express.Router();

const {pdf} = require("../controllers/pdf");
const {getPdfs} = require("../controllers/getPdfs");

router.post("/", pdf);
router.get("/", getPdfs);

module.exports = router;