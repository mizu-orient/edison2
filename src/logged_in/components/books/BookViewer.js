import React, { Fragment, useEffect } from "react";
import dummyBooks from "../../../shared/dummy_data/dummyBooks.json";

const BookViewer = (props) => {
  const { selectBookViewer } = props;
  const bookId = localStorage.getItem("currentBookId");
  const bookData = dummyBooks.find((book) => book.bookId === parseInt(bookId));
  const dummyImages = bookData ? bookData.dummyImages : [];

  useEffect(() => {
    selectBookViewer();
  }, [selectBookViewer]);

  console.log("DM", dummyImages);

  return (
    <div>
      <h2>BookViewer : {bookId}</h2>
      {dummyImages &&
        dummyImages.map((image, index) => (
          <img key={index} src={image} alt={`book image ${index}`} />
        ))}
    </div>
  );
};

export default BookViewer;
