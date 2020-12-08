import { Component } from "react";
import { withRouter } from "react-router-dom";

import "../css/UserInfo.css";
import profile_img from "../images/profile.jpg";
import UserInfoEdit from "./UserInfoEdit";
import UserInfoImg from "./UserInfoImg";
import UserInfoSex from "./UserInfoSex";
import SignOutModal from "./SignOutModal";

class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenPromise: false,
      isOpenName: false,
      isOpenPassword: false,
      isOpenBirth: false,
      isOpenSex: false,
      isOpenProfile: false,
      isModalOpen: false,
    };
  }

  // 수정 버튼 클릭시 UserInfoEdit를 랜더하는 함수
  openInput = (e) => {
    let target = e.target;
    let key = target.name;
    this.setState({
      [key]: true,
    });
  };

  // 저장 버튼 클릭시 UserInfoEdit를 닫는 함수
  closeInput = (key) => {
    this.setState({
      [key]: false,
    });
  };

  // 회원탈퇴 버튼 클릭시 SignOutModal를 랜더하는 함수
  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  // 취소 버튼 클릭시 SignOutModal를 닫는 함수
  closeModal = () => {
    this.setState({ isModalOpen: false });
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

    const { handleLoginSuccess, handleLoginFail } = this.props;

    let {
      isOpenPromise,
      isOpenName,
      isOpenPassword,
      isOpenBirth,
      isOpenSex,
      isOpenProfile,
    } = this.state;

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
            {isOpenProfile ? (
              <UserInfoImg
                info={profile}
                noInfo="프로필 이미지를 등록해주세요."
                what="isOpenProfile"
                closeInput={this.closeInput}
                handleLoginSuccess={handleLoginSuccess}
              />
            ) : (
              <>
                <img
                  className="circle"
                  src={profile ? profile : profile_img}
                ></img>
                <button name="isOpenProfile" onClick={this.openInput}>
                  수정
                </button>
              </>
            )}
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
              {isOpenSex ? (
                <UserInfoSex
                  info={sex}
                  what="isOpenSex"
                  handleLoginSuccess={handleLoginSuccess}
                  closeInput={this.closeInput}
                />
              ) : (
                <>
                  <span>{sex ? sex : "성별을 선택해주세요"}</span>
                  <button name="isOpenSex" onClick={this.openInput}>
                    수정
                  </button>
                </>
              )}
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
          <button className="btn_signout" onClick={this.openModal}>
            moom 회원 탈퇴하기
          </button>
          <SignOutModal
            open={this.state.isModalOpen}
            close={this.closeModal}
            handleLoginFail={handleLoginFail}
          />
        </div>
      </>
    );
  }
}

export default withRouter(UserInfo);
