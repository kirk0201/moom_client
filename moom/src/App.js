import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import { BASEURL } from "./helpurl";
import LoginMain from "./pages/LoginMain";
import NoLoginMain from "./pages/NoLoginMain";

import axios from "axios";
axios.defaults.withCredentials = true;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      userInfo: null,
    };
  }

  // App가 생기기 전에 실행되는 함수
  componentDidMount() {
    this.handleLoginSuccess();
  }

  // 로그인 성공시 setState로 유저정보 저장하는 함수
  handleLoginSuccess = () => {
    axios
      .get(`${BASEURL}/user/edit`)
      .then((res) => {
        this.setState({ isLogin: true, userInfo: res.data });
      })
      .catch((err) => {
        console.log(err);
        console.log(err.message);
        if (err.message === "Request failed with status code 404") {
          this.setState({ isLogin: false, userInfo: null });
        }
      });
  };

  // 로그아웃, 회원탈퇴 등 성공시 setState로 유저정보를 비우는 함수
  handleLoginFail = () => {
    this.setState({ isLogin: false, userInfo: null });
    localStorage.removeItem("basicPartName");
    localStorage.removeItem("customPartName");
  };

  // 로그인 여부에 따라 다른 페이지 렌더
  render() {
    const { isLogin, userInfo } = this.state;
    return (
      <div>
        <Switch>
          <Route
            path="/"
            render={() => {
              if (isLogin) {
                return (
                  <LoginMain
                    userInfo={userInfo}
                    isLogin={isLogin}
                    handleLoginSuccess={this.handleLoginSuccess.bind(this)}
                    handleLoginFail={this.handleLoginFail.bind(this)}
                  ></LoginMain>
                );
              } else {
                return (
                  <NoLoginMain
                    handleLoginSuccess={this.handleLoginSuccess.bind(this)}
                  ></NoLoginMain>
                );
              }
            }}
          ></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
