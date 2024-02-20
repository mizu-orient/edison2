import React, { useState, useEffect, useRef } from "react";
import { Grid, InputAdornment, Input, Select } from "@material-ui/core";
import {
  IconButton,
  Typography,
  FormControl,
  InputLabel,
  MenuItem,
  Hidden,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import "./BookList.css"; // CSSファイルをインポートします
import defaultCover from "../../assets/notavailable.png";
import useStyles from "./styles";

const BookCard = ({ book }) => {
  const classes = useStyles();

  const handleBook = () => {
    localStorage.setItem("currentBook", JSON.stringify(book));
  };

  return (
    <main className={classes.mainPage}>
      <div className={classes.toolbar} />
      <div className="book-card">
        <div className="rating">{book.style} ★</div>
        <img
          src={book.coverImage ? book.coverImage : defaultCover}
          alt={book.title}
          className="book-image"
        />
        <h3>{book.title}</h3>
        <div className="rating">
          {Array.from({ length: 5 }, (_, index) => (
            <span key={index}>{index < book.ratio ? "★" : "☆"}</span>
          ))}
        </div>
        <IconButton
          component={Link}
          to={{
            pathname: "/readbook",
          }}
          state={{ state: 0 }}
          onClick={() => handleBook(book)}
          color="inherit"
        >
          <div className="clay card" style={{ marginRight: "10px" }}>
            <Typography variant="h6" color="inherit">
              <div className="add-to-cart">読む</div>
            </Typography>
          </div>
        </IconButton>
      </div>
    </main>
  );
};

const BookList = ({ style, root }) => {
  const [dummyBookIdOfUser, setDummyBookIdOfUser] = useState(
    JSON.parse(localStorage.getItem("dummyBookIdOfUser"))
  );
  const [dummyBooks, setDummyBooks] = useState(
    JSON.parse(localStorage.getItem("dummyBooks"))
  );

  const getBooks = () => {
    setDummyBookIdOfUser(JSON.parse(localStorage.getItem("dummyBookIdOfUser")));
    setDummyBooks(JSON.parse(localStorage.getItem("dummyBooks")));
  };

  let usersBookIdList = dummyBookIdOfUser.find(
    (user) => user.id === 1
  ).bookIdList;

  let books = dummyBooks.filter((book) =>
    usersBookIdList.includes(book.bookId)
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    getBooks();
  }, []);

  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStyle, setSelectedStyle] = useState(style);

  const handleAllStyles = () => {
    usersBookIdList = dummyBookIdOfUser.find(
      (user) => user.id === 1
    ).bookIdList;
    let allBookIdList = [
      ...new Set([
        ...dummyBookIdOfUser.find((user) => user.id === 1).manga,
        ...dummyBookIdOfUser.find((user) => user.id === 1).novel,
        ...dummyBookIdOfUser.find((user) => user.id === 1).ehon,
      ]),
    ];
    books = dummyBooks.filter((book) => allBookIdList.includes(book.bookId));
  };

  const handleManga = () => {
    usersBookIdList = dummyBookIdOfUser.find((user) => user.id === 1).manga;
    books = dummyBooks.filter((book) => usersBookIdList.includes(book.bookId));
  };

  const handleNovel = () => {
    usersBookIdList = dummyBookIdOfUser.find((user) => user.id === 1).novel;
    books = dummyBooks.filter((book) => usersBookIdList.includes(book.bookId));
  };

  const handleEhon = () => {
    usersBookIdList = dummyBookIdOfUser.find((user) => user.id === 1).ehon;
    books = dummyBooks.filter((book) => usersBookIdList.includes(book.bookId));
    console.log(books);
  };

  const removeAllBooks = () => {
    let dummyData = JSON.parse(localStorage.getItem("dummyBookIdOfUser"));
    let updatedDummyData = dummyData.map((user) => {
      if (user.id === 1) {
        return {
          ...user,
          bookIdList: [],
          manga: [],
          novel: [],
          ehon: [],
        };
      }
      return user;
    });
    localStorage.setItem("dummyBookIdOfUser", JSON.stringify(updatedDummyData));
  };

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
          {root !== true && (
            <div
              style={{
                width: "60%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FormControl style={{ minWidth: "160px", marginRight: "10px" }}>
                <InputLabel align="center">ジャンル</InputLabel>
                <Select
                  value={selectedStyle}
                  onChange={(event) => {
                    setSelectedStyle(event.target.value);
                  }}
                  style={{ minWidth: "160px" }}
                >
                  <MenuItem value="all">ぜんぶ</MenuItem>
                  <MenuItem value="manga">まんが</MenuItem>
                  <MenuItem value="novel">しょうせつ</MenuItem>
                  <MenuItem value="ehon">えほん</MenuItem>
                </Select>
              </FormControl>
              <Input
                className={classes.searchb}
                type="text"
                placeholder="好きな本を探してね"
                onChange={(event) => {
                  setSearchTerm(event.target.value);
                }}
                startAdornment={
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                }
              />
            </div>
          )}

          {searchTerm !== "" && <h1>検索機能は未実装</h1>}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center", // 中央揃えに変更されました
              gap: "20px",
              maxWidth: "1200px",
            }}
          >
            {(() => {
              let filteredBooks = [];
              if (selectedStyle === "all") {
                handleAllStyles();
                filteredBooks = books;
              } else if (selectedStyle === "manga") {
                handleManga();
                filteredBooks = books.filter((book) => book.style === "manga");
              } else if (selectedStyle === "novel") {
                handleNovel();
                filteredBooks = books.filter((book) => book.style === "novel");
              } else if (selectedStyle === "ehon") {
                handleEhon();
                filteredBooks = books.filter((book) => book.style === "ehon");
              } else {
                filteredBooks = books;
              }
              return filteredBooks.map((book) => (
                <div
                  key={book.id}
                  style={{
                    minWidth: "300px",
                    maxWidth: "calc(33.333% - 20px)",
                    flex: "1 1 calc(33.333% - 20px)",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <BookCard book={book} />
                </div>
              ));
            })()}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <button
              style={{
                padding: "10px 20px",
                fontSize: "16px",
                color: "white",
                backgroundColor: "#f1361d",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
              onClick={removeAllBooks}
            >
              本を全削除
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default BookList;
