import React, { useState, useEffect } from "react";
import Popup from "reactjs-popup";
import "./CreateBook.css";

import defaultCover from "./images/notavailable.png";
import dummyBooks from "../../../shared/dummy_data/dummyBooks.json";
import dummyBookIdOfUser from "../../../shared/dummy_data/dummyBookIdOfUser.json";

const BookCard = ({ book, onBookClick }) => {
  return (
    <div
      className="book-card"
      style={{ flexDirection: "column", height: "250px", width: "80%" }}
      onClick={() => onBookClick(book)} // BookCardをクリックしたときの処理を追加
    >
      <img
        src={book.coverImage}
        alt={`Cover of book ${book.bookId}`}
        style={{ width: "100%", height: "150px", objectFit: "contain" }} // objectFitをcontainに変更して画像全体を表示
      />
      <div className="book-details" style={{ overflow: "hidden" }}>
        <h3>{book.title}</h3>
        <p>★ {book.ratio}</p>
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

  const BookDisplay = ({ handleBookClick }) => {
    return (
      <div className="book-display">
        {books.map((book, index) => (
          <BookCard key={index} book={book} onBookClick={handleBookClick} />
        ))}
      </div>
    );
  };

  const [openPopup, setOpenPopup] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [bookType, setBookType] = useState("挿絵");
  const [creating, setCreating] = useState(false); // 作成中の状態を管理するためのstateを追加

  const handleBookClick = (book) => {
    setSelectedBook(book);
    setOpenPopup(true);
  };

  const handleClosePopup = () => {
    setOpenPopup(false);
    setCreating(false); // ポップアップを閉じるときに作成中の状態をリセット
  };

  const handleCreateBook = () => {
    console.log(`${bookType}を作成しています`);
    setCreating(true); // 作成ボタンを押したときに作成中の状態にする
    // 選択したbookIdをdummyBookIdOfUserの該当するidのbookIdリストに追加する処理
    const userIndex = dummyBookIdOfUser.findIndex(
      (user) => user.id === Number(localStorage.getItem("currentId"))
    );
    if (userIndex !== -1) {
      dummyBookIdOfUser[userIndex].bookIdList.push(selectedBook.bookId);
      console.log(
        "Book ID added to user's book list: ",
        dummyBookIdOfUser[userIndex]
      );
    }
  };

  return (
    <div>
      <BookDisplay handleBookClick={handleBookClick} />
      {openPopup && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex: 999,
          }}
        >
          <Popup open={openPopup} onClose={handleClosePopup} modal nested>
            {creating ? (
              <div
                style={{
                  backgroundColor: "white",
                  padding: "20px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
                  borderRadius: "10px",
                }}
              >
                <h2>{`${bookType}を作成しました!`}</h2>
              </div>
            ) : (
              <div
                style={{
                  backgroundColor: "white",
                  padding: "20px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
                  borderRadius: "10px",
                }}
              >
                <h2>{selectedBook.title}</h2>
                <select
                  value={bookType}
                  onChange={(e) => setBookType(e.target.value)}
                >
                  <option value="挿絵">挿絵</option>
                  <option value="漫画">漫画</option>
                  <option value="小説">小説</option> {/* 小説を選択肢に追加 */}
                </select>
                <button onClick={handleCreateBook}>作成する</button>
              </div>
            )}
          </Popup>
        </div>
      )}
    </div>
  );
};

export default CreateBook;
