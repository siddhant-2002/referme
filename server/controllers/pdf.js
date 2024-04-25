const pdf = require('../models/pdf');

exports.pdf = async (req, res, next) => {
    const { pdfUrl, Year,Semister,Subject,type, units} = req.body;
    
  if (!pdfUrl) {
    res.status(400);
    return next(new Error("pdfUrl fields are required"));
  }

  try {
    const pdfs = await pdf.create({
      pdfUrl, Year,Semister,Subject,type, units
    });

    res.status(201).json({
      success: true,
      pdfUrl, Year,Semister,Subject,type,units
    });
  } catch (error) {
    console.log(error);
    res.status(500);
    next(error);
  }
}
