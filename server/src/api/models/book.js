const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema(
    {
        bookName: {
            type: String,
            required: true
        },
        authorName: {
            type: String,
            required: true
        },
        bookPrice: {
            type: Number,
            required: true
        },
    },
    {
        timestamps: true
    }
)

const Book = mongoose.model('Book', bookSchema)
module.exports = Book