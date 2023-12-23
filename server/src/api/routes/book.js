// imports
const express = require('express');
const router = express.Router();


// import controllers
var bookController = require('../controllers/book');


// import middlewares


// api routes
router.get('/', bookController.getAllBooks);
router.get('/:bookId', bookController.getOneBook);
router.post('/', bookController.addBook);
router.delete('/:bookId', bookController.deleteBook);
router.put('/:bookId', bookController.updateBook);


// export
module.exports = router;