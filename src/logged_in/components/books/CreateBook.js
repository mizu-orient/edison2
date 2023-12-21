import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { Switch, Route } from "react-router-dom";

const CreateBook = (props) => {
  const { selectCreateBook } = props;

  useEffect(() => {
    selectCreateBook();
  }, [selectCreateBook]);

  return <div>CreateBook</div>;
};

export default CreateBook;
