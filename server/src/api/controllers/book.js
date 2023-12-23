const express = require('express');
const Book = require('../models/book');

exports.addBook = async (req, res, next) => {
    try {
        const { bookName, authorName, bookPrice } = req.body;

        if (!bookName || !authorName || !bookPrice) {
            return res.status(400).json({ message: "Please enter all the fields." });
        }

        const newBook = {
            bookName,
            authorName,
            bookPrice
        };

        const book = await Book.create(newBook);

        return res.status(200).json({
            message: "Book Added Successfully!",
            data: book
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

exports.deleteBook = async (req, res, next) => {
    try {
        const bookId = req.params.bookId;

        if (!bookId) {
            return res.status(400).json({ message: "Please provide valid book id" });
        }

        const deletedBook = await Book.findOneAndDelete({ _id: bookId });

        if (!deletedBook) {
            return res.status(404).json({ message: "Book not found." });
        }

        return res.status(200).json({
            message: "Book deleted Successfully!",
            data: deletedBook
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

exports.getAllBooks = async (req, res, next) => {
    try {

        const books = await Book.find({});

        if (!books) {
            return res.status(404).json({ message: "Books not found." });
        }

        return res.status(200).json(books);

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

// exports.getDbTest = async (req, res, next) => {
//     try {
//         // Use projection to get only the 'email' field
//         const isUserExists = await usersCollection.find({}, { projection: { email: 1 } }).toArray();

//         if (!isUserExists || isUserExists.length === 0) {
//             return res.status(404).json({ message: "Emails not found." });
//         }

//         res.status(200).json(isUserExists);

//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ message: "500: Error occurred" });
//     }
// };
