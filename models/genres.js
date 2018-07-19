var mongoose = require("mongoose");

var genreSchema = new mongoose.Schema({
   name: String
});
var Genre = module.exports = mongoose.model("Genre", genreSchema);

module.exports.getGenres = function(callback, limit){
    Genre.find(callback).limit(limit);
};