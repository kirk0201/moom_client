import { Component } from "react";
import { withRouter } from "react-router-dom";
import "../css/UserInfo.css";
import profile_img from "../images/profile.jpg";
import { BASEURL } from "../helpurl";

import axios from "axios";
axios.defaults.withCredentials = true;

class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isImg: this.props.profile,
    };
  }

  render() {
    // 소셜 칼럼 수정
    // 이미지 업로드 수정
    const { profile, name, email, promise, birth } = this.props.userInfo;

    // TODO: 사진이 있을 경우, 사진이 없을 경우
    let bgimg = this.props.profile
      ? `url(${this.props.profile})`
      : `url(${profile_img})`;

    return (
      <>
        <h1>마이페이지</h1>
        <div className="container">
          <div>
            <span>프로필사진</span>
            <div
              className="circle"
              style={{
                backgroundImage: bgimg,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              {/* {profile ? profile : "등록된 사진이 없습니다."} */}
            </div>
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
          <button className="btn_signout">moom 회원 탈퇴하기</button>
        </div>
      </>
    );
  }
}

export default withRouter(UserInfo);
