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
      isOpenBirth: false,
    };
  }

  openInput = (e) => {
    let target = e.target;
    let key = target.name;
    this.setState({
      [key]: true,
    });
  };

  closeInput = (key) => {
    this.setState({
      [key]: false,
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

    const { handleLoginSuccess } = this.props;

    let { isOpenPromise, isOpenName, isOpenPassword, isOpenBirth } = this.state;

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
                  what="isOpenName"
                  closeInput={this.closeInput}
                  handleLoginSuccess={handleLoginSuccess}
                />
              ) : (
                <>
                  <span>{name}</span>
                  <button name="isOpenName" onClick={this.openInput}>
                    수정
                  </button>
                </>
              )}
            </li>
            <li>
              <span>이메일:</span>
              <span className="span_email">{email}</span>
            </li>
            <li>
              <span>비밀번호 변경:</span>

              {isOpenPassword ? (
                <UserInfoEdit
                  info=""
                  noInfo="변경할 비밀번호를 입력해주세요"
                  name="password"
                  type="password"
                  what="isOpenPassword"
                  closeInput={this.closeInput}
                  handleLoginSuccess={handleLoginSuccess}
                />
              ) : (
                <>
                  {!social ? (
                    "비밀번호를 변경할 수 없습니다"
                  ) : (
                    <>
                      <span>변경할 비밀번호를 입력해주세요</span>
                      <button name="isOpenPassword" onClick={this.openInput}>
                        수정
                      </button>
                    </>
                  )}
                </>
              )}
            </li>
            <li>
              <span>성별:</span>
              <select name="sex" value={sex}>
                <option value="">선택</option>
                <option value="female">여성</option>
                <option value="male">남성</option>
              </select>
              <button>지금은 수정할 수 없어요!</button>
            </li>
            <li>
              <span>나의 다짐:</span>
              {isOpenPromise ? (
                <UserInfoEdit
                  info={promise}
                  noInfo="목표를 위한 다짐을 남겨보세요"
                  name="promise"
                  type="text"
                  what="isOpenPromise"
                  closeInput={this.closeInput}
                  handleLoginSuccess={handleLoginSuccess}
                />
              ) : (
                <>
                  <span>
                    {promise ? promise : "목표를 위한 다짐을 남겨보세요"}
                  </span>
                  <button name="isOpenPromise" onClick={this.openInput}>
                    수정
                  </button>
                </>
              )}
            </li>
            <li>
              <span>생년 월일:</span>
              {isOpenBirth ? (
                <UserInfoEdit
                  info=""
                  noInfo="8자리 숫자로 입력해주세요."
                  name="birth"
                  type="text"
                  what="isOpenBirth"
                  closeInput={this.closeInput}
                  handleLoginSuccess={handleLoginSuccess}
                />
              ) : (
                <>
                  <span>{birth ? birth : "생년월일을 설정하세요"}</span>
                  <button name="isOpenBirth" onClick={this.openInput}>
                    수정
                  </button>
                </>
              )}
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
