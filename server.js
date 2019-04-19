const express = require("express");
const expressHandlebars = require("express-handlebars");
// const logger = require("morgan");
const mongoose = require("mongoose");


const PORT = process.env.PORT || 3000;

const app = express();
const router = express.Router();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./config/routes")(router);

app.use(express.static(__dirname + "/public"));
app.engine("handlebars", expressHandlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.use(router);

var CONNECTION_URI = "mongodb://heroku_8tfsjppw:lts9cmldj62b5vnt0p0clg22k8@ds145146.mlab.com:45146/heroku_8tfsjppw"

const CONNECTION_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoScraper";

mongoose.connect(CONNECTION_URI).then(() => {
    console.log('Connected to MongoDB.');
}).catch(err => console.log(err));


// listen on port
app.listen(PORT, function () {
    console.log("Listening on port:" + PORT);
});