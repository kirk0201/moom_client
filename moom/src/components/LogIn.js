import React from "react";
import { Link, withRouter } from "react-router-dom";

import axios from "axios";
axios.defaults.withCredentials = true;

import { BASEURL } from "../helpurl";

// class형식 로그인 컴포넌트 시작
class LogIn extends Component {
  // props 상속 및 state 및 함수bind
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
  handleInputLogin = (key) => (e) => {
    this.setState({ [key]: e.target.value });
  };

  // button onClick 이벤트시 서버와 통신
  handleLogin = () => {
    // email과 password 미입력시 errorMessage 설정
    const { email, password } = this.state;
    if (!email && !password) {
      return this.setState({
        errorMessage: "Email 과  Password 를 입력해주세요",
      });
    } else if (!email) {
      return this.setState({ errorMessage: "Email 을 입력해주세요" });
    } else if (!password) {
      return this.setState({ errorMessage: "Password 를 입력해주세요" });
    } else {
      this.setState({ errorMessage: "" });
    }
    // input에 모두 입력시 서버에 로그인 요청
    axios
      .post(`${BASEURL}/user/login`, {
        email: email,
        password: password,
      })
      .then((res) => {
        this.props.handleLoginSuccess();
      })
      .catch((err) => {
        if (err.message === "Request failed with status code 404") {
          this.setState({
            errorMessage:
              "회원 정보를 찾을 수 없습니다. Email 과  Password 를 확인해주세요.",
          });
        }
      });
  };

  // render되는 element들
  render() {
    return (
      <div>
        <center>
          <h1>LogIn 여기에 로고 들어갈 예정</h1>
          <form onSubmit={(e) => e.preventDefault()}>
            <div>
              <span>이메일</span>
              <input
                type="email"
                placeholder="이메일을 입력해주세요"
                onChange={this.handleInputLogin("email")}
              ></input>
            </div>
            <div>
              <span>비밀번호</span>
              <input
                type="password"
                placeholder="비밀번호를 입력해주세요"
                onChange={this.handleInputLogin("password")}
              ></input>
            </div>
            <div>{this.state.errorMessage}</div>
            <div>
              <button onClick={this.handleLogin}>Login</button>
            </div>
          </form>
          <div><button>google로 로그인하기</button></div>
          <div><button>google로 로그인하기</button></div>
          <div><Link to="/signup">회원가입</Link><Link to="/">비밀번호찾기</Link></div>
        </center>
      </div>
    );
  }
}

export default withRouter(LogIn);
