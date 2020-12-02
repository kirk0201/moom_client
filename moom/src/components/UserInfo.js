import { Component } from "react";
import { withRouter } from "react-router-dom";

import "../css/UserInfo.css";
// import profile_img from "../images/profile.jpg";

import SignOutModal from "./SignOutModal";
import { BASEURL } from "../helpurl";

import axios from "axios";
axios.defaults.withCredentials = true;

class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
  }

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    // 소셜 칼럼 수정
    // 이미지 업로드 수정
    const { profile, name, email, promise, birth } = this.props.userInfo;
    const profile_img = `https://t1.daumcdn.net/cfile/tistory/240814485574155029`;

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
              <span>{name}</span>
              <button>
                <span>수정</span>
              </button>
            </li>
            <li>
              <span>이메일:</span>
              <span className="span_email">{email}</span>
            </li>
            <li>
              <span>비밀번호 변경:</span>
              <span>변경할 비밀번호를 입력해주세요.</span>
              <button>
                <span>수정</span>
              </button>
            </li>
            <li>
              <span>나의 다짐:</span>
              <span>{promise ? promise : "목표를 위한 다짐을 남겨보세요"}</span>
              <button>
                <span>수정</span>
              </button>
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
          <button className="btn_signout" onClick={this.openModal}>
            moom 회원 탈퇴하기
          </button>
          <SignOutModal open={this.state.isModalOpen} close={this.closeModal} />
        </div>
      </>
    );
  }
}

export default withRouter(UserInfo);
