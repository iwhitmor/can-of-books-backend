const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URL);

const Book = require('./Book');

async function seed() {

  const myBook = new Book({
    title: 'The Adventures of Huckleberry Finn',
    description: 'The Adventures of Huckleberry Finn, by Mark Twain, is about a young boy, Huck, in search of freedom and adventure. ... Huck finally escapes from the deserted house in the woods and finds a canoe to shove off down the river. Instead of going back to the widows house, he decides to run away.',
    status: 'Available',
    email: 'ianwhitmor@gmail.com',
  });

  await myBook.save();

  mongoose.disconnect();

}

seed();
