import React, { useState, useEffect } from "react";
import Popup from "reactjs-popup";

import defaultCover from "./images/notavailable.png";
import dummyBooks from "../../../shared/dummy_data/dummyBooks.json";

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
      coverImage: book.coverImage ? book.coverImage : defaultCover,
    }));
    setBooks(selectedBooks);
    console.log("Books retrieved!: ", selectedBooks);
  };

  const BookDisplay = () => {
    return (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {books.map((book, index) => (
          <div
            key={index}
            style={{
              flex: "1 0 30%", // 3つまで横並びになるように調整
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between", // 本の位置を揃える
              marginBottom: "10px",
              marginRight: "1.5%", // 余白を設定
            }}
          >
            <div style={{ marginRight: "10px" }}>{book.bookId}</div>
            <div>
              <img
                src={book.coverImage}
                alt={`Cover of book ${book.bookId}`}
                style={{ width: "50px", height: "auto" }}
              />
            </div>
          </div>
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
