import React, { useState, useRef } from "react";
import { Grid, InputAdornment, Input } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import Product from "./Product/Product.js";
import useStyles from "./styles";
import logo1 from "../../assets/dogLogo.png";
import scrollImg from "../../assets/scroll.gif";
import "../ProductView/style.css";
import { Link } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import mangaBg from "../../assets/comicDog.png";
import bioBg from "../../assets/ehon.png";
import fictionBg from "../../assets/fiction.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import defaultCover from "../../assets/notavailable.png";

const Products = ({ products, onAddToCart, featureProducts }) => {
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
        <img className={classes.heroImg} src={logo1} height="720px" />

        <div className={classes.heroCont}>
          <h1 className={classes.heroHeader}>わたしよめるモン</h1>
          <h3 className={classes.heroDesc} ref={sectionRef}>
            好きな本を探してね
          </h3>
          <div className={classes.searchs}>
            <Input
              className={classes.searchb}
              type="text"
              placeholder="Which book are you looking for?"
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
          <h1 className={classes.categoryHeader}>本を読む？</h1>
          <h3 className={classes.categoryDesc}>カテゴリーを選択</h3>
          <div className={classes.buttonSection}>
            <div>
              <Link to="manga">
                <button
                  className={classes.categoryButton}
                  style={{ backgroundImage: `url(${mangaBg})` }}
                ></button>
              </Link>
              <div className={classes.categoryName}>漫画</div>
            </div>
            <div>
              <Link to="biography">
                <button
                  className={classes.categoryButton}
                  style={{ backgroundImage: `url(${bioBg})` }}
                ></button>
              </Link>
              <div className={classes.categoryName}>絵本</div>
            </div>
            <div>
              <Link to="fiction">
                <button
                  className={classes.categoryButton}
                  style={{ backgroundImage: `url(${fictionBg})` }}
                ></button>
              </Link>
              <div className={classes.categoryName}>小説</div>
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
            <Link to="manga">
              <button
                className={classes.categoryButton}
                style={{ backgroundImage: `url(${mangaBg})` }}
              ></button>
            </Link>
            <div className={classes.categoryName}>漫画</div>
          </div>
          <div>
            <Link to="biography">
              <button
                className={classes.categoryButton}
                style={{ backgroundImage: `url(${bioBg})` }}
              ></button>
            </Link>
            <div className={classes.categoryName}>絵本</div>
          </div>
          <div>
            <Link to="fiction">
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
              Get Your <span style={{ color: "#f1361d" }}>Books</span>
            </h1>
            <h3 className={classes.booksDesc}>あなた自身の本を作ってみよう</h3>
          </>
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
          spacing={2}
        >
          {products.slice(0, 3).map((product, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  style={{ height: 0, paddingTop: "56.25%" }}
                  image={product.coverImage ? product.coverImage : defaultCover}
                  title={product.title}
                />
                <CardContent>
                  <Typography variant="h5" component="h2">
                    {product.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    スタイル: {product.style}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>

      {searchTerm === "" && (
        <>
          <div>
            <h3 className={classes.contentHeader}>
              Popular <span style={{ color: "#f1361d" }}>Books</span>
            </h3>
            <Grid
              className={classes.contentFeatured}
              container
              justify="center"
              spacing={1}
            >
              {products.slice(0, 3).map((product, index) => (
                <Grid item key={index} xs={12} sm={6} md={4}>
                  <Card>
                    <CardMedia
                      style={{ height: 0, paddingTop: "56.25%" }}
                      image={
                        product.coverImage ? product.coverImage : defaultCover
                      }
                      title={product.title}
                    />
                    <CardContent>
                      <Typography variant="h5" component="h2">
                        {product.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        Style: {product.style}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </div>
        </>
      )}
    </main>
  );
};

export default Products;