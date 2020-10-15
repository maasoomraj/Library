const router = require("express").Router();
const BookController = require("../controllers/book");

// Query Books
router.get("/books", BookController.showBooks);

// Add book
router.post("/add-book", BookController.addBook);

module.exports = router;
