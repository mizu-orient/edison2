import React, { useState } from "react";
import "./BookList.css"; // CSSファイルをインポートします
import defaultCover from "../../assets/notavailable.png";

const BookCard = ({ book }) => {
  const [isHot, setIsHot] = useState(false);
  const [isManga, setIsManga] = useState(false);
  const [isEhon, setIsEhon] = useState(false);
  const [isNovel, setIsNovel] = useState(false);

  return (
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
  );
};

const BookList = () => {
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
    <div className="book-menu">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
