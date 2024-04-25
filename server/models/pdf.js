const moogoose = require("mongoose");

const todoSchema = new moogoose.Schema({
	pdfUrl: {
		type: String,
		required: true,
	},
    Year:{
        type: String,
		required: true,
        
    },
    Semister:{
        type: String,
		required: true,
    },
    Subject:{
        type: String,
		required: true,
    },
    type:{
        type:String,
        required:true,
    },
    units:{
        type:String,
        required:true,
    }

	
});

module.exports = moogoose.model("pdf", todoSchema);
