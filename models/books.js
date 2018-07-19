var mongoose = require("mongoose");

var bookSchema = new mongoose.Schema({
    title: String,
    ISBN: String,
    date: String
});
var Book = module.exports = mongoose.model("Books", bookSchema);

module.exports.getBooks = function(callback, limit){
    Book.find(callback).limit(limit);
};