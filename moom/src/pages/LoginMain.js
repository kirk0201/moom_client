import { Component } from "react";
import { withRouter, Link, Route, Switch } from "react-router-dom";

class LoginMain extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>네비 컴포넌트 불러와야함</div>
        <span>{this.props.userinfo.name}</span>
        <span>{this.props.userinfo.email}</span>
        <span>{this.props.userinfo.birth}</span>
        <span>{this.props.userinfo.promise}</span>
      </div>
    );
  }
}

export default withRouter(LoginMain);
