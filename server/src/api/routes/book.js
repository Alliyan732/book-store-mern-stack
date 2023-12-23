// imports
const express = require('express');
const router = express.Router();


// import controllers
var bookController = require('../controllers/book');


// import middlewares


// api routes
router.get('/', bookController.getAllBooks);
router.post('/', bookController.addBook);
router.delete('/:bookId', bookController.deleteBook);


// export
module.exports = router;