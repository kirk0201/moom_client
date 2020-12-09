import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import LogIn from "../components/LogIn";

class LoginPage extends Component {
  // LogIn 로그인 요청을 담은 컴포넌트 렌더
  render() {
    return <LogIn handleLoginSuccess={this.props.handleLoginSuccess} />;
  }
}

export default withRouter(LoginPage);
