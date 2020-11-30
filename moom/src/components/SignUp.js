import React, { Component } from "react";
import axios from "axios";

export class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      password: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    // FIXME: 방법2
    // this.handleInputValue = this.handleInputValue.bind(this);
  }
  handleInputChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    // 각 email, nickname, password에 입력되는 문자열 출력
    console.log(e.target.value);

    this.setState({
      [name]: value,
    });
  }

  // FIXME: 방법2
  //   handleInputValue = (key) => (e) => {
  //     this.setState({ [key]: e.target.value });
  //   };

  handleClick = async (e) => {
    // react포트 변경
    // package.json 스크립트에서 set PORT=??? && 추가

    console.log("클릭됨", e);
    const url = "http://localhost:4000/user/signup/";
    await axios
      .post(url, {
        email: this.state.email,
        name: this.state.name,
        password: this.state.password,
      })
      .then((res) => {
        console.log(res);
      });
  };

  render() {
    return (
      <>
        <p>회원가입</p>
        <p>moom에 오신 것을 환영합니다 :)</p>
        <form>
          <div>
            <p>{this.state.email}</p>
            <p>{this.state.password}</p>
            <p>{this.state.name}</p>
            <p>이메일</p>
            <input
              name="email"
              type="email"
              //   onChange={this.handleInputValue("email")}
              onChange={this.handleInputChange}
            ></input>
            <button>중복확인</button>
          </div>
          <p>닉네임</p>
          <input
            name="name"
            type="text"
            // onChange={this.handleInputValue("name")}
            onChange={this.handleInputChange}
          ></input>
          <p>비밀번호</p>
          <input
            name="password"
            type="password"
            // onChange={this.handleInputValue("password")}
            onChange={this.handleInputChange}
          ></input>
          <div>
            <button onClick={this.handleClick}>가입하기</button>
          </div>
        </form>
      </>
    );
  }
}

export default SignUp;
