const Book = require("../models/Book");

exports.showBooks = async (req, res) => {
  const query = req.query;
  console.log(query);
  //   Get all Books from database
  try {
    const books = await Book.find(query);
    res.status(200).send({ books: books });
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.addBook = async (req, res) => {
  // Create a new book object
  const book = new Book({
    name: req.body.name,
    author: req.body.author,
  });

  console.log(book);

  // Get all Books from database
  try {
    const savedBook = await book.save();
    res.status(200).send({ book: savedBook });
  } catch (err) {
    res.status(400).send(err);
  }
};
