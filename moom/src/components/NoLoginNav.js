import React from "react";
import { Link } from "react-router-dom";
import "../css/NologinNav.css";
import "../index.css";

const NoLoginNav = () => {
  // 비로그인시 네비 바

  //TODO: 고정 nav바 css style
  const style = {
    position: "fixed",
    top: 0,
    width: "100%",
    height: "35px",
    paddingTop: "20px",
    backgroundColor: "gray",
  };

  return (
    <div>
      {/* TODO: TOP 최상위버튼 */}
      <header style={{ ...style }}>
        <Link to="/">
          <button>로고</button>
        </Link>
        <Link to="/login">
          <button>로그인</button>
        </Link>
        <Link to="/signup">
          <button>회원가입</button>
        </Link>
        <button
          className="animate-bounce w-6 h-6 ..."
          style={{
            cursor: "pointer",
            position: "fixed",
            right: 20,
          }}
          onClick={() => window.scrollTo(0, 0)}
        >
          TOP
        </button>
      </header>
    </div>
  );
};

export default NoLoginNav;
