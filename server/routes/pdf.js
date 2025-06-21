const express = require("express");
const PdfRouter = express.Router();

const {postpdf} = require("../controllers/postpdf");
const {getPdfs} = require("../controllers/getPdfs");

PdfRouter.post("/Postpdfs", postpdf);
PdfRouter.get("/getpdfs", getPdfs);

module.exports = PdfRouter;