import React, { useState, useEffect, useRef, useCallback } from "react";
import SplitPane from "react-split-pane";
import useStyles from "./styles";
import noCoverImage from "../../assets/notavailable.png";
import "./BookListSplit.css";

function BookListSplit() {
  // 商品カードデータを10個に増やす
  const cards = [
    {
      id: 1,
      title: "商品1",
      description: "これは商品1の説明です。",
      image: "",
    },
    {
      id: 2,
      title: "商品2",
      description: "これは商品2の説明です。",
      image: "",
    },
    // 以下、サンプルデータを追加
    {
      id: 3,
      title: "商品3",
      description: "これは商品3の説明です。",
      image: "",
    },
    {
      id: 4,
      title: "商品4",
      description: "これは商品4の説明です。",
      image: "",
    },
    {
      id: 5,
      title: "商品5",
      description: "これは商品5の説明です。",
      image: "",
    },
    {
      id: 6,
      title: "商品6",
      description: "これは商品6の説明です。",
      image: "",
    },
    {
      id: 7,
      title: "商品7",
      description: "これは商品7の説明です。",
      image: "",
    },
    {
      id: 8,
      title: "商品8",
      description: "これは商品8の説明です。",
      image: "",
    },
    {
      id: 9,
      title: "商品9",
      description: "これは商品9の説明です。",
      image: "",
    },
    {
      id: 10,
      title: "商品10",
      description: "これは商品10の説明です。",
      image: "",
    },
  ];

  const classes = useStyles();
  const [selectedCard, setSelectedCard] = useState(null);
  // 表示するカードの状態を管理
  const [displayedCards, setDisplayedCards] = useState([]);
  // 最後のカードの参照を管理
  const observerRef = useRef();
  const lastCardRef = useCallback(
    (node) => {
      if (observerRef.current) observerRef.current.disconnect();
      observerRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && displayedCards.length < cards.length) {
          // ここで新しいカードを追加するロジック
          // 例: 表示されているカードの次のカードを追加
          let newEndIndex =
            displayedCards.length + 3 <= cards.length
              ? displayedCards.length + 3
              : cards.length;
          setDisplayedCards(cards.slice(0, newEndIndex));
        }
      });
      if (node) observerRef.current.observe(node);
    },
    [displayedCards]
  );

  useEffect(() => {
    // 初期のカードセットを設定
    setDisplayedCards(cards.slice(0, 3));
  }, []);

  const selectCard = (card) => {
    setSelectedCard(card);
  };

  return (
    <main className={classes.mainPage}>
      <SplitPane
        split="vertical"
        minSize={50}
        defaultSize={"50%"}
        style={{ position: "relative", height: "100%" }}
      >
        <div
          className="scroll-view"
          style={{
            overflowY: "auto",
            height: "calc(100vh - 100px)",
            padding: "10px",
          }}
        >
          {displayedCards.map((card, index) => (
            <div
              key={card.id}
              ref={index === displayedCards.length - 1 ? lastCardRef : null}
              className={`card`}
              onClick={() => selectCard(card)}
              style={{ margin: "10px", cursor: "pointer" }}
            >
              <img
                src={card.image || noCoverImage}
                alt={card.title}
                style={{ width: "100px", height: "100px" }}
              />
              <h3>{card.title}</h3>
            </div>
          ))}
        </div>
        <div
          className="details-view"
          style={{
            padding: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          {selectedCard ? (
            <div style={{ textAlign: "center" }}>
              <h2>{selectedCard.title}</h2>
              <p>{selectedCard.description}</p>
              <img
                src={selectedCard.image || noCoverImage}
                alt={selectedCard.title}
                style={{ width: "200px", height: "200px" }}
              />
            </div>
          ) : (
            <p>商品を選択してください。</p>
          )}
        </div>
      </SplitPane>
    </main>
  );
}

export default BookListSplit;
