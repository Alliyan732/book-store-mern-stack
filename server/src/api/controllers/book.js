const express = require('express');
const Book = require('../models/book');

exports.addBook = async (req, res, next) => {
    try {
        const { title, author, publishYear } = req.body;

        if (!title || !author || !publishYear) {
            return res.status(400).json({ message: "Please enter all the fields." });
        }

        const newBook = {
            title,
            author,
            publishYear
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

        return res.status(200).json({
            data : books
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

exports.getOneBook = async (req, res, next) => {
    try {
        const bookId = req.params.bookId;

        const book = await Book.findById(bookId);

        if (!book) {
            return res.status(404).json({ message: "Book not found." });
        }

        return res.status(200).json(book);

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};


exports.updateBook = async (req, res, next) => {
    try {

        const { title, author, publishYear } = req.body;

        const bookId = req.params.bookId;

        if (!bookId) {
            return res.status(404).json({ message: "Book not found." });
        }

        const updatedBook = {
            title,
            author,
            publishYear
        };

        const updateBook = await Book.findByIdAndUpdate(bookId, updatedBook, { new: true });  // new: true returns the updated book

        return res.status(200).json({
            message: "Book updated Successfully!",
            data: updateBook
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}


