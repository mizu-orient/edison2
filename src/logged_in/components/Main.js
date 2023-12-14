import React, { memo, useCallback, useEffect, useState, Fragment } from "react";
import withStyles from "@mui/styles/withStyles";
import classNames from "classnames";

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
  const [selectedTab, setSelectedTab] = useState(null);
  const [isAccountActivated, setIsAccountActivated] = useState(false);
  const [ImageCropper, setImageCropper] = useState(null);
  const [EmojiTextArea, setEmojiTextArea] = useState(null);
  const [Dropzone, setDropzone] = useState(null);
  const [DateTimePicker, setDateTimePicker] = useState(null);
  const [pushMessageToSnackbar, setPushMessageToSnackbar] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [statistics, setStatistics] = useState({ views: [], profit: [] });
  const [posts, setPosts] = useState([]);
  const [targets, setTargets] = useState([]);

  const toggleAccountActivation = useCallback(() => {
    if (pushMessageToSnackbar) {
      if (isAccountActivated) {
        pushMessageToSnackbar({
          text: "Your account is now deactivated.",
        });
      } else {
        pushMessageToSnackbar({
          text: "Your account is now activated.",
        });
      }
    }
    setIsAccountActivated(!isAccountActivated);
  }, [pushMessageToSnackbar, isAccountActivated, setIsAccountActivated]);

  return (
    <Fragment>
      <NavBar selectedTab={selectedTab} />
      <main className={classNames(classes.main)}>
        <Routing
          isAccountActivated={isAccountActivated}
          ImageCropper={ImageCropper}
          EmojiTextArea={EmojiTextArea}
          Dropzone={Dropzone}
          DateTimePicker={DateTimePicker}
          toggleAccountActivation={toggleAccountActivation}
          pushMessageToSnackbar={pushMessageToSnackbar}
          transactions={transactions}
          statistics={statistics}
          posts={posts}
          targets={targets}
          setTargets={setTargets}
          setPosts={setPosts}
        />
      </main>
    </Fragment>
  );
};

export default withStyles(styles, { withTheme: true })(memo(Main));
