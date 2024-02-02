import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useHistory,
  Redirect,
  useParams,
} from "react-router-dom";
import dummyBooks from "../../../shared/dummy_data/dummyBooks.json";
import defaultCover from "./images/notavailable.png";

const BookViewer = (props) => {
  const { selectBookViewer } = props;
  const [title, setTitle] = useState([]);
  const [images, setImages] = useState([]);
  const [textList, setTextList] = useState(["undefined"]);
  const [currentPage, setCurrentPage] = useState(0);
  const bookId = localStorage.getItem("currentBookId");
  const history = useHistory();

  useEffect(() => {
    selectBookViewer();
    const bookData = dummyBooks.find((book) => book.bookId === bookId);
    if (bookData) {
      setImages(bookData.dummyImages ? bookData.dummyImages : [defaultCover]);
      setTextList(bookData.dummyText ? bookData.dummyText : ["undefined"]);
      setTitle(bookData.title ? bookData.title : "undefined");
    } else {
      setImages([defaultCover]);
      setTextList(["undefined"]);
      setTitle("undefined");
    }
    history.replace(`/c/bookviewer/${bookId}/image/${currentPage}`);
  }, [selectBookViewer, bookId, history, currentPage]);

  const goBack = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const goForward = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, images.length - 1));
  };

  return (
    <Router basename={`/c/bookviewer/${bookId}`}>
      <div style={{ overflowY: "scroll", maxHeight: "100vh" }}>
        <h2>{title}</h2>
        <div
          style={{
            textAlign: "center",
            color: "white",
            maxHeight: "80vh",
            overflowY: "auto",
          }}
        >
          <p
            style={{
              border: "3px solid white",
              padding: "10px",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
          >
            {textList[currentPage]}
          </p>
          <img
            src={images[currentPage]}
            alt={`Page ${currentPage + 1}`}
            style={{ width: "50%", maxHeight: "50vh", objectFit: "contain" }}
          />
        </div>
        <button onClick={goBack}>戻る</button>
        <button onClick={goForward}>進む</button>
        <Redirect from="/" to={`/image/${currentPage}`} />
      </div>
    </Router>
  );
};

export default BookViewer;
