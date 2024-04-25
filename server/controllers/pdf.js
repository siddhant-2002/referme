const pdf = require('../models/pdf');

exports.pdf = async (req, res, next) => {
    const { pdfUrl, year, branch,semester, subject, type, subtype} = req.body;

  if (!pdfUrl) {
    res.status(400);
    return next(new Error("pdfUrl fields are required"));
  }

  try {
    const pdfs = await pdf.create({
      pdfUrl,
      year,
      branch,
      semester,
      subject,
      type,
      subtype
    });

    res.status(201).json({
      success: true,
      // pdfs,
      pdfUrl,
      year,
      branch,
      semester,
      subject,
      type,
      subtype

    });
  } catch (error) {
    console.log(error);
    res.status(500);
    next(error);
  }
}
