const Pdf = require('../models/pdf'); 

exports.getPdfs = async (req, res) => {
  try {
    const { year, branch,semester, subject, type} = req.query;
    const pdfs = await Pdf.find({ year, branch, semester, subject, type});
    res.json(pdfs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};