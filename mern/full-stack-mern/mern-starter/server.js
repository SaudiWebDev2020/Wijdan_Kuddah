const express = require("express");
const cors = require('cors');
const app = express();
const port = 8000;
// This will fire our mongoose.connect statement to initialize our database connection
require("./server/config/mongoose.config");
app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true }));

// This is where we import the myapp routes function from our myapp.routes.js file
require("./server/routes/myapp.routes")(app);

app.listen(port, () => console.log(`Listening on port: ${port}`) );
