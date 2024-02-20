import React, { useState, useEffect, useRef } from "react";
import { Grid, InputAdornment, Input } from "@material-ui/core";
import { IconButton, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import "./CreateBook.css"; // CSSファイルをインポートします
import defaultCover from "../../assets/notavailable.png";
import useStyles from "./styles";
import Modal from "./Modal";
import popupImage from "../../assets/Popup.png"; // 更新成功時の画像

const BookCard = ({ book, style }) => {
  const classes = useStyles();
  const [isManga, setIsManga] = useState(false);
  const [isEhon, setIsEhon] = useState(false);
  const [isNovel, setIsNovel] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isError, setIsError] = useState(false);
  const [result, setResult] = useState(false);

  return (
    <main className={classes.mainPage}>
      <div className={classes.toolbar} />
      {result && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            zIndex: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "24px",
            color: "#000",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <img
              src={popupImage}
              alt="Popup"
              style={{
                maxWidth: "40%",
                height: "auto",
                display: "block",
              }}
            />
            <button
              onClick={() => setResult(false)}
              style={{
                fontSize: "20px",
                padding: "15px 30px",
                borderRadius: "10px",
                cursor: "pointer",
                backgroundColor: "#4CAF50",
                color: "white",
                border: "none",
              }}
            >
              作成完了
            </button>
          </div>
        </div>
      )}
      <div
        className={`book-card ${result ? "blur" : ""}`}
        style={{ position: "relative" }}
      >
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
        <IconButton
          color="inherit"
          onClick={() => {
            if (!isManga && !isEhon && !isNovel) {
              setIsModalOpen(true);
              setIsError(true);
            } else {
              setIsModalOpen(true);
            }
          }}
        >
          <div className="clay card">
            <Typography variant="h6" color="inherit">
              <div className="add-to-cart">本を作る</div>
            </Typography>
          </div>
        </IconButton>

        <Modal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setIsError(false);
          }}
          bookId={book.bookId}
          style={isManga ? "manga" : isEhon ? "ehon" : "novel"}
          isError={isError}
          getResult={() => {
            setResult(true);
          }}
        />
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
      id: 1,
      bookId: "marriage_of_a_mouse",
      title: "ねずみの嫁入り",
      rating: "1.9",
      coverImage:
        "https://1.bp.blogspot.com/-0S46QU6KoCM/WxvKQsHCcnI/AAAAAAABMn4/QEjMZyeeJVIrGAmauqC5F887L--c8hzpACLcBGAs/s800/monogatari_momotarou_solo.png",
    },
    {
      id: 2,
      bookId: "marriage_of_a_mouse2",
      title: "ねずみの嫁入り2",
      rating: "1.9",
      coverImage:
        "https://1.bp.blogspot.com/-0S46QU6KoCM/WxvKQsHCcnI/AAAAAAABMn4/QEjMZyeeJVIrGAmauqC5F887L--c8hzpACLcBGAs/s800/monogatari_momotarou_solo.png",
    },
    {
      id: 3,
      bookId: "urashima",
      title: "うらしまたろ",
      rating: "1.9",
      coverImage: null,
    },
    {
      id: 5,
      bookId: "akazukin",
      title: "赤ずきん",
      rating: "1.9",
      coverImage: null,
    },
    {
      id: 6,
      bookId: "akazukin2",
      title: "赤ずきん2",
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
          <IconButton component={Link} to="/booklistsplit" color="inherit">
            <SearchIcon />
          </IconButton>
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
              <BookCard key={book.id} book={book} style={selected} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default CreateBook;
