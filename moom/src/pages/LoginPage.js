import { Component } from "react";
import { withRouter } from "react-router-dom";

import LogIn from "../components/LogIn";

class LoginPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <LogIn handleLoginSuccess={this.props.handleLoginSuccess} />;
  }
}

export default withRouter(LoginPage);
