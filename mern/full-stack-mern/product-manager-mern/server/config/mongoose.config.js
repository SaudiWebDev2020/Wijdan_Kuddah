const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/product_manager_DB", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false
})
	.then(() => console.log("Established a connection to the database"))
	.catch(err => console.log("Something went wrong when connecting to the database", err));