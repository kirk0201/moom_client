import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { BASEURL } from "../helpurl";
import "../css/SignOutModal.css";
import "../css/CheckModal.css";

import axios from "axios";
axios.defaults.withCredentials = true;

class SignOutModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
  }

  checkmodal = () => {
    this.setState({ isModalOpen: true });
  };

  closemodal = () => {
    this.setState({ isModalOpen: false });
  };

  // 계정삭제 버튼 클릭시 axios요청 함수
  handleSignout = () => {
    axios
      .delete(`${BASEURL}/user/signout`)
      .then((res) => {
        console.log(res);
        // TODO : 페이지 전환 확인 redirect
        // TODO: 다른 상태코드에 따른 분기가 필요
        if (res.status === 200) {
          this.props.handleLoginFail();
          this.props.history.push("/");
          // window.location = "/";
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
              <button onClick={this.checkmodal}>계정 삭제</button>

              {/*삭제 버튼을 클릭하여 state가 바뀌면 아래 컴퍼넌트에 있는 
              상항연산자에 의해 모달창이 render됨 */}
              <CheckModal
                open={this.state.isModalOpen}
                close={this.closemodal}
                signout={this.handleSignout}
              />
            </div>
          </div>
        ) : null}
      </>
    );
  }
}
export default withRouter(SignOutModal);

// 모달창 추가 확인 함수형 컴퍼넌트
export function CheckModal(props) {
  // props확인 로그
  // console.log("open : ", props);
  return (
    <>
      {props.open ? (
        <div className="check">
          <div className="check_modal">
            <div>정말로 삭제하시겠습니까?</div>

            {/* SignOutModal에서 받은 handleSignout 함수 */}
            <button onClick={props.signout}>네</button>
            <button onClick={props.close}>아니오</button>
          </div>
        </div>
      ) : null}
    </>
  );
}
