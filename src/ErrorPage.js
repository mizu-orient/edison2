import * as React from "react";
import { Link } from "react-router-dom";
import useStyles from "./styles";

function ErrorPage() {
  const classes = useStyles();
  return (
    <>
      <main
        className={classes.mainPage}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div className={classes.toolbar} />
        <div className="div" style={{ textAlign: "center" }}>
          <div className="div-2">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/495f710c19a8f041f7002ccbf4215c42ca3707b348fd63b1e6bfd9b3f1db75f7?apiKey=12a7be855aa34cb198eafabbae79d58a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/495f710c19a8f041f7002ccbf4215c42ca3707b348fd63b1e6bfd9b3f1db75f7?apiKey=12a7be855aa34cb198eafabbae79d58a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/495f710c19a8f041f7002ccbf4215c42ca3707b348fd63b1e6bfd9b3f1db75f7?apiKey=12a7be855aa34cb198eafabbae79d58a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/495f710c19a8f041f7002ccbf4215c42ca3707b348fd63b1e6bfd9b3f1db75f7?apiKey=12a7be855aa34cb198eafabbae79d58a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/495f710c19a8f041f7002ccbf4215c42ca3707b348fd63b1e6bfd9b3f1db75f7?apiKey=12a7be855aa34cb198eafabbae79d58a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/495f710c19a8f041f7002ccbf4215c42ca3707b348fd63b1e6bfd9b3f1db75f7?apiKey=12a7be855aa34cb198eafabbae79d58a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/495f710c19a8f041f7002ccbf4215c42ca3707b348fd63b1e6bfd9b3f1db75f7?apiKey=12a7be855aa34cb198eafabbae79d58a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/495f710c19a8f041f7002ccbf4215c42ca3707b348fd63b1e6bfd9b3f1db75f7?apiKey=12a7be855aa34cb198eafabbae79d58a&"
              className="img"
            />
            404 Error!
          </div>
          <Link to="/booklist">
            <button className="div-4">戻る</button>
          </Link>
        </div>
        <style jsx>{`
          .div {
            display: flex;
            max-width: 465px;
            flex-direction: column;
            color: var(--gray-800, #3d3c3c);
            font-weight: 400;
            white-space: nowrap;
          }
          .div-2 {
            display: flex;
            flex-direction: column;
            position: relative;
            overflow: hidden;
            min-height: 465px;
            width: 100%;
            align-items: center;
            text-align: center;
            padding: 431px 60px 9px;
            font: 36px Unica One, sans-serif;
          }
          .img {
            position: absolute;
            inset: 0;
            height: 100%;
            width: 100%;
            object-fit: cover;
            object-position: center;
          }
          .div-3 {
            position: relative;
          }
          .div-4 {
            border-radius: 20px;
            border: 2px solid var(--gray-800, #3d3c3c);
            background-color: var(--yellow-500, #fdbf0f);
            align-self: center;
            margin-top: 49px;
            width: 100%;
            max-width: 420px;
            justify-content: center;
            align-items: center;
            padding: 17px 60px;
            font: 24px Syne, sans-serif;
          }
        `}</style>
      </main>
    </>
  );
}

export default ErrorPage;
