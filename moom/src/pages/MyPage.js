import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import UserInfo from "../components/UserInfo";

class MyPage extends Component {
  // UserInfo 회원정보 요청(조회,수정,회원탈퇴)을 담은 컴포넌트 렌더
  render() {
    const {
      isLogin,
      userInfo,
      handleLoginSuccess,
      handleLoginFail,
    } = this.props;
    return (
      <UserInfo
        userInfo={userInfo}
        isLogin={isLogin}
        handleLoginSuccess={handleLoginSuccess}
        handleLoginFail={handleLoginFail}
      />
    );
  }
}

export default withRouter(MyPage);
