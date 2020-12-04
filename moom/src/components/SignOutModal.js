import React, { Component } from "react";
import "../css/SignOutModal.css";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { BASEURL } from "../helpurl";

export class SignOutModal extends Component {
  constructor(props) {
    super(props);
  }

  // 계정삭제 버튼 클릭시 axios요청 함수
  handleSignout = () => {
    axios
      .delete(`${BASEURL}/user/signout`)
      .then((res) => {
        console.log(res);
        // TODO : 페이지 전환 확인 redirect
        // TODO: 다른 상태코드에 따른 분기가 필요
        if (res.status === 200) {
          // this.props.history.push("/");
          window.location = "/";
        }
      })
      .catch((err) => {
        alert(err);
      });
  };

  render() {
    const { open, close } = this.props;
    return (
      <>
        {open ? (
          <div className="modal">
            <div className="signout_modal">
              <div>홍길동님, 정말 계정을 삭제하실건가요?</div>
              <div>moom 계정을 삭제하면</div>
              <div>홍길동님이 생성한 모든 기록이 함께 사라집니다</div>

              {/* 취소 버튼 */}
              <button className="modal_close" onClick={close}>
                취소
              </button>
              {/* 삭제 버튼 */}
              <button onClick={this.handleSignout}>계정 삭제</button>
            </div>
          </div>
        ) : null}
      </>
    );
  }
}

export default withRouter(SignOutModal);
