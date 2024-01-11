import React, { memo, useCallback, useState, Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import withStyles from "@mui/styles/withStyles";
import classNames from "classnames";

import NavBar from "./navigation/NavBar";
import DialogSelector from "./register_login/DialogSelector";
import Routing from "./Routing";

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
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(null);

  const openLoginDialog = useCallback(() => {
    setDialogOpen("login");
    setIsMobileDrawerOpen(false);
  }, [setDialogOpen, setIsMobileDrawerOpen]);

  const closeDialog = useCallback(() => {
    setDialogOpen(null);
  }, [setDialogOpen]);

  const openRegisterDialog = useCallback(() => {
    setDialogOpen("register");
    setIsMobileDrawerOpen(false);
  }, [setDialogOpen, setIsMobileDrawerOpen]);

  const openChangePasswordDialog = useCallback(() => {
    setDialogOpen("changePassword");
  }, [setDialogOpen]);

  const handleMobileDrawerOpen = useCallback(() => {
    setIsMobileDrawerOpen(true);
  }, [setIsMobileDrawerOpen]);

  const handleMobileDrawerClose = useCallback(() => {
    setIsMobileDrawerOpen(false);
  }, [setIsMobileDrawerOpen]);

  return (
    <Fragment>
      <div className={classes.wrapper}>
        <DialogSelector
          dialogOpen={dialogOpen}
          openLoginDialog={openLoginDialog}
          openChangePasswordDialog={openChangePasswordDialog}
          onClose={closeDialog}
        />
        <NavBar
          selectedTab={selectedTab}
          selectTab={setSelectedTab}
          openLoginDialog={openLoginDialog}
          mobileDrawerOpen={isMobileDrawerOpen}
          handleMobileDrawerOpen={handleMobileDrawerOpen}
          handleMobileDrawerClose={handleMobileDrawerClose}
        />
        <main className={classNames(classes.main)}>
          <Routing />
        </main>
      </div>
    </Fragment>
  );
};

export default withStyles(styles, { withTheme: true })(memo(Main));
