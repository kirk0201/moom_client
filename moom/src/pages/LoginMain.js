import { Component } from "react";
import { withRouter, Route, Switch, Link } from "react-router-dom";

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
        <div>
          <Link to="/">
            <button>1</button>
          </Link>
          <Link to="/custom">
            <button>2</button>
          </Link>
          <Link to="/certain">
            <button>3</button>
          </Link>
        </div>
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return <BasicBody />;
            }}
          ></Route>
          <Route
            path="/custom"
            render={() => {
              return <CustomBody />;
            }}
          ></Route>
          <Route
            path="/certain"
            render={() => {
              return <CertainBody />;
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
