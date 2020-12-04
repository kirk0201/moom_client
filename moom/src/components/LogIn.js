import { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import { BASEURL } from "../helpurl";

import axios from "axios";
axios.defaults.withCredentials = true;

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

  // input onchange 이벤트시 setState
  handleInputLogin = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  };

  // button onClick 이벤트시 서버와 통신
  handleLogin = () => {
    const { email, password } = this.state;
    const { handleLoginSuccess } = this.props;
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
      .post(`${BASEURL}/user/login`, {
        email: email,
        password: password,
      })
      .then(handleLoginSuccess)
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
        <center>
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
            <div>{this.state.errorMessage}</div>
          </form>
          <div>
            {/* TODO: GITHUB 새창으로 연결 
            현재페이지에서 연결하려면 location.href='address'를 이용한다.*/}
            <button
              onClick={() =>
                window.open(
                  "https://github.com/login/oauth/authorize?client_id=c30e06847f78a8951b9c/"
                )
              }
            >
              github로 로그인하기
            </button>
          </div>
          <div>
            <button>google로 로그인하기</button>
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
