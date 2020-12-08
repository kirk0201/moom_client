import { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import { BASEURL } from "../helpurl";
import GLogin from "./GLogin";

import "../css/Login.css";
import githublogo from "../images/github.svg";

import axios from "axios";
axios.defaults.withCredentials = true;

// TODO : react-github-login을 이용한 버튼 컴포넌트 HLogin 수정
// import HLogin from "./HLogin";
class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errorMessage: "",
    };
    this.handleInputLogin = this.handleInputLogin.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  // input 이벤트시 서버에게 보낼 정보 저장하는 함수
  handleInputLogin = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  };

  // 로그인 버튼 클릭시 axios요청 함수
  handleLogin = () => {
    const { email, password } = this.state;
    if (!email && !password) {
      return this.setState({
        errorMessage: "Email과  Password를 입력해주세요",
      });
    } else if (!email) {
      return this.setState({ errorMessage: "Email을 입력해주세요" });
    } else if (!password) {
      return this.setState({ errorMessage: "Password를 입력해주세요" });
    } else {
      this.setState({ errorMessage: "" });
    }
    axios
      .post(
        `${BASEURL}/user/login`,
        {
          email: email,
          password: password,
        },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res.data);
        this.props.handleLoginSuccess();
        this.props.history.push("/");
        // TODO : 페이지 전환 확인 redirect
        // TODO: 다른 상태코드에 따른 분기가 필요
      })
      .catch((err) => {
        console.log(err);
        console.log(err.message);
        if (err.message === "Request failed with status code 404") {
          this.setState({
            errorMessage:
              "회원 정보를 찾을 수 없습니다. Email과  Password를 확인해주세요.",
          });
        }
      });
  };

  render() {
    return (
      <>
        <center style={{ paddingTop: 30 }}>
          <h1>LogIn 여기에 로고 들어갈 예정</h1>
          <form onSubmit={(e) => e.preventDefault()}>
            <div>
              <p>이메일</p>
              <input
                name="email"
                type="email"
                placeholder="이메일을 입력해주세요"
                onChange={this.handleInputLogin}
              ></input>
            </div>
            <div>
              <p>비밀번호</p>
              <input
                name="password"
                type="password"
                placeholder="비밀번호를 입력해주세요"
                onChange={this.handleInputLogin}
              ></input>
            </div>
            <div>
              <button onClick={this.handleLogin}>Login</button>
            </div>
            {/* TODO : 에러메세지 재확인 */}
            <div>{this.state.errorMessage}</div>
          </form>
          <div>
            {/* 구글 : 현재페이지에서 연결하려면 location.href='address'를 이용한다. */}
            <GLogin handleLoginSuccess={this.props.handleLoginSuccess} />
            <div>
              <button className="github-btn">
                <a href="https://github.com/login/oauth/authorize?client_id=c30e06847f78a8951b9c&redirect_uri=https://m00m.cf/user/gitoauth&scope=user">
                  <div className="github-div">
                    <img className="github-img" src={githublogo}></img>
                  </div>
                  <span className="github-span">Github</span>
                </a>
              </button>
            </div>
          </div>

          <div>
            <Link to="/signup">회원가입</Link>
            <Link to="/">비밀번호찾기</Link>
          </div>
        </center>
      </>
    );
  }
}

export default withRouter(LogIn);
