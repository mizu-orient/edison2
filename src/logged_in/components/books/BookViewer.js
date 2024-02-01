import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import dummyBooks from "../../../shared/dummy_data/dummyBooks.json";
import defaultCover from "./images/notavailable.png";

const BookViewer = (props) => {
  const { selectBookViewer } = props;
  const [title, setTitle] = useState([]);
  const [images, setImages] = useState([]);
  const bookId = localStorage.getItem("currentBookId");
  const history = useHistory();

  useEffect(() => {
    selectBookViewer();
    const bookData = dummyBooks.find(
      (book) => book.bookId === parseInt(bookId)
    );
    setImages(bookData ? bookData.dummyImages : defaultCover);
    setTitle(bookData.title);
  }, [selectBookViewer, bookId]);

  const goBack = () => {
    history.goBack();
  };

  const goForward = () => {
    const currentPage = history.location.pathname.split("/")[2];
    if (currentPage < images.length - 1) {
      history.push(`/image/${parseInt(currentPage) + 1}`);
    }
  };

  return (
    <Router>
      <div>
        <h2>{title}</h2>
        {images.map((image, index) => (
          <div key={index}>
            <Link to={`/image/${index}`}>Page{index + 1}</Link>
          </div>
        ))}
        <button onClick={goBack}>戻る</button>
        <button onClick={goForward}>進む</button>
        <Route
          path="/image/:id"
          render={(props) => <ImagePage {...props} images={images} />}
        />
      </div>
    </Router>
  );
};

const ImagePage = (props) => {
  const { id } = props.match.params;
  const { images } = props;
  const image = images[parseInt(id)];

  return (
    <div>
      <img src={image ? image : defaultCover} alt="Book image" />
    </div>
  );
};

export default BookViewer;
