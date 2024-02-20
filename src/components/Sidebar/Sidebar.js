import React, { useState, useEffect } from "react";
import "./Sidebar.css"; // 修正後のCSSを適用する
import { IconButton, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import profileImage from "../../assets/comicDog.png";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // サイドバーの開閉状態を切り替える関数
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // サイドバー以外の部分をクリックしたときにサイドバーを閉じる
  useEffect(() => {
    const closeSidebar = (event) => {
      if (isSidebarOpen && !event.target.closest(".sidebar")) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener("click", closeSidebar);

    return () => {
      document.removeEventListener("click", closeSidebar);
    };
  }, [isSidebarOpen]);

  return (
    <div className="app">
      <button className="menu-button" onClick={toggleSidebar}>
        {isSidebarOpen ? "✕" : "☰"} {/* メニュー開閉アイコン */}
      </button>
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        {/* サイドバーの内容 */}
        <div
          className="profile-section"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "40%",
          }}
        >
          <img
            src={profileImage}
            alt="プロフィール画像"
            style={{
              fontFamily: "Poppins",
              maxWidth: "80%",
              maxHeight: "80%",
              objectFit: "cover",
            }}
          />
          <Typography
            variant="h6"
            style={{ marginTop: "10px", color: "#FFFFFF", fontStyle: "italic" }}
          >
            Karin
          </Typography>
        </div>
        <ul className="menu-items">
          <li>
            <IconButton component={Link} to="/" color="inherit">
              <Typography variant="h6" color="inherit">
                ホーム
              </Typography>
            </IconButton>
          </li>
          <li>
            <IconButton component={Link} to="/createbook" color="inherit">
              <Typography variant="h6" color="inherit">
                本を作る
              </Typography>
            </IconButton>
          </li>
          <li>
            <IconButton component={Link} to="/booklist" color="inherit">
              <Typography variant="h6" color="inherit">
                本を読む
              </Typography>
            </IconButton>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
