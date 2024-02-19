import React from "react";

const product = {
  id: 1,
  title: "ねずみの嫁入り",
  style: "manga",
  rating: "1.5",
  bookId: "marriage_of_a_mouse",
  description: "ねずみかわいい",
  ratio: 1.5,
  coverImage:
    "https://1.bp.blogspot.com/-0S46QU6KoCM/WxvKQsHCcnI/AAAAAAABMn4/QEjMZyeeJVIrGAmauqC5F887L--c8hzpACLcBGAs/s800/monogatari_momotarou_solo.png",
};
const ProductCard = () => {
  // インラインスタイル
  const styles = {
    card: {
      display: "flex",
      flexDirection: "column",
      width: "250px",
      margin: "20px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      overflow: "hidden",
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    },
    coverImage: {
      width: "100%",
      height: "auto",
      objectFit: "cover",
    },
    info: {
      padding: "15px",
    },
    title: {
      margin: "0",
      marginBottom: "10px",
      fontSize: "18px",
      color: "#333",
    },
    description: {
      fontSize: "14px",
      color: "#666",
      margin: "0",
      marginBottom: "15px",
    },
    rating: {
      fontSize: "14px",
      color: "#888",
      margin: "0",
    },
    booksHeader: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(145deg, #f1361d, #f7a34b)",
      color: "#fff",
      fontSize: "40px",
      fontFamily: "'Segoe UI', sans-serif",
      fontWeight: "bold",
      letterSpacing: "0px",
      wordSpacing: "0px",
      padding: "20px",
      borderRadius: "5px",
      boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
      margin: "20px 0",
      whiteSpace: "nowrap",
    },
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={styles.card}>
          <div
            style={{
              border: "2px solid #f1361d",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            <h1 style={styles.booksHeader}>
              <span>最新のアクセス</span>
            </h1>
          </div>
          <img
            style={styles.coverImage}
            src={product.coverImage}
            alt={product.title}
          />
          <div style={styles.info}>
            <h2 style={styles.title}>{product.title}</h2>
            <p style={styles.description}>{product.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

const RecentBook = () => {
  return <ProductCard />;
};

export default RecentBook;
