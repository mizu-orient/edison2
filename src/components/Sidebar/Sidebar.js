import React, { useState } from "react";
import "./Sidebar.css"; // 修正後のCSSを適用する
import { IconButton, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // サイドバーの開閉状態を切り替える関数
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="app">
      <button className="menu-button" onClick={toggleSidebar}>
        {isSidebarOpen ? "✕" : "☰"} {/* メニュー開閉アイコン */}
      </button>
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        {/* サイドバーの内容 */}
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
