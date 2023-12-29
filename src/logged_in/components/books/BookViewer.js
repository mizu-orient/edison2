import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

// interface State {
//   selectBookList: () => void;
//   id: number;
// }

const BookViewer = (props) => {
  const { selectBookList } = props;
  const location = useLocation();
  const { id } = location.state?.id;

  useEffect(() => {
    selectBookList();
    retrieveBookImages();
  }, [selectBookList]);

  const retrieveBookImages = () => {
    console.log(`BookViewer:${id}`);
  };

  return <div>BookViewer</div>;
};

export default BookViewer;
