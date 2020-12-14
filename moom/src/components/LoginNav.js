import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import { BASEURL } from "../helpurl";
import profile_img from "../images/profile.jpg";
import "../css/LoginNav.css";

import axios from "axios";
axios.defaults.withCredentials = true;

class LoginNav extends Component {
  // 로그아웃 버튼 클릭시 axios요청 함수
  handleLogout = () => {
    axios.get(`${BASEURL}/user/logout`).then(() => {
      console.log(this.props.history);
      // TODO : 페이지 전환 확인 redirect
      // TODO: 다른 상태코드에 따른 분기가 필요
      this.props.handleLoginFail();
      this.props.history.push("/");
    });
  };

  // 로그인시 네비 바
  render() {
    const { promise, profile, name } = this.props.userInfo;
    return (
      <div>
        <header>
          <Link to="/">
            <button>로고</button>
          </Link>
          <span>
            {promise ? `나의 다짐: ${promise}` : "등록된 나의 다짐이 없습니다."}
          </span>
          <Link to="/">
            <button>
              <img
                className="navcircle"
                alt="사진이 어디있을까요?"
                src={profile ? profile : profile_img}
              ></img>
              <p>{name}</p>
            </button>
          </Link>
          <Link to="/mypage">
            <button>마이페이지</button>
          </Link>
          <button onClick={this.handleLogout}>로그아웃</button>
        </header>
      </div>
    );
  }
}

export default withRouter(LoginNav);
