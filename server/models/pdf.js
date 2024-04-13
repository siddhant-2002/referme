const moogoose = require('mongoose');

const todoSchema = new moogoose.Schema({
    pdfUrl:{
        type: String,
        required: true,
    },

    createdAt:{
        type: Date,
        default: Date.now(),
    },
    
})

module.exports = moogoose.model('pdf', todoSchema);
