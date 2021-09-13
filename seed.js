const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URL);

const Book = require('./Book');

async function seed() {

  console.log('Deleting existing books');
  await Book.deleteMany({});

  const myBook = new Book({
    title: 'Moby Dick',
    description: 'The book is the sailor Ishmaels narrative of the obsessive quest of Ahab, captain of the whaling ship Pequod, for revenge on Moby Dick, the giant white sperm whale that on the ships previous voyage bit off Ahabs leg at the knee.',
    status: 'Available',
    email: 'ianwhitmor@gmail.com',
  });

  myBook.save();

  mongoose.disconnect();

}

seed();
