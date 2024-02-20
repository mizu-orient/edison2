import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import useStyles from "./styles";

function ReadBook() {
  const history = useHistory();
  const location = useLocation();

  const [leftIndex, setLeftIndex] = useState(0);
  const classes = useStyles();
  const [book, setBook] = useState(
    JSON.parse(localStorage.getItem("currentBook"))
  );
  useEffect(() => {
    setBook(JSON.parse(localStorage.getItem("currentBook")));
    if (location.state && location.state.state !== undefined) {
      setLeftIndex(location.state.state);
    }
  }, [location]);

  return (
    <>
      <main className={classes.mainPage}>
        <div className={classes.toolbar} />
        <div className="div" style={{ margin: "20px" }}>
          <div className="div-2">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/cdf8e564c486c2f2db1b716abb4687cf536e1dbb0f10482ff9288e18346b53ed?apiKey=12a7be855aa34cb198eafabbae79d58a&"
              className="img"
            />
            <div className="div-3">{book.title}</div>
            <div className="div-4">
              <div className="div-5">Karin</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/48e4a283f1e520bb059713f3ed40a0da5adc6ce98fc48083c5dcd305dbe91f4e?apiKey=12a7be855aa34cb198eafabbae79d58a&"
                className="img-2"
              />
            </div>
          </div>
          <div
            className="div-6"
            style={{ display: "flex", justifyContent: "space-around" }}
          >
            <div
              className="div-7"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                flex: "1",
                margin: "20px",
                width: "50%", // 大きさを同じにするために追加
              }}
            >
              <div className="imagebox">
                <img
                  src={book.dummyImages[leftIndex]}
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </div>
              <div className="textbox">
                {" "}
                {book.dummyText[leftIndex] &&
                  book.dummyText[leftIndex].split("\n").map((item, key) => {
                    return (
                      <span key={key}>
                        {item}
                        <br />
                      </span>
                    );
                  })}
              </div>
            </div>
            <div
              className="div-11"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                flex: "1",
                margin: "20px",
                width: "50%", // 大きさを同じにするために追加
              }}
            >
              <div className="imagebox">
                <img
                  src={book.dummyImages[leftIndex + 1]}
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </div>
              <div className="textbox">
                {book.dummyText[leftIndex + 1] &&
                  book.dummyText[leftIndex + 1].split("\n").map((item, key) => {
                    return (
                      <span key={key}>
                        {item}
                        <br />
                      </span>
                    );
                  })}
              </div>
            </div>
          </div>
          <div className="div-14">
            <button
              onClick={() =>
                history.push("/readbook", { state: Math.max(0, leftIndex - 2) })
              }
              className="read-book-button"
            >
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5063751f0590d744e7df5db8dd7929be169d07fceaa9a3db84daef7c23f26cc2?apiKey=12a7be855aa34cb198eafabbae79d58a&"
                className="img-3"
              />
            </button>
            <div className="div-15">{leftIndex + 1}/10</div>
            {leftIndex < 11 && (
              <button
                onClick={() =>
                  history.push("/readbook", {
                    state: Math.min(leftIndex + 2, 10),
                  })
                }
                className="read-book-button"
              >
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/741408f3a3d0f2d6fc0faeb68ed52a9101688d94ea518c23cd833602dc55945e?apiKey=12a7be855aa34cb198eafabbae79d58a&"
                  className="img-4"
                />
              </button>
            )}
          </div>
        </div>
        <style jsx>{`
          .div {
            border-radius: 2px;
            border: 1px solid rgba(0, 0, 0, 0.1);
            background-color: #e6ffc0;
            display: flex;
            padding-bottom: 9px;
            flex-direction: column;
            align-items: center;
            color: #000;
            font-weight: 400;
            white-space: nowrap;
          }
          @media (max-width: 991px) {
            .div {
              white-space: initial;
            }
          }
          .div-2 {
            background-color: #ffffb3;
            align-self: stretch;
            display: flex;
            width: 100%;
            justify-content: space-between;
            gap: 20px;
            padding: 10px 25px;
          }
          @media (max-width: 991px) {
            .div-2 {
              max-width: 100%;
              flex-wrap: wrap;
              white-space: initial;
              padding: 0 20px;
            }
          }
          .img {
            aspect-ratio: 1;
            object-fit: auto;
            object-position: center;
            width: 39px;
            align-self: start;
          }
          .div-3 {
            flex-grow: 1;
            flex-basis: auto;
            margin: auto 0;
            font: 16px Inter, sans-serif;
          }
          .div-4 {
            display: flex;
            justify-content: space-between;
            gap: 20px;
            font-size: 12px;
          }
          @media (max-width: 991px) {
            .div-4 {
              white-space: initial;
            }
          }
          .div-5 {
            font-family: Inter, sans-serif;
            margin: auto 0;
          }
          .img-2 {
            aspect-ratio: 1.08;
            object-fit: auto;
            object-position: center;
            width: 56px;
          }
          .div-6 {
            display: flex;
            margin-top: 5px;
            width: 100%;
            max-width: 947px;
            align-items: center;
            justify-content: space-between;
            gap: 20px;
            font-size: 16px;
            padding: 0 20px;
          }
          @media (max-width: 991px) {
            .div-6 {
              max-width: 100%;
              flex-wrap: wrap;
              white-space: initial;
            }
          }
          .div-7 {
            border-radius: 10px;
            box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
            background-color: #ffd9b3;
            align-self: stretch;
            display: flex;
            flex-grow: 1;
            flex-basis: 0%;
            flex-direction: column;
            margin: auto 0;
            padding: 50px 17px 14px;
          }
          @media (max-width: 991px) {
            .div-7 {
              max-width: 100%;
              white-space: initial;
            }
          }
          .imagebox {
            font-family: Inter, sans-serif;
            align-self: start;
            margin: 30px;
          }
          @media (max-width: 991px) {
            .imagebox {
              margin: 10px;
            }
          }
          .textbox {
            font-family: Inter, sans-serif;
            border-radius: 10px;
            background-color: rgba(255, 255, 179, 0.25);
            margin-top: 110px;
            justify-content: center;
            align-items: start;
            padding: 20px;
          }
          @media (max-width: 991px) {
            .textbox {
              margin-top: 40px;
              white-space: initial;
              padding: 20px;
            }
          }
          .div-10 {
            background-color: #d9c0f3;
            align-self: stretch;
            width: 1px;
            height: 479px;
          }
          .div-11 {
            border-radius: 10px;
            box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
            background-color: #ffd9b3;
            align-self: stretch;
            display: flex;
            flex-grow: 1;
            flex-basis: 0%;
            flex-direction: column;
            margin: auto 0;
            padding: 50px 17px 14px;
          }
          @media (max-width: 991px) {
            .div-11 {
              max-width: 100%;
              white-space: initial;
            }
          }
          .div-14 {
            display: flex;
            width: 675px;
            max-width: 100%;
            align-items: start;
            justify-content: space-between;
            gap: 20px;
            font-size: 16px;
            padding: 0 20px;
          }
          @media (max-width: 991px) {
            .div-14 {
              flex-wrap: wrap;
              white-space: initial;
            }
          }
          .img-3 {
            aspect-ratio: 1;
            object-fit: auto;
            object-position: center;
            width: 49px;
            align-self: stretch;
            margin: auto 0;
          }
          .div-15 {
            font-family: Inter, sans-serif;
            border-radius: 10px;
            box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
            background-color: #cce6ff;
            margin-top: 5px;
            justify-content: center;
            padding: 20px 30px;
          }
          @media (max-width: 991px) {
            .div-15 {
              white-space: initial;
            }
          }
          .img-4 {
            aspect-ratio: 1;
            object-fit: auto;
            object-position: center;
            width: 49px;
          }
        `}</style>
      </main>
    </>
  );
}

export default ReadBook;
