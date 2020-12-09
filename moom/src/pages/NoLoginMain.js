import React, { Component } from "react";
import { withRouter, Route, Switch } from "react-router-dom";

import NoLoginNav from "../components/NoLoginNav";
import Introduce from "../components/Introduce";
import Experience from "../components/Experience";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";

class NoLoginMain extends Component {
  // 비로그인시 페인 페이지
  render() {
    return (
      <div>
        <NoLoginNav />
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <>
                  <div>
                    <Introduce />
                  </div>
                  <div>
                    <Experience />
                  </div>
                </>
              );
            }}
          ></Route>
          <Route
            path="/login"
            render={() => {
              return (
                <LoginPage handleLoginSuccess={this.props.handleLoginSuccess} />
              );
            }}
          ></Route>
          <Route
            path="/signup"
            render={() => {
              return <SignupPage />;
            }}
          ></Route>
        </Switch>
      </div>
    );
  }
}

export default withRouter(NoLoginMain);
