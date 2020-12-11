import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";

class BodyNav extends Component {
  // 바디 컴포넌트의 네비 바
  render() {
    return (
      <>
        <div>
          <Link to="/">
            <button>1</button>
          </Link>
          <Link to="/custom">
            <button>2</button>
          </Link>
        </div>
      </>
    );
  }
}

export default withRouter(BodyNav);
