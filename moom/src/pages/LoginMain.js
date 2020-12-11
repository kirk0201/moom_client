import React, { Component } from "react";
import { withRouter, Route, Switch } from "react-router-dom";

import LoginNav from "../components/LoginNav";
import BasicBody from "../components/BasicBody";
import CustomBody from "../components/CustomBody";
import MyPage from "../pages/MyPage";

class LoginMain extends Component {
  // 로그인시 메인 페이지
  render() {
    const {
      isLogin,
      userInfo,
      handleLoginSuccess,
      history,
      handleLoginFail,
    } = this.props;

    return (
      <div>
        <LoginNav
          userInfo={userInfo}
          isLogin={isLogin}
          handleLoginFail={handleLoginFail}
          history={history}
        />
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return <BasicBody userInfo={userInfo} />;
            }}
          ></Route>
          <Route
            path="/custom"
            render={() => {
              return (
                <CustomBody
                  userInfo={userInfo}
                  bodyChoiceSuccess={this.bodyChoiceSuccess}
                />
              );
            }}
          ></Route>
          <Route
            path="/mypage"
            render={() => {
              return (
                <MyPage
                  userInfo={userInfo}
                  isLogin={isLogin}
                  handleLoginSuccess={handleLoginSuccess}
                  handleLoginFail={handleLoginFail}
                />
              );
            }}
          ></Route>
        </Switch>
      </div>
    );
  }
}

export default withRouter(LoginMain);
