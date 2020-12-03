import { Component } from "react";
import { withRouter } from "react-router-dom";

import "../css/UserInfo.css";
import profile_img from "../images/profile.jpg";
import UserInfoEdit from "./UserInfoEdit";

import axios from "axios";
axios.defaults.withCredentials = true;

class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenPromise: false,
      isOpenName: false,
      isOpenPassword: false,
    };
  }

  openInputPromise = () => {
    this.setState({
      isOpenPromise: true,
    });
  };

  closeInputPromise = () => {
    this.setState({
      isOpenPromise: false,
    });
  };

  openInputName = () => {
    this.setState({
      isOpenName: true,
    });
  };

  closeInputName = () => {
    this.setState({
      isOpenName: false,
    });
  };

  openInputPassword = () => {
    this.setState({
      isOpenPassword: true,
    });
  };

  closeInputPassword = () => {
    this.setState({
      isOpenPassword: false,
    });
  };

  render() {
    const {
      profile,
      name,
      email,
      promise,
      birth,
      sex,
      type,
    } = this.props.userInfo;

    let { isOpenPromise, isOpenName, isOpenPassword } = this.state;

    let social = false;
    if (type === "nomal") {
      social = true;
    }

    return (
      <>
        <h1>마이페이지</h1>
        <div className="container">
          <div>
            <span>프로필사진</span>
            <img className="circle" src={profile ? profile : profile_img}></img>
          </div>
          <div className="text_box">
            <li>
              <span>닉네임:</span>
              {isOpenName ? (
                <UserInfoEdit
                  info={name}
                  noInfo="이름을 입력해주세요"
                  name="nikname"
                  type="text"
                  close={this.closeInputName}
                />
              ) : (
                <>
                  <span>{name}</span>
                  <button onClick={this.openInputName}>수정</button>
                </>
              )}
            </li>
            <li>
              <span>이메일:</span>
              <span className="span_email">{email}</span>
            </li>
            <li>
              <span>비밀번호 변경:</span>
              {/* <span>
                {if(!social)
                  ? "비밀번호를 변경할 수 없습니다"
                  : "변경할 비밀번호를 입력해주세요"}
              </span>
              <button onClick={this.openInputPassword}>수정</button> */}
            </li>
            <li>
              <span>성별:</span>
              <select name="sex" value={sex}>
                <option value="">선택</option>
                <option value="female">여성</option>
                <option value="male">남성</option>
              </select>
              <button>
                <span>수정</span>
              </button>
            </li>
            <li>
              <span>나의 다짐:</span>
              {isOpenPromise ? (
                <UserInfoEdit
                  info={promise}
                  noInfo="목표를 위한 다짐을 남겨보세요"
                  name="promise"
                  type="text"
                  close={this.closeInputPromise}
                />
              ) : (
                <>
                  <span>
                    {promise ? promise : "목표를 위한 다짐을 남겨보세요"}
                  </span>
                  <button onClick={this.openInputPromise}>수정</button>
                </>
              )}
            </li>
            <li>
              <span>생년 월일:</span>
              <span>{birth ? birth : "생년월일을 설정하세요"}</span>
              <button>
                <span>수정</span>
              </button>
            </li>
          </div>
        </div>
        <div className="div_btn_signout">
          <button className="btn_signout">moom 회원 탈퇴하기</button>
        </div>
      </>
    );
  }
}

export default withRouter(UserInfo);
