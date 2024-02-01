import React, { useState, useEffect } from "react";
import Popup from "reactjs-popup";
import "./CreateBook.css";

import defaultCover from "./images/notavailable.png";
import dummyBooks from "../../../shared/dummy_data/dummyBooks.json";

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <img src={book.coverImage} alt={`Cover of book ${book.bookId}`} />
      <div className="book-details">
        <h3>{book.title}</h3>
        <p>{book.description}</p>
        <p>{book.ratio}</p>
      </div>
    </div>
  );
};

const CreateBook = (props) => {
  const { selectCreateBook } = props;
  const [currentUser, setCurrentUser] = useState(
    localStorage.getItem("loggedInMailAddress")
  );
  const [books, setBooks] = useState([]);

  useEffect(() => {
    selectCreateBook();
    retrieveBooks();
  }, [selectCreateBook]);

  const retrieveBooks = () => {
    const selectedBooks = dummyBooks.map((book) => ({
      bookId: book.bookId,
      title: book.title, // タイトルを追加
      description: book.description,
      ratio: book.ratio,
      coverImage: book.coverImage ? book.coverImage : defaultCover,
    }));
    setBooks(selectedBooks);
    console.log("Books retrieved!: ", selectedBooks);
  };

  const BookDisplay = () => {
    return (
      <div className="book-display">
        {books.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </div>
    );
  };

  const [openPopup, setOpenPopup] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const handleBookClick = (book) => {
    setSelectedBook(book);
    setOpenPopup(true);
  };

  const handleClosePopup = () => {
    setOpenPopup(false);
  };

  return (
    <div>
      <BookDisplay handleBookClick={handleBookClick} />
      {openPopup && (
        <Popup
          open={openPopup}
          onClose={handleClosePopup}
          book={selectedBook}
        />
      )}
    </div>
  );
};

export default CreateBook;
