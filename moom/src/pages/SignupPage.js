import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import SignUp from "../components/SignUp";

class SignupPage extends Component {
  // SignUp 회원가입 요청을 담은 컴포넌트 렌더
  render() {
    return <SignUp />;
  }
}

export default withRouter(SignupPage);
