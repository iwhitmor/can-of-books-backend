const mongoose = require('mongoose');

const { Schema } = mongoose;

const bookSchema = new Schema({
  title: String,
  description: String,
  rating: Number,
  email: String,
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
