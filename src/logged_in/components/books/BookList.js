import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Avatar, Box, Typography, Badge } from "@mui/material";
import { Card, CardMedia } from "@mui/material";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

import BookDataHandler from "./BookDataHandler";

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

  // Book コンポーネントの定義
  const Book = ({ bookId, coverImage, title, description }) => {
    return (
      <Link
        to={`/c/bookviewer/${bookId}`}
        style={{ textDecoration: "none" }}
        onClick={() => redirectToBook(bookId)}
      >
        <Box display="flex" alignItems="center" px={10} py={1.5}>
          <Box mr={2}>
            <Avatar src={coverImage} alt={title} variant="rounded" />
          </Box>
          <Box display="flex" flexDirection="column">
            <Typography variant="button" fontWeight="medium">
              {title}
            </Typography>
            <Typography variant="body2">{description}</Typography>
          </Box>
        </Box>
      </Link>
    );
  };

  Book.propTypes = {
    coverImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  };

  return (
    <>
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
                  title={book.name}
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
