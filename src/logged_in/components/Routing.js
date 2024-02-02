import React, { memo } from "react";
import PropTypes from "prop-types";
import { Switch, Route } from "react-router-dom";
import withStyles from "@mui/styles/withStyles";

import PropsRoute from "../../shared/components/PropsRoute";
import useLocationBlocker from "../../shared/functions/useLocationBlocker";

import Toppage from "./Toppage";
import BookList from "./books/BookList";
import BookViewer from "./books/BookViewer";
import CreateBook from "./books/CreateBook";

const styles = (theme) => ({
  wrapper: {
    margin: theme.spacing(1),
    width: "auto",
    [theme.breakpoints.up("xs")]: {
      width: "95%",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
    },
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      width: "90%",
      marginLeft: "auto",
      marginRight: "auto",
    },
    [theme.breakpoints.up("md")]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      width: "82.5%",
      marginLeft: "auto",
      marginRight: "auto",
    },
    [theme.breakpoints.up("lg")]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      width: "70%",
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
});

function Routing(props) {
  const {
    classes,
    selectToppage,
    selectBookList,
    selectBookViewer,
    selectCreateBook,
    bookId,
  } = props;
  useLocationBlocker();
  return (
    <div className={classes.wrapper}>
      <Switch>
        <PropsRoute
          path="/c/toppage"
          component={Toppage}
          selectToppage={selectToppage}
        />
        <PropsRoute
          path="/c/booklist"
          component={BookList}
          selectBookList={selectBookList}
        />
        <PropsRoute
          path="/c/bookviewer/*"
          component={BookViewer}
          selectBookViewer={selectBookViewer}
          bookId={bookId}
        />
        <PropsRoute
          path="/c/createbook"
          component={CreateBook}
          selectCreateBook={selectCreateBook}
        />
      </Switch>
    </div>
  );
}

Routing.propTypes = {
  classes: PropTypes.object.isRequired,
  selectToppage: PropTypes.func.isRequired,
  selectBookList: PropTypes.func.isRequired,
  selectBookViewer: PropTypes.func.isRequired,
  selectCreateBook: PropTypes.func.isRequired,
};

export default withStyles(styles, { withTheme: true })(memo(Routing));
