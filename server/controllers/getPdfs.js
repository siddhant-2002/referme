const Pdf = require('../models/pdf'); // replace with your actual model

exports.getPdfs = async (req, res) => {
  try {
    const { year, semester, subject, type, subtype} = req.query;
    const pdfs = await Pdf.find({ year, semester, subject, type, subtype });
    res.json(pdfs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};