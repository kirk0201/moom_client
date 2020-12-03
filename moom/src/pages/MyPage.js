import { Component } from "react";
import { withRouter } from "react-router-dom";

import UserInfo from "../components/UserInfo";

class MyPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { isLogin, userInfo, handleLoginSuccess } = this.props;
    return (
      <UserInfo
        userInfo={userInfo}
        isLogin={isLogin}
        handleLoginSuccess={handleLoginSuccess}
      />
    );
  }
}

export default withRouter(MyPage);
