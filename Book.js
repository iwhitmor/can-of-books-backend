const bookSchema = mongoose.Schema({
  title: String,
  description: String,
  status: String,
  email: String,
});

let Book = mongoose.model('Book', bookSchema);