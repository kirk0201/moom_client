import { Component } from "react";
import { withRouter } from "react-router-dom";

import { BASEURL } from "../helpurl";

import axios from "axios";
axios.defaults.withCredentials = true;

class UserInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // 소셜 칼럼 수정
    // 이미지 업로드 수정
    const { profile, name, email, promise, birth } = this.props.userInfo;
    return (
      <>
        <h1>마이페이지</h1>

        <div>
          <span>프로필사진</span>
          <div>{profile ? profile : "등록된 사진이 없습니다."}</div>
        </div>
        <div>
          <li>
            <span>닉네임:</span>
            <span>{name}</span>
            <button>
              <span>수정</span>
            </button>
          </li>
          <li>
            <span>이메일:</span>
            <span>{email}</span>
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
            <span>{promise}</span>
            <button>
              <span>수정</span>
            </button>
          </li>
          <li>
            <span>생년 월일:</span>
            <span>{birth}</span>
            <button>
              <span>수정</span>
            </button>
          </li>
        </div>
        <div>
          <button>moom 회원 탈퇴하기</button>
          </div>
      </>
    );
  }
}

export default withRouter(UserInfo);

//         <div class="container">
//           <div class="img_box">
//             <img src="https://png.pngtree.com/png-vector/20191004/ourlarge/pngtree-person-icon-png-image_1788612.jpg" />
//           </div>
//           <div class="text_box">
//             <li>
//               <span class="span_name">닉네임</span>
//               <span>홍길동</span>
//               <span>수정</span>
//             </li>
//             <li>
//               <span class="span_name">이메일</span>
//               <span>abc@gmail.com</span>
//               <span>수정</span>
//             </li>
//             <li>
//               <span class="span_name">비밀번호 변경</span>
//               <span>변경할 비밀번호 입력</span>
//               <span>수정</span>
//             </li>
//             <li>
//               <span class="span_name">나의 다짐</span>
//               <span>나의 다짐을 입력</span>
//               <span>수정</span>
//             </li>
//             <li>
//               <span class="span_name">생년월일</span>
//               <span>YYMMDD</span>
//               <span>수정</span>
//             </li>
//           </div>
//         </div>