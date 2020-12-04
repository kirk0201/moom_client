import { Component } from "react";
import { withRouter } from "react-router-dom";

import { BASEURL } from "../helpurl";

import axios from "axios";
axios.defaults.withCredentials = true;

// TODO: 이메일 중복 버튼, 서버 요청, 에러 메세지 확인
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      password: "",
      sex: "",
      errorMessage: "",
      errorEmail: "",
    };
    this.handleInputSignup = this.handleInputSignup.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
  }

  // input 이벤트시 서버에게 보낼 정보 저장하는 함수
  handleInputSignup = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  };

  // 회원가입 버튼 클릭시 axios요청 함수
  handleSignup = () => {
    const { email, name, password, sex } = this.state;
    if (!email) {
      return this.setState({ errorMessage: "Email을 입력해주세요" });
    } else if (!name) {
      return this.setState({ errorMessage: "닉네임을 입력해주세요" });
    } else if (!password) {
      return this.setState({ errorMessage: "Password를 입력해주세요" });
    } else if (!sex) {
      return this.setState({ errorMessage: "성별을 선택해주세요" });
    } else {
      this.setState({ errorMessage: "" });
    }
    axios
      .post(`${BASEURL}/user/signup`, {
        email: email,
        name: name,
        password: password,
        sex: sex,
      })
      .then((res) => {
        console.log(res);
        // TODO : 페이지 전환 확인 redirect
        // TODO: 다른 상태코드에 따른 분기가 필요
        this.props.history.push("/login");
      })
      .catch((err) => {
        console.log(err);
        console.log(err.message);
        if (err.message === "Request failed with status code 409") {
          this.setState({
            errorEmail: "이미 존재하는 이메일입니다.",
          });
        }
      });
  };

  render() {
    return (
      <>
        <center>
          <p>회원가입</p>
          <p>moom에 오신 것을 환영합니다.^^</p>
          <form onSubmit={(e) => e.preventDefault()}>
            <div>
              <p>이메일</p>
              <input
                name="email"
                type="email"
                placeholder="이메일을 입력해주세요"
                onChange={this.handleInputSignup}
              ></input>
              <button>중복확인</button>
            </div>
            {/* TODO : 에러메세지 재확인 */}
            <div>{this.state.errorEmail}</div>
            <p>닉네임</p>
            <input
              name="name"
              type="text"
              placeholder="닉네임을 입력해주세요"
              onChange={this.handleInputSignup}
            ></input>
            <p>비밀번호</p>
            <input
              name="password"
              type="password"
              placeholder="비밀번호를 입력해주세요"
              onChange={this.handleInputSignup}
            ></input>
            <p>성별</p>
            <select
              name="sex"
              value={this.state.sex}
              onChange={this.handleInputSignup}
            >
              <option value="">선택</option>
              <option value="female">여성</option>
              <option value="male">남성</option>
            </select>
            <div>
              <button onClick={this.handleSignup}>가입하기</button>
            </div>
            {/* TODO : 에러메세지 재확인 */}
            <div>{this.state.errorMessage}</div>
          </form>
        </center>
      </>
    );
  }
}

export default withRouter(SignUp);
