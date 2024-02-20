import React, { useState, useRef } from "react";
import { Grid, InputAdornment, Input } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import useStyles from "./styles";
import scrollImg from "../../assets/scroll.gif";
import "../ProductView/style.css";
import { Link } from "react-router-dom";
import mangaBg from "../../assets/comicDog.png";
import bioBg from "../../assets/ehon.png";
import fictionBg from "../../assets/fiction.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import defaultCover from "../../assets/notavailable.png";
import profileImage from "../../assets/Profile.png";
import PopularBooks from "./PopularBooks";

const Products = ({ products }) => {
  const classes = useStyles();

  const [searchTerm, setSearchTerm] = useState("");

  const sectionRef = useRef(null);

  const handleInputClick = () => {
    // Scrolls to the section when the input is clicked
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className={classes.mainPage}>
      <div className={classes.toolbar} />
      <img src={scrollImg} className={classes.scrollImg} />
      <div className={classes.hero}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            className={classes.heroImg}
            src={profileImage}
            style={{ width: "60%", height: "auto" }}
          />
        </div>
        <div className={classes.heroCont}>
          <h1 className={classes.heroHeader}></h1>
          <h3 className={classes.heroDesc} ref={sectionRef}></h3>
          <div className={classes.searchs}>
            <Input
              className={classes.searchb}
              type="text"
              placeholder="好きな本を探してね"
              onClick={handleInputClick}
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              }
            />
          </div>
        </div>
      </div>

      {searchTerm === "" && (
        <div className={classes.categorySection}>
          <>
            <h3 className={classes.contentHeader}>
              Read Your <span style={{ color: "#f1361d" }}>Books</span>
            </h3>
            <h3 className={classes.booksDesc} style={{ color: "#FFF" }}>
              あなた自身の本を作ってみよう
            </h3>
          </>
          <div className={classes.buttonSection}>
            <div>
              <Link to={{ pathname: "booklist", state: { style: "manga" } }}>
                <button
                  className={classes.categoryButton}
                  style={{ backgroundImage: `url(${mangaBg})` }}
                ></button>
              </Link>
              <div className={classes.categoryName} style={{ color: "#FFF" }}>
                漫画
              </div>
            </div>
            <div>
              <Link to={{ pathname: "booklist", state: { style: "ehon" } }}>
                <button
                  className={classes.categoryButton}
                  style={{ backgroundImage: `url(${bioBg})` }}
                ></button>
              </Link>
              <div className={classes.categoryName} style={{ color: "#FFF" }}>
                絵本
              </div>
            </div>
            <div>
              <Link to={{ pathname: "booklist", state: { style: "novel" } }}>
                <button
                  className={classes.categoryButton}
                  style={{ backgroundImage: `url(${fictionBg})` }}
                ></button>
              </Link>
              <div className={classes.categoryName} style={{ color: "#FFF" }}>
                小説
              </div>
            </div>
          </div>
        </div>
      )}

      <div className={classes.carouselSection}>
        <Carousel
          showIndicators={false}
          autoPlay={true}
          infiniteLoop={true}
          showArrows={true}
          showStatus={false}
        >
          <div>
            <Link to="booklist">
              <button
                className={classes.categoryButton}
                style={{ backgroundImage: `url(${mangaBg})` }}
              ></button>
            </Link>
            <div className={classes.categoryName}>漫画</div>
          </div>
          <div>
            <Link to="booklist">
              <button
                className={classes.categoryButton}
                style={{ backgroundImage: `url(${bioBg})` }}
              ></button>
            </Link>
            <div className={classes.categoryName}>絵本</div>
          </div>
          <div>
            <Link to="booklist">
              <button
                className={classes.categoryButton}
                style={{ backgroundImage: `url(${fictionBg})` }}
              ></button>
            </Link>
            <div className={classes.categoryName}>小説</div>
          </div>
        </Carousel>
      </div>

      <div>
        {searchTerm === "" && (
          <>
            <h1 className={classes.booksHeader}>
              Popular <span style={{ color: "#f1361d" }}>Books</span>
            </h1>
            <h3 className={classes.booksDesc}>あなた自身の本を作ってみよう</h3>
          </>
        )}
        {searchTerm !== "" && (
          <h1 className={classes.booksHeader}>Search Result</h1>
        )}
        <div className={classes.mobileSearch}>
          <div className={classes.mobSearchs}>
            <Input
              className={classes.mobSearchb}
              type="text"
              placeholder="Search for books"
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              }
            />
          </div>
        </div>
        <Grid
          className={classes.content}
          container
          justify="center"
          spacing={1} // spacingの値を2から1に変更しました
        >
          <Grid
            className={classes.contentFeatured}
            container
            justify="center"
            spacing={1} // spacingの値を2から1に変更しました
            style={{ backgroundColor: "inherit" }}
          >
            <PopularBooks style={"all"} root={true} />
          </Grid>
        </Grid>
      </div>
    </main>
  );
};

export default Products;
