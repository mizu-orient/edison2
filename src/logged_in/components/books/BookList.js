import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Avatar, Box, Typography, Badge } from "@mui/material";
import { Card, CardMedia } from "@mui/material";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

import BookDataHandler from "./BookDataHandler";

import nobooks from "./images/nobooks.png";
import cover from "./images/notavailable.png";

const BookList = (props) => {
  const { selectBookList } = props;

  const dummyBooks = [
    { name: "Book 1", sentence: "This is the first book", image: cover },
    { name: "Book 2", sentence: "This is the second book", image: cover },
    // 他のダミーデータもここに追加
  ];

  const [books, setBooks] = useState(dummyBooks); // ダミーデータを初期状態として設定

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

  useEffect(() => {
    selectBookList();
    retrieveBooks();
  }, [selectBookList]);

  const getRows = (books) => {
    const rows = [];
    console.log("length", books);
    books.map((book) => {
      rows.push({
        book: <Book image={cover} title={book.title} />,
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

  const retrieveBooks = () => {
    // BookDataHandler.getAll()
    //   .then((response) => {
    //     console.log(response.data);
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });
    console.log("Books retrieved: ", books);
  };

  const removeAllBooks = () => {
    // BookDataHandler.deleteAll()
    //   .then((response) => {
    //     console.log(response.data);
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });
    console.log("TBD");
  };

  const searchByTitle = () => {
    // setCurrentBook(null);
    // setCurrentIndex(-1);

    // BookDataHandler.findByTitle(this.state.searchTitle)
    //   .then((response) => {
    //     console.log(response.data);
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });
    console.log("TBD");
  };

  // Book コンポーネントの定義
  const Book = ({ image, title, sentence }) => {
    return (
      <Box display="flex" alignItems="center" px={1} py={0.5}>
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
                <Typography variant="h6">Book table</Typography>
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
