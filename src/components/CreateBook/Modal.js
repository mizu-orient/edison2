import React, { useState } from "react";
import "./Modal.css";
import errorImage from "../../assets/CreateError.png"; // エラー時の画像

const Modal = ({ isOpen, onClose, bookId, style, isError, getResult }) => {
  if (!isOpen) return null;
  console.log("bookid:", bookId);

  const [showSuccessPopup, setShowSuccessPopup] = useState(false); // 成功ポップアップの表示状態管理

  const handleOutsideClick = (e) => {
    if (e.target.className === "modal-overlay") {
      onClose();
    }
  };

  const handleOk = () => {
    setShowSuccessPopup(true); // handleOkをクリックしたらポップアップを表示
    const dummyBookIdOfUser = JSON.parse(
      localStorage.getItem("dummyBookIdOfUser")
    );
    let user = dummyBookIdOfUser.find((user) => user.id === 1);
    if (!user) {
      user = { id: 1, bookIdList: [], manga: [], novel: [], ehon: [] };
      dummyBookIdOfUser.push(user);
    }
    if (style === "manga" && !user.manga.includes(bookId)) {
      user.manga.push(bookId);
    } else if (style === "novel" && !user.novel.includes(bookId)) {
      user.novel.push(bookId);
    } else if (style === "ehon" && !user.ehon.includes(bookId)) {
      user.ehon.push(bookId);
    }

    localStorage.setItem(
      "dummyBookIdOfUser",
      JSON.stringify(dummyBookIdOfUser)
    );
    console.log(localStorage.getItem("dummyBookIdOfUser"));
    getResult();
  };

  return (
    <>
      {!showSuccessPopup && (
        <>
          {isError ? (
            <div className="modal-overlay" onClick={handleOutsideClick}>
              <div
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={errorImage}
                  alt="Error"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                />
                <div>ジャンルを選択してください</div>
                <div className="modal-actions" style={{ textAlign: "center" }}>
                  <button onClick={onClose}>キャンセル</button>
                </div>
              </div>
            </div>
          ) : (
            <div className="modal-overlay" onClick={handleOutsideClick}>
              <div
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
              >
                <p>この本の詳細</p>
                <p>{style}</p>
                <div className="modal-actions">
                  <button onClick={handleOk}>本を作る</button>
                  <button onClick={onClose}>キャンセル</button>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Modal;
