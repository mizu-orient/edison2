import React, { memo, useCallback, useEffect, useState, Fragment } from "react";
import withStyles from "@mui/styles/withStyles";
import classNames from "classnames";
import PropTypes from "prop-types";

import Routing from "./Routing";
import NavBar from "./navigation/NavBar";

const styles = (theme) => ({
  main: {
    marginLeft: theme.spacing(9),
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
    },
  },
});

const Main = (props) => {
  const { classes } = props;
  const [selectedTab, setSelectedTab] = useState("");

  // TBD:本の取得確認
  const [hasFetchBooks, setHasFetchBooks] = useState(false);

  const selectToppage = useCallback(() => {
    document.title = "Toppage";
    setSelectedTab("Topppage");
  }, [setSelectedTab]);

  const selectBookList = useCallback(() => {
    document.title = "BookList";
    setSelectedTab("BookList");
  }, [setSelectedTab]);

  const selectCreateBook = useCallback(() => {
    document.title = "CreateBook";
    setSelectedTab("CreateBook");
  }, [setSelectedTab]);

  return (
    <Fragment>
      <NavBar selectedTab={selectedTab} />
      <main className={classNames(classes.main)}>
        <Routing
          selectToppage={selectToppage}
          selectBookList={selectBookList}
          selectCreateBook={selectCreateBook}
        />
      </main>
    </Fragment>
  );
};

Main.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(memo(Main));
