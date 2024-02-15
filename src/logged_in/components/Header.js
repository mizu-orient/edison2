import * as React from "react";

function Header(props) {
  return (
    <>
      <div className="div">
        <div className="div-2">
          <div className="div-3">
            <div className="div-4">
              <div className="div-5">Type the name of book or author...</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/79e208f5bb258fa8b5190fd9f069ccda6aae0d0748e048357272e8093ea7270e?apiKey=12a7be855aa34cb198eafabbae79d58a&"
                className="img"
              />
            </div>
          </div>
        </div>
        <div className="div-6">
          <div className="div-7">Results:</div>
          <div className="div-8">
            <div className="div-9">
              <div className="div-10">
                <div className="div-11">
                  <div className="div-12">Categories</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/66c5debdc5aead817c3cd6161c09004e2526ad368fd8b10fbd3bb50c06df842d?apiKey=12a7be855aa34cb198eafabbae79d58a&"
                    className="img-2"
                  />
                </div>
              </div>
            </div>
            <div className="div-13">
              <div className="div-14">
                <div className="div-15">
                  <div className="div-16">Filter By</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/66c5debdc5aead817c3cd6161c09004e2526ad368fd8b10fbd3bb50c06df842d?apiKey=12a7be855aa34cb198eafabbae79d58a&"
                    className="img-3"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="div-17" />
      </div>
      <style jsx>{`
        .div {
          display: flex;
          flex-direction: column;
          font-weight: 400;
        }
        .div-2 {
          align-self: center;
          display: flex;
          width: 535px;
          max-width: 100%;
          flex-direction: column;
          font-size: 14px;
          color: var(--gray-800, #3d3c3c);
          padding: 10px 0 0 5px;
        }
        .div-3 {
          border-radius: 20px;
          background-color: var(--yellow-500, #fdbf0f);
          display: flex;
          flex-direction: column;
          padding: 0 5px 10px 0;
        }
        @media (max-width: 991px) {
          .div-3 {
            max-width: 100%;
          }
        }
        .div-4 {
          border-radius: 20px;
          border: 2px solid var(--gray-800, #3d3c3c);
          background-color: var(--white, #fff);
          z-index: 10;
          display: flex;
          margin-top: -10px;
          justify-content: space-between;
          gap: 20px;
          padding: 11px 21px;
        }
        @media (max-width: 991px) {
          .div-4 {
            max-width: 100%;
            flex-wrap: wrap;
            padding-right: 20px;
          }
        }
        .div-5 {
          font-family: Syne, sans-serif;
          flex-grow: 1;
          flex-basis: auto;
        }
        .img {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 20px;
        }
        .div-6 {
          display: flex;
          margin-top: 52px;
          width: 100%;
          justify-content: space-between;
          gap: 20px;
          padding: 0 20px;
        }
        @media (max-width: 991px) {
          .div-6 {
            max-width: 100%;
            flex-wrap: wrap;
            margin-top: 40px;
          }
        }
        .div-7 {
          color: var(--blue-500, #3ab8eb);
          flex-grow: 1;
          flex-basis: auto;
          margin: auto 0;
          font: 24px Unica One, sans-serif;
        }
        .div-8 {
          display: flex;
          justify-content: space-between;
          gap: 17px;
          font-size: 16px;
          color: var(--gray-800, #3d3c3c);
        }
        @media (max-width: 991px) {
          .div-8 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .div-9 {
          display: flex;
          flex-grow: 1;
          flex-basis: 0%;
          flex-direction: column;
          white-space: nowrap;
          padding: 7px 0 0 6px;
        }
        @media (max-width: 991px) {
          .div-9 {
            white-space: initial;
          }
        }
        .div-10 {
          border-radius: 20px;
          background-color: var(--orange-500, #f9784b);
          display: flex;
          width: 100%;
          flex-direction: column;
          padding: 0 6px 7px 0;
        }
        @media (max-width: 991px) {
          .div-10 {
            white-space: initial;
          }
        }
        .div-11 {
          border-radius: 20px;
          border: 2px solid var(--gray-800, #3d3c3c);
          background-color: var(--white, #fff);
          z-index: 10;
          display: flex;
          margin-top: -7px;
          justify-content: space-between;
          gap: 20px;
          padding: 18px 25px;
        }
        @media (max-width: 991px) {
          .div-11 {
            padding-left: 20px;
            white-space: initial;
          }
        }
        .div-12 {
          font-family: Syne, sans-serif;
        }
        .img-2 {
          aspect-ratio: 1.89;
          object-fit: auto;
          object-position: center;
          width: 17px;
          align-self: start;
        }
        .div-13 {
          display: flex;
          flex-grow: 1;
          flex-basis: 0%;
          flex-direction: column;
          padding: 7px 3px 0;
        }
        .div-14 {
          border-radius: 20px;
          background-color: var(--orange-500, #f9784b);
          display: flex;
          width: 100%;
          padding-bottom: 7px;
          flex-direction: column;
        }
        .div-15 {
          border-radius: 20px;
          border: 2px solid var(--gray-800, #3d3c3c);
          background-color: var(--white, #fff);
          z-index: 10;
          display: flex;
          margin-top: -7px;
          justify-content: space-between;
          gap: 20px;
          padding: 18px 30px;
        }
        @media (max-width: 991px) {
          .div-15 {
            padding: 0 20px;
          }
        }
        .div-16 {
          font-family: Syne, sans-serif;
        }
        .img-3 {
          aspect-ratio: 1.89;
          object-fit: auto;
          object-position: center;
          width: 17px;
          align-self: start;
        }
        .div-17 {
          background-color: #676767;
          min-height: 2px;
          margin-top: 28px;
          width: 100%;
        }
        @media (max-width: 991px) {
          .div-17 {
            max-width: 100%;
          }
        }
      `}</style>
    </>
  );
}

export default Header;
