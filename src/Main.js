import React, { useState, useEffect } from "react";
import { CssBaseline } from "@material-ui/core";

import Products from "./components/Products/Products";
import BookList from "./components/Products/BookList";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import loadingImg from "./assets/loading.gif";
import "./style.css";
import CreateBook from "./components/CreateBook/CreateBook";
import ErrorPage from "./ErrorPage";

import dummyBooks from "./shared/dummy_data/dummyBooks.json";
import dummyBookIdOfUser from "./shared/dummy_data/dummyBookIdOfUser.json";

const Main = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [products, setProducts] = useState([]);
  const [mangaProducts, setMangaProducts] = useState([]);
  const [fictionProducts, setFictionProducts] = useState([]);
  const [bioProducts, setBioProducts] = useState([]);
  const [featureProducts, setFeatureProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const [style, setStyle] = useState("");

  // const [currentUser, setCurrentUser] = useState(
  //   localStorage.getItem("loggedInMailAddress")
  // );
  const [currentUser, setCurrentUser] = useState("test@test");
  const bookIdList = dummyBookIdOfUser.find(
    (user) => user.id === Number(localStorage.getItem("currentId"))
  ).bookIdList;

  const fetchProducts = async () => {
    const selectedBooks = dummyBooks.filter((book) =>
      bookIdList.includes(book.bookId)
    );
    setProducts(selectedBooks);
    console.log("Books retrieved!: ", selectedBooks);
  };

  const handleAllStyles = () => {
    setStyle("all");
  };
  const handleManga = () => {
    setStyle("manga");
  };
  const handleEhon = () => {
    setStyle("ehon");
  };
  const handleNovel = () => {
    setStyle("novel");
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  return (
    <div>
      {products.length > 0 ? (
        <>
          <Router>
            <div style={{ display: "flex" }}>
              <CssBaseline />
              <Navbar
                totalItems={cart.total_items}
                handleDrawerToggle={handleDrawerToggle}
              />
              <Switch>
                <Route exact path="/">
                  <Products products={products} />
                </Route>
                <Route exact path="/createbook">
                  <CreateBook style={style} onClick={handleAllStyles} />
                </Route>
                <Route exact path="/booklist">
                  <BookList style={style} onClick={handleAllStyles} />
                </Route>
                <Route exact path="/erroepage">
                  <ErrorPage />
                </Route>
              </Switch>
            </div>
          </Router>
          <Footer />
        </>
      ) : (
        <div className="loader">
          <img src={loadingImg} alt="Loading" />
        </div>
      )}
    </div>
  );
};

export default Main;
