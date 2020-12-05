import React from "react";
import { Link } from "react-router-dom";

const NoLoginNav = () => {
  // 비로그인시 네비 바

  //TODO: 고정 nav바 css style
  const style = {
    position: "fixed",
    top: 0,
    width: "100%",
    height: "50px",
    paddingTop: "20px",
    backgroundColor: "white",
  };

  return (
    <div>
      {/* TODO: TOP 최상위버튼 */}
      <button
        style={{
          cursor: "pointer",
          position: "fixed",
          top: 70,
          right: 20,
          fontSize: 30,
        }}
        onClick={() => window.scrollTo(0, 0)}
      >
        TOP
      </button>
      <header style={style}>
        <Link to="/">
          <button>로고</button>
        </Link>
        <Link to="/login">
          <button>로그인</button>
        </Link>
        <Link to="/signup">
          <button>회원가입</button>
        </Link>
      </header>
    </div>
  );
};

export default NoLoginNav;
