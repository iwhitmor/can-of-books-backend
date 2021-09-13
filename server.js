/* eslint-disable no-trailing-spaces */
'use strict';

require('dotenv').config();

const Book = require('./Book');

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URL);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('It works!');
});

const app = express();
app.use(cors());

app.get('/Book', async (req, res) => {
  const books = await Book.find();
  
  res.send(books);
});

const PORT = process.env.PORT || 3001;

app.get('/test', (request, response) => {

  response.send('test request received');

});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
