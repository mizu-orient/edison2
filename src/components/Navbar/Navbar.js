import React, { useState, useCallback } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Typography,
} from "@material-ui/core";
import LogoutIcon from "@mui/icons-material/Logout";
import { Menu as MenuIcon } from "@material-ui/icons";
import { Link } from "react-router-dom";
import logo from "../../assets/dogLogo.png";
import useStyles from "./styles";
import "./Navbar.css";
import Sidebar from "../Sidebar/Sidebar";

const Navbar = ({ totalItems }) => {
  const classes = useStyles();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isSideDrawerOpen, setIsSideDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    console.log("DrawerToggleがクリックされました。");
  };

  const openDrawer = useCallback(() => {
    setIsSideDrawerOpen(true);
  }, [setIsSideDrawerOpen]);

  const closeDrawer = useCallback(() => {
    setIsSideDrawerOpen(false);
  }, [setIsSideDrawerOpen]);

  return (
    <div>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Sidebar />
          <Typography
            component={Link}
            to="/"
            variant="h5"
            className={`${classes.title} image-only`} // image-onlyクラスを追加
            color="inherit"
            style={{ marginLeft: "250px" }}
          >
            <img
              src={logo}
              alt="Book Store App"
              height="50px"
              className={classes.image}
            />
            <div className="hide-on-small">わたしよめるモンβ</div>{" "}
            {/* hide-on-smallクラスを追加 */}
          </Typography>
          <div style={{ marginLeft: "auto" }} className="hide-on-small">
            {" "}
            {/* このdiv全体を小さい画面で非表示にする */}
            <IconButton component={Link} to="/createbook" color="inherit">
              <Typography variant="h6" color="inherit">
                本を作る
              </Typography>
            </IconButton>
            <IconButton component={Link} to="/booklist" color="inherit">
              <Typography variant="h6" color="inherit">
                本を読む
              </Typography>
            </IconButton>
          </div>

          <div className={classes.grow} />
          <div className={classes.button}>
            <IconButton
              aria-label="Show cart items"
              color="inherit"
              component={Link}
              to="/"
            >
              <Badge badgeContent={totalItems} color="secondary">
                <LogoutIcon />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
