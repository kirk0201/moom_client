import React, { Component } from "react";
import "../css/Experience.css";

export class Experience extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div
          style={{
            backgroundColor: "teal",
            borderTop: "6px solid blue",
          }}
        >
          Experience페이지입니다
        </div>
        <div className="exp_container">
          <div className="left_img">좌측 이미지</div>
          <div className="input_size">사이즈 입력</div>
          <div className="right_img">우측 이미지</div>
          <div className="info_size">사이즈 정보</div>
        </div>
      </>
    );
  }
}

export default Experience;
