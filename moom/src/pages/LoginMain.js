import { Component } from "react";
import { withRouter, Route, Switch } from "react-router-dom";

import LoginNav from "../components/LoginNav";
import BasicBody from "../components/BasicBody";
import CustomBody from "../components/CustomBody";
import CertainBody from "../components/CertainBody";
import MyPage from "../pages/MyPage";

class LoginMain extends Component {
  constructor(props) {
    super(props);
  }

  // 로그인시 메인 페이지
  render() {
    const { isLogin, userInfo, handleLoginSuccess } = this.props;
    return (
      <div>
        <LoginNav userInfo={userInfo} isLogin={isLogin} />
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return <div>로그인시 메인입니다.</div>;
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
