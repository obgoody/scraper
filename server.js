const express = require("express");
const epressHandlebars = require("express-handlebars");
const mongojs = require("mongojs");
const cheerio = require("cheerio");
const axios = require("axios");

const PORT = process.env.PORT || 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(__dirname + "/public"));
app.engine("handlebars", expressHandlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.use(router);

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoScraper";

mongoose.connect(CONNECTION_URI, { useMongoClient: true }).then(() => {
    console.log('Connected to MongoDB.');
}).catch(err => console.log(err));

app.listen(PORT, function () {
    console.log("Listening on port:" + PORT);
});