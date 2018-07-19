var express = require("express"),
    mongoose = require("mongoose"),
    bodyParser = require("body-parser"),
    app = express();
var db = mongoose.connection;
app.set("view engine", "ejs");
// app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
mongoose.connect('mongodb://localhost:27017/bookstore', { useNewUrlParser: true });

Genre = require("./models/genres")
Book = require("./models/books")

app.get("/", function (req, res) {
    res.send("hi world");
});
app.get("/api/genres", function (req, res) {
    Genre.getGenres(function (err, genres) {
        if (err) {
            throw err;
        }
        res.json(genres);
    });
});
app.get("/api/genres", function (req, res) {
    Genre.getGenres(function (err, genres) {
        if (err) {
            throw err;
        }
        res.json(genres);
    });
});
app.get("/api/books", function (req, res) {
    Book.getBooks(function (err, books) {
        if (err) {
            throw err;
        }
        res.json(books);
    });
});

app.get("/blogs", function (req, res) {
    Book.find({}, function (err, books) {
        if (err) {
            console.log(err);
        } else {
            res.render("blogs", {books:books});
        }
    });
});


app.listen(3000, function () {
    console.log("Server is live on Port 3000");
});