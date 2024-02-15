import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Avatar, Box, Typography, Badge } from "@mui/material";
import { Button } from "@mui/material";
import { Card, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";

import BookDataHandler from "./BookDataHandler";
import Header from "../Header";
import Book from "./Book";

import nobooks from "./images/nobooks.png";
import defaultCover from "./images/notavailable.png";

/* TBD */
import dummyBooks from "../../../shared/dummy_data/dummyBooks.json";
import dummyBookIdOfUser from "../../../shared/dummy_data/dummyBookIdOfUser.json";

const BookList = (props) => {
  const { selectBookList } = props;
  const [currentUser, setCurrentUser] = useState(
    localStorage.getItem("loggedInMailAddress")
  );
  const [books, setBooks] = useState([]);

  /* TBD */
  const bookIdList = dummyBookIdOfUser.find(
    (user) => user.id === Number(localStorage.getItem("currentId"))
  ).bookIdList;

  useEffect(() => {
    selectBookList();
    retrieveBooks();
  }, [selectBookList]);

  const retrieveBooks = () => {
    const selectedBooks = dummyBooks.filter((book) =>
      bookIdList.includes(book.bookId)
    );
    setBooks(selectedBooks);
    console.log("Books retrieved!: ", selectedBooks);
  };

  const columns = [
    { name: "book", align: "left" },
    { name: "description", align: "left" },
    { name: "available", align: "center" },
    { name: "action", align: "center" },
  ];

  const [rows, setRows] = useState([]);
  const [currentBook, setCurrentBook] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchTitle, setSearchTitle] = useState("");

  const removeAllBooks = () => {
    console.log("TBD:removeAllBooks");
  };

  const searchByTitle = () => {
    setCurrentBook(null);
    setCurrentIndex(-1);
    console.log("TBD:searchByTitle");
  };

  const redirectToBook = (bookId) => {
    console.log("Redirect to ", bookId);
    localStorage.setItem("currentBookId", bookId ? bookId : 0);
  };

  const NoBook = () => {
    return (
      <>
        <div className="div">
          <div className="div-2">
            <div className="column">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d42b6853142924041a7a5b8c59291197562dd5de71d3ac86fc7f01b67f9c8a34?apiKey=12a7be855aa34cb198eafabbae79d58a&"
                className="img"
              />
            </div>
            <div className="column-2">
              <div className="div-3">Nothing was found :\</div>
            </div>
          </div>
        </div>
        <style jsx>{`
          .div {
            max-width: 531px;
            padding: 0 20px;
          }
          .div-2 {
            gap: 20px;
            display: flex;
          }
          @media (max-width: 991px) {
            .div-2 {
              flex-direction: column;
              align-items: stretch;
              gap: 0px;
            }
          }
          .column {
            display: flex;
            flex-direction: column;
            line-height: normal;
            width: 31%;
            margin-left: 0px;
          }
          @media (max-width: 991px) {
            .column {
              width: 100%;
            }
          }
          .img {
            aspect-ratio: 1.18;
            object-fit: auto;
            object-position: center;
            width: 149px;
            max-width: 100%;
            flex-grow: 1;
          }
          @media (max-width: 991px) {
            .img {
              margin-top: 40px;
            }
          }
          .column-2 {
            display: flex;
            flex-direction: column;
            line-height: normal;
            width: 69%;
            margin-left: 20px;
          }
          @media (max-width: 991px) {
            .column-2 {
              width: 100%;
            }
          }
          .div-3 {
            color: var(--orange-500, #f9784b);
            text-align: center;
            white-space: nowrap;
            align-self: stretch;
            margin: auto 0;
            font: 400 36px Syne, sans-serif;
          }
          @media (max-width: 991px) {
            .div-3 {
              margin-top: 40px;
              white-space: initial;
            }
          }
        `}</style>
      </>
    );
  };

  return (
    <>
      <Header />
      {books.length > 0 ? (
        <Box py={3}>
          <Box>
            <Card>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                p={3}
              >
                <Typography variant="h6">{currentUser}'s Books</Typography>
              </Box>
              {books.map((book, index) => (
                <Book
                  key={index}
                  bookId={book.bookId}
                  coverImage={book.coverImage ? book.coverImage : defaultCover}
                  title={book.title}
                  description={book.description}
                />
              ))}
            </Card>
          </Box>
        </Box>
      ) : (
        <Card>
          <Box display="flex" justifyContent="center">
            <CardMedia
              src={nobooks}
              component="img"
              title="No books"
              sx={{ maxWidth: "30%" }}
            />
          </Box>
        </Card>
      )}
      <Box display="flex" justifyContent="center" mt={3} mb={8}>
        <Link to={"/c/createbook"}>
          <Button color="info" size="medium">
            Create Your Book
          </Button>
        </Link>
        {books.length > 0 ? (
          <Button color="error" size="medium" onClick={removeAllBooks}>
            Remove All Book
          </Button>
        ) : (
          ""
        )}
      </Box>
    </>
  );
};

BookList.propTypes = {
  selectBookList: PropTypes.func.isRequired,
};

export default BookList;
