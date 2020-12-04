import { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import { BASEURL } from "../helpurl";
import "../css/LoginNav.css";
import profile_img from "../images/profile.jpg";

import axios from "axios";
axios.defaults.withCredentials = true;

class LoginNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: this.props.isLogin,
      userInfo: this.props.userInfo,
    };
  }

  // 로그아웃 버튼 클릭시 axios요청 함수
  handleSignout = async () => {
    await axios.get(`${BASEURL}/user/logout`).then((res) => {
      this.setState({ userInfo: null, isLogin: false });
      // TODO : 페이지 전환 확인 redirect
      // TODO: 다른 상태코드에 따른 분기가 필요
      window.location = "/";
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
                src={profile ? profile : profile_img}
              ></img>
              <p>{name}</p>
            </button>
          </Link>
          <Link to="/mypage">
            <button>마이페이지</button>
          </Link>
          <button onClick={this.handleSignout}>로그아웃</button>
        </header>
      </div>
    );
  }
}

export default withRouter(LoginNav);
