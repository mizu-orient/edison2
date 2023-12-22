import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Avatar, Box, Typography, Badge } from "@mui/material";
import { Card, CardMedia } from "@mui/material";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

import BookDataHandler from "./BookDataHandler";

import nobooks from "./images/nobooks.png";
import defaultCover from "./images/notavailable.png";

import dummyUser from "../../../shared/dummy_data/dummyUser.json";

const BookList = (props) => {
  const { selectBookList } = props;
  const [currentUser, setCurrentUser] = useState(
    localStorage.getItem("loggedInUsername")
  );

  const [bookId, setBookId] = useState(localStorage.getItem("userBookId"));

  console.log("BookList:", currentUser);

  const dummyBooks = [
    {
      id: 1,
      name: "Momo Taro",
      sentence: "This is the first book",
      image: defaultCover,
    },
    {
      id: 2,
      name: "Kaguya Hime",
      sentence: "This is the second book",
      image: defaultCover,
    },
    {
      id: 3,
      name: "Peach Taro",
      sentence: "This is the third book",
      image: defaultCover,
    },
    {
      id: 4,
      name: "Momo Taro 2nd",
      sentence: "This is the fourth book",
      image: defaultCover,
    },
    // 他のダミーデータもここに追加
  ];

  const [books, setBooks] = useState([]);

  useEffect(() => {
    selectBookList();
    retrieveBooks();
  }, [selectBookList]);

  const retrieveBooks = () => {
    const bookIds = bookId ? bookId.split(",").map(Number) : [];
    const selectedBooks = dummyBooks.filter((book) =>
      bookIds.includes(book.id)
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

  const getRows = (books) => {
    const rows = [];
    console.log("length", books);
    books.map((book) => {
      rows.push({
        book: <Book image={defaultCover} title={book.title} />,
        available: (
          <Badge
            variant="dot"
            color={book.available ? "primary" : "secondary"}
            badgeContent={book.available ? "available" : "lent"}
          />
        ),
      });
    });
    return rows;
  };

  const removeAllBooks = () => {
    console.log("TBD:removeAllBooks");
  };

  const searchByTitle = () => {
    setCurrentBook(null);
    setCurrentIndex(-1);
    console.log("TBD:searchByTitle");
  };

  // Book コンポーネントの定義
  const Book = ({ image, title, sentence }) => {
    return (
      <Box display="flex" alignItems="center" px={10} py={1.5}>
        <Box mr={2}>
          <Avatar src={image} alt={title} variant="rounded" />
        </Box>
        <Box display="flex" flexDirection="column">
          <Typography variant="button" fontWeight="medium">
            {title}
          </Typography>
          <Typography variant="body2">{sentence}</Typography>
        </Box>
      </Box>
    );
  };

  Book.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    sentence: PropTypes.string.isRequired,
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
                  image={book.image}
                  title={book.name}
                  sentence={book.sentence}
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
