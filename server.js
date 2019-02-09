
var express = require("express");
var mongoose = require("mongoose");
var exphbs = require("express-handlebars");

// Set up our port 
var PORT = process.env.PORT || 3000;

// Express App
var app = express();

// routes
var routes = require("./routes");

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//static folder
app.use(express.static("public"));

//Handlebars to Express app
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.use(routes);

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

//Mongo DB
mongoose.connect(MONGODB_URI);

app.listen(PORT, function() {
  console.log("Listening on port: " + PORT);
});
