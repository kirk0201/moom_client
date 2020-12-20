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
      handleHeader,
      header,
    } = this.props;

    return (
      <div>
        <LoginNav
          userInfo={userInfo}
          isLogin={isLogin}
          handleLoginFail={handleLoginFail}
          history={history}
          header={header}
          handleHeader={handleHeader}
        />
        <div className="login-main">
          <Switch>
            <Route
              exact
              path="/"
              render={() => {
                return (
                  <BasicBody
                    userInfo={userInfo}
                    handleHeader={handleHeader}
                    header={header}
                  />
                );
              }}
            ></Route>
            <Route
              path="/custom"
              render={() => {
                return (
                  <CustomBody
                    userInfo={userInfo}
                    handleHeader={handleHeader}
                    header={header}
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
      </div>
    );
  }
}

export default withRouter(LoginMain);
