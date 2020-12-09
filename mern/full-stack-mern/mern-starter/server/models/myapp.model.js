const mongoose = require("mongoose");

const MyappSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [ true, "Name is required" ],
		minlength: [3, "Name must be at least 3 characters long"]
	}
}, { timestamps: true });

const Myapp = mongoose.model("Myapp", MyappSchema);

module.exports = Myapp;