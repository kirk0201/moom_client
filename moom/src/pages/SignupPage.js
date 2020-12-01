import { Component } from "react";
import { withRouter } from "react-router-dom";

import SignUp from "../components/SignUp";

class SignupPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <SignUp />;
  }
}

export default withRouter(SignupPage);
