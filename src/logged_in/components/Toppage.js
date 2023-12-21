import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { Switch, Route } from "react-router-dom";

const Toppage = (props) => {
  const { selectToppage } = props;
  useEffect(() => {
    selectToppage();
  }, [selectToppage]);

  return <div>Toppage</div>;
};

export default Toppage;
