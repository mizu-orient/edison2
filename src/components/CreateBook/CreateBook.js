import React, { useState, useEffect } from "react";
import "./CreateBook.css"; // CSSファイルをインポートします
import defaultCover from "../../assets/notavailable.png";
import dummyBooks from "../../shared/dummy_data/dummyBooks.json";
import dummyBookIdOfUser from "../../shared/dummy_data/dummyBookIdOfUser.json";
import useStyles from "./styles";

const BookCard = ({ book }) => {
  const classes = useStyles();
  const [isManga, setIsManga] = useState(false);
  const [isEhon, setIsEhon] = useState(false);
  const [isNovel, setIsNovel] = useState(false);

  // useEffect(() => {
  //   retrieveBooks();
  // }, []);

  const bookIdList = dummyBookIdOfUser.find(
    (user) => user.id === Number(localStorage.getItem("currentId"))
  ).bookIdList;

  const retrieveBooks = async () => {
    const selectedBooks = dummyBooks.filter((book) =>
      bookIdList.includes(book.bookId)
    );
    setProducts(selectedBooks);
    console.log("Books retrieved!: ", selectedBooks);
  };

  return (
    <main className={classes.mainPage}>
      <div className={classes.toolbar} />
      <div className="book-card">
        <img
          src={book.coverImage ? book.coverImage : defaultCover}
          alt={book.title}
          className="book-image"
        />
        <h3>{book.title}</h3>
        <div className="rating">{book.rating} ★</div>
        <div className="temperature-options">
          <button
            className={`temperature-option ${isManga ? "active" : ""}`}
            onClick={() => {
              setIsManga(true);
              setIsEhon(false);
              setIsNovel(false);
            }}
          >
            漫画
          </button>
          <button
            className={`temperature-option ${isEhon ? "active" : ""}`}
            onClick={() => {
              setIsManga(false);
              setIsEhon(true);
              setIsNovel(false);
            }}
          >
            絵本
          </button>
          <button
            className={`temperature-option ${isNovel ? "active" : ""}`}
            onClick={() => {
              setIsManga(false);
              setIsEhon(false);
              setIsNovel(true);
            }}
          >
            小説
          </button>
        </div>
        <button className="add-to-cart">本を作る</button>
      </div>
    </main>
  );
};

const CreateBook = ({ style }) => {
  const books = [
    {
      id: 1,
      title: "ねずみの嫁入り",
      style: "comic",
      rating: "1.5",
      bookId: "marriage_of_a_mouse",

      description: "ねずみかわいい",
      ratio: 1.5,
      bucket: null,
      coverImage:
        "https://1.bp.blogspot.com/-0S46QU6KoCM/WxvKQsHCcnI/AAAAAAABMn4/QEjMZyeeJVIrGAmauqC5F887L--c8hzpACLcBGAs/s800/monogatari_momotarou_solo.png",
    },
    {
      id: 2,
      title: "桃太郎",
      style: "comic",
      rating: "4.8",
      bookId: "momotaro",

      description: "",
      ratio: 5,
      bucket: null,
      coverImage: null,
    },
    {
      id: 3,
      title: "赤ずきん",
      style: "comic",

      rating: "3",
      coverImage: null,
    },
  ];

  return (
    <div
      className="book-menu"
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "20px",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      {books.map((book) => (
        <div style={{ flex: "1 0 30%" }}>
          <BookCard key={book.id} book={book} />
        </div>
      ))}
    </div>
  );
};

export default CreateBook;
