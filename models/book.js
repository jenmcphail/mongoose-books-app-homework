var mongoose = require('mongoose'),
  Schema = mongoose.Schema;
  Author = require('./author');

var BookSchema = new Schema({
     title: String,
     author: {type: Schema.Types.ObjectId, ref: 'Author'},
     image: String,
     releaseDate: String,
     characters: [CharacterSchema]
});

var CharacterSchema = new Schema({
  name: String
});

var Book = mongoose.model('Book', BookSchema);
module.exports = Book;


//need to export something else?