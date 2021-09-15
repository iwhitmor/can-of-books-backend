'use strict';

require('dotenv').config();

const Book = require('./Book');

const express = require('express');
const cors = require('cors');

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URL);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('It works!');
});

const app = express();
app.use(cors());

app.use(express.json());


app.get('/books', async (req, res) => {
  const books = await Book.find();

  res.send(books);
});

app.post('/books', postBooks);

app.delete('/books', deleteBook);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`listening on ${PORT}`));

async function postBooks(req, res) {
  console.log('headers', req.headers);
  console.log('body', req.body);

  try {
    const newBook = await Book.create(req.body);
    res.send(newBook);
  }
  catch (err) {
    handleError(err, res);
  }
}

async function deleteBook(req, res) {
  let id = req.params.id;

  try {
    await Book.findByIdAndDelete(id);
    res.status(204).send();
  }
  catch (err) {
    handleError(err, res);
  }
}

function handleError(err, res) {
  console.log(err);
  res.status(500).send('Error!');
}
