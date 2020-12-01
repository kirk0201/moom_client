import React, { Component } from "react";
import "../css/UserInfo.css";

export default class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div class="container">
          <div class="img_box">
            <img src="https://png.pngtree.com/png-vector/20191004/ourlarge/pngtree-person-icon-png-image_1788612.jpg" />
          </div>
          <div class="text_box">
            <li>
              <span class="span_name">닉네임</span>
              <span>홍길동</span>
              <span>수정</span>
            </li>
            <li>
              <span class="span_name">이메일</span>
              <span>abc@gmail.com</span>
              <span>수정</span>
            </li>
            <li>
              <span class="span_name">비밀번호 변경</span>
              <span>변경할 비밀번호 입력</span>
              <span>수정</span>
            </li>
            <li>
              <span class="span_name">나의 다짐</span>
              <span>나의 다짐을 입력</span>
              <span>수정</span>
            </li>
            <li>
              <span class="span_name">생년월일</span>
              <span>YYMMDD</span>
              <span>수정</span>
            </li>
          </div>
        </div>
      </>
    );
  }
}
