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

import dummyBooks from "../../shared/dummy_data/dummyBooks.json";
import dummyBookIdOfUser from "../../shared/dummy_data/dummyBookIdOfUser.json";

const BookCard = ({ book }) => {
  const classes = useStyles();

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
        <IconButton component={Link} to="/booklist" color="inherit">
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

const PopularBooks = ({ style, root }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStyle, setSelectedStyle] = useState(style);

  let usersBookIdList = dummyBookIdOfUser.find(
    (user) => user.id === 2
  ).bookIdList;

  let books = dummyBooks.filter((book) =>
    usersBookIdList.includes(book.bookId)
  );

  const handleAllStyles = () => {
    usersBookIdList = dummyBookIdOfUser.find(
      (user) => user.id === 1
    ).bookIdList;
    books = dummyBooks.filter((book) => usersBookIdList.includes(book.bookId));
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
              return filteredBooks.slice(0, 3).map((book) => (
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
                  <BookCard key={book.id} book={book} />
                </div>
              ));
            })()}
          </div>
        </div>
      </main>
    </>
  );
};

export default PopularBooks;
