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

import dummyDataOfBooks from "./shared/dummy_data/dummyBooks.json";
import dummyDataOfUser from "./shared/dummy_data/dummyBookIdOfUser.json";

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
  const [loading, setLoading] = useState(true);

  // const [currentUser, setCurrentUser] = useState(
  //   localStorage.getItem("loggedInMailAddress")
  // );
  const [currentUser, setCurrentUser] = useState("test@test");

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
    if (!localStorage.getItem("dummyBooks")) {
      localStorage.setItem("dummyBooks", JSON.stringify(dummyDataOfBooks));
    }
    if (!localStorage.getItem("dummyBookIdOfUser")) {
      localStorage.setItem(
        "dummyBookIdOfUser",
        JSON.stringify(dummyDataOfUser)
      );
    }
    let dummyBooks = JSON.parse(localStorage.getItem("dummyBooks"));
    let dummyBookIdOfUser = JSON.parse(
      localStorage.getItem("dummyBookIdOfUser")
    );
    const bookIdList = dummyBookIdOfUser.find(
      (user) => user.id === 1
    ).bookIdList;

    const fetchProducts = async () => {
      const selectedBooks = dummyBooks.filter((book) =>
        bookIdList.includes(book.bookId)
      );
      setProducts(selectedBooks);
      console.log("Books retrieved!: ", selectedBooks);
    };
    fetchProducts();
    setTimeout(() => setLoading(false), 2000);
  }, []);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  return (
    <div>
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
                {loading ? (
                  <div
                    style={{
                      position: "fixed", // 画面中央に表示するために変更しました
                      top: "50%", // 画面中央に表示するために追加しました
                      left: "50%", // 画面中央に表示するために追加しました
                      transform: "translate(-50%, -50%)", // 画面中央に表示するために追加しました
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img src={loadingImg} alt="loading" />
                  </div>
                ) : (
                  <Products products={products} />
                )}
              </Route>
              <Route exact path="/createbook">
                {loading ? (
                  <img src={loadingImg} alt="loading" />
                ) : (
                  <CreateBook style={style} onClick={handleAllStyles} />
                )}
              </Route>
              <Route exact path="/booklist">
                {loading ? (
                  <img src={loadingImg} alt="loading" />
                ) : (
                  <BookList style={style} onClick={handleAllStyles} />
                )}
              </Route>
              <Route exact path="/erroepage">
                <ErrorPage />
              </Route>
            </Switch>
          </div>
        </Router>
        {!loading && <Footer />}
      </>
    </div>
  );
};

export default Main;
