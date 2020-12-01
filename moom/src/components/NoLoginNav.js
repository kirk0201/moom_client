import React from "react";
import { Link } from "react-router-dom";

const NoLoginNav = () => {
  return (
    <div>
      <header>
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
