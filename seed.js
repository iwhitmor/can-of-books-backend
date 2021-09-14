const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URL);

const Book = require('./Book');

async function seed() {

  console.log('Deleting existing books');
  await Book.deleteMany({});

  const myBook = new Book({
    title: 'The Adventures of Huckleberry Finn',
    description: 'The Adventures of Huckleberry Finn, by Mark Twain, is about a young boy, Huck, in search of freedom and adventure. ... Huck finally escapes from the deserted house in the woods and finds a canoe to shove off down the river. Instead of going back to the widows house, he decides to run away.',
    rating: 4,
    email: 'ianwhitmor@gmail.com',
  });

  await myBook.save();

  const myBook2 = new Book({
    title: 'The Great Gatsby',
    description: 'F. Scott Fitzgeralds novel,The Great Gatsby, follows Jay Gatsby, a man who orders his life around one desire: to be reunited with Daisy Buchanan, the love he lost five years earlier.',
    rating: 5,
    email: 'ianwhitmor@gmail.com',
  });

  await myBook2.save();

  const myBook3 = new Book({
    title: 'Moby Dick',
    description: 'The book is the sailor Ishmaels narrative of the obsessive quest of Ahab, captain of the whaling ship Pequod, for revenge on Moby Dick, the giant white sperm whale that on the ships previous voyage bit off Ahabs leg at the knee.',
    rating: 3,
    email: 'ianwhitmor@gmail.com',
  });

  await myBook3.save();

  mongoose.disconnect();

}

seed();
