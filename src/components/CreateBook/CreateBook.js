import React, { useState, useEffect, useRef } from "react";
import { Grid, InputAdornment, Input } from "@material-ui/core";
import { IconButton, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import "./CreateBook.css"; // CSSファイルをインポートします
import defaultCover from "../../assets/notavailable.png";
import dummyBooks from "../../shared/dummy_data/dummyBooks.json";
import dummyBookIdOfUser from "../../shared/dummy_data/dummyBookIdOfUser.json";
import useStyles from "./styles";

const BookCard = ({ book, style }) => {
  const classes = useStyles();
  const [isManga, setIsManga] = useState(false);
  const [isEhon, setIsEhon] = useState(false);
  const [isNovel, setIsNovel] = useState(false);

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
        <div className="rating">★ {book.rating}</div>
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
        <IconButton component={Link} to="/booklist" color="inherit">
          <Typography variant="h6" color="inherit">
            <div className="add-to-cart">本を作る</div>
          </Typography>
        </IconButton>
      </div>
    </main>
  );
};

const CreateBook = ({ style }) => {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState("");
  const [selected, setSelected] = useState(style);

  // -------------------------
  const books = [
    {
      title: "ねずみの嫁入り",
      rating: "1.9",
      coverImage:
        "https://1.bp.blogspot.com/-0S46QU6KoCM/WxvKQsHCcnI/AAAAAAABMn4/QEjMZyeeJVIrGAmauqC5F887L--c8hzpACLcBGAs/s800/monogatari_momotarou_solo.png",
    },
    {
      title: "ねずみの嫁入り2",
      rating: "1.9",
      coverImage:
        "https://1.bp.blogspot.com/-0S46QU6KoCM/WxvKQsHCcnI/AAAAAAABMn4/QEjMZyeeJVIrGAmauqC5F887L--c8hzpACLcBGAs/s800/monogatari_momotarou_solo.png",
    },
    {
      title: "i am cat",
      rating: "1.9",
      coverImage: null,
    },
    {
      title: "注文の多い料理店",
      rating: "1.9",
      coverImage: null,
    },
    {
      title: "赤ずきん",
      rating: "1.9",
      coverImage: null,
    },
    {
      title: "赤ずきん2",
      rating: "1.9",
      coverImage: null,
    },
    {
      title: "走るメロス",
      rating: "1.9",
      coverImage: null,
    },
    {
      title: "かぐや姫",
      rating: "1.9",
      coverImage: null,
    },
  ];
  // -------------------------

  return (
    <>
      <main className={classes.mainPage}>
        <div className={classes.toolbar} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
            margin: "20px 0",
          }}
        >
          <div
            style={{
              width: "50%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Input
              className={classes.searchb}
              type="text"
              placeholder="好きな本を探してね"
              onChange={(event) => {
                setSearchTerm(event.target.value);
                setSelected(event.target.value);
              }}
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              }
            />
          </div>
          {searchTerm !== "" && <h1>検索機能は未実装</h1>}
          <div
            className="book-menu"
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "20px",
              maxWidth: "1200px",
            }}
          >
            {books.map((book) => (
              <BookCard book={book} style={selected} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default CreateBook;
