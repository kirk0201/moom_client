import { Component } from "react";
import { withRouter, Link, Route, Switch } from "react-router-dom";

import LogIn from "../components/LogIn";
import SignUp from "../components/SignUp";

class NoLoginMain extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <header>
          <Link to="/login">
            <button>로그인</button>
          </Link>
          <Link to="/signup">
            <button>회원가입</button>
          </Link>
          <div>네비 컴포넌트 불러와야함</div>
        </header>
        <main>
          <Switch>
            <Route
              path="/login"
              render={() => {
                return (
                  <LogIn handleLoginSuccess={this.props.handleLoginSuccess} />
                );
              }}
            ></Route>
            <Route
              path="/signup"
              render={() => {
                return <SignUp />;
              }}
            ></Route>
          </Switch>
        </main>
      </div>
    );
  }
}

export default withRouter(NoLoginMain);
