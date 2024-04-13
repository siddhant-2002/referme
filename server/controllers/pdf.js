const pdf = require('../models/pdf');

exports.pdf = async (req, res, next) => {
    const { pdfUrl} = req.body;

  if (!pdfUrl) {
    res.status(400);
    return next(new Error("pdfUrl fields are required"));
  }

  try {
    const pdfs = await pdf.create({
      pdfUrl,
    });

    res.status(201).json({
      success: true,
      pdfs,
    });
  } catch (error) {
    console.log(error);
    res.status(500);
    next(error);
  }
}
