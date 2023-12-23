# MERN Stack Book Store

## Overview

This is a full-stack web application built with the MERN (MongoDB, Express.js, React, Node.js) stack. The Book Store allows users to perform CRUD operations (Create, Read, Update, Delete) on books. Users can view books in both table and card views, add new books, edit existing books, delete books, and view detailed information about each book.

## Features

- **View Books:**
  - Navigate through a list of books in both table and card views.
  - View details about each book, including title, author, and other relevant information.

- **Add Book:**
  - Add a new book to the store by providing necessary details.

- **Edit Book:**
  - Update information about existing books, such as title, author, etc.

- **Delete Book:**
  - Remove a book from the store.

## Technologies Used

- **Frontend:**
  - React.js: A JavaScript library for building user interfaces.
  - React Router: Handling navigation within the application.
  - Axios: Making HTTP requests to the backend.

- **Backend:**
  - Node.js: JavaScript runtime for server-side development.
  - Express.js: Web application framework for Node.js.
  - MongoDB: NoSQL database for storing book information.
  - Mongoose: MongoDB object modeling for Node.js.

## Setup Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/Alliyan732/book-store-mern-stack
   ```
2. Navigate to the client and server folders separately and install dependencies:

   ```bash
   cd client
   npm install
   ```
   And

   ```bash
   cd client
   npm install
   ```
3. Create a .env file in the server folder and set the following variables:
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string

4. Run the development server for both the client and server:

   #### In the client folder
   ```bash
   npm run dev
   ```
   #### In the server folder
   ```bash
   npm start
   ```
5. Open your browser and visit http://localhost:3000 to access the application.

### Folder Structure
client: Contains the React.js frontend code.
server: Houses the Node.js and Express.js backend code.

### Contributing
Feel free to contribute to this project by opening issues or creating pull requests. Your feedback and contributions are highly appreciated!


### License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author
Aalliyan Alvi

## Support
If you encounter any issues or have any questions or suggestions, please feel free to open an issue. We appreciate your feedback and contributions to the project.

Email: alliyan732@gmail.com

LinkedIn: https://www.linkedin.com/in/alliyan-alvi/

Happy Coding!
