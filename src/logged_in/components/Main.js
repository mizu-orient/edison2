import React, { memo, useCallback, useEffect, useState, Fragment } from "react";
import withStyles from "@mui/styles/withStyles";
import classNames from "classnames";
import PropTypes from "prop-types";

import Routing from "./Routing";
import NavBar from "./navigation/NavBar";

import dummyUsers from "../../shared/dummy_data/dummyUsers.json";

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

  const user = dummyUsers.users.find(
    (user) => user.mailAddress === localStorage.getItem("loggedInMailAddress")
  );

  useEffect(() => {
    setUserData();
  }, []);

  const setUserData = () => {
    localStorage.setItem("currentMailAddress", user.mailAddress);
    localStorage.setItem("currentUsername", user.username);
    localStorage.setItem("currentId", user.id);
  };

  const selectToppage = useCallback(() => {
    document.title = "Toppage";
    setSelectedTab("Topppage");
  }, [setSelectedTab]);

  const selectBookList = useCallback(() => {
    document.title = "BookList";
    setSelectedTab("BookList");
  }, [setSelectedTab]);

  const selectBookViewer = useCallback(() => {
    document.title = "BookViewer";
    setSelectedTab("BookList");
  }, [setSelectedTab]);

  const selectCreateBook = useCallback(() => {
    document.title = "CreateBook";
    setSelectedTab("CreateBook");
  }, [setSelectedTab]);

  let bookId = 0;

  return (
    <Fragment>
      <NavBar selectedTab={selectedTab} />
      <main className={classNames(classes.main)}>
        <Routing
          selectToppage={selectToppage}
          selectBookList={selectBookList}
          selectBookViewer={selectBookViewer}
          selectCreateBook={selectCreateBook}
          bookId={bookId}
        />
      </main>
    </Fragment>
  );
};

Main.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(memo(Main));
