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

    year:{
        type: String,
        required: true,
    },

    semester:{
        type: String,
        required: true,
    },

    subject:{
        type: String,
        required: true,
    },

    type:{
        type: String,
        required: true,
    },

    subtype:{
        type: String,
        required: true,
    },
})

module.exports = moogoose.model('pdf', todoSchema);
