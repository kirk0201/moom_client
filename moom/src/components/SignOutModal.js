import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { BASEURL } from "../helpurl";
import "../css/SignOutModal.css";
import "../css/CheckModal.css";
import "../index.css";
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
        // console.log(res);
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
            <div className="rounded-t-2xl rounded-b-2xl text-lg signout_modal">
              <div className="font-bold w-100 border-solid h-10 pt-2 pl-2 text-center bg-gray-800 rounded-t-2xl text-white">
                회원 탈퇴
              </div>
              <div className="font-bold text-left ml-2 px-5 py-5">
                <span className="font-bold animate-pulse text-2xl pr-2 text-black">
                  {this.props.username}
                </span>
                <span>님, </span>
                <div>정말 계정을 삭제하실건가요?</div>
                <div className="text-left font-bold">
                  moom 계정을 삭제하면 생성한 모든 기록이 함께 사라집니다
                </div>
              </div>
              <div className="text-left border-solid border mt-1 border-gray-400 mx-7"></div>
              {/* 취소 버튼 */}
              <button
                className="font-bold mb-5 modal_close mt-5 border-solid border focus:outline-none hover:bg-gray-200 focus:bg-gray-400 border-black px-2 mr-10 rounded-md"
                onClick={close}
              >
                취소
              </button>
              {/* 삭제 버튼 */}
              <button
                className="font-bold border-solid border focus:outline-none border-black px-2 mr-5 focus:bg-gray-400 hover:bg-gray-200 rounded-md"
                onClick={this.checkmodal}
              >
                계정 삭제
              </button>
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
          <div className="check_modal font-bold bg-white rounded-2xl">
            <div className="border-solid border border-black w-full h-10 bg-gray-800 text-center text-white rounded-t-2xl">
              <div className="pt-1">확인</div>
            </div>
            <div className="py-5 text-left px-4">정말로 삭제하시겠습니까?</div>
            <div className="border border-solid border-gray-400 mx-4"></div>
            {/* SignOutModal에서 받은 handleSignout 함수 */}
            <button
              className="font-bold mt-4 mr-5 border-solid focus:bg-gray-400 border-black border hover:bg-gray-200 focus:outline-none mb-5 px-2 rounded-md"
              onClick={props.signout}
            >
              네
            </button>
            <button
              className="font-bold border border-solid focus:bg-gray-400 border-black rounded-md px-2 focus:outline-none hover:bg-gray-200 mr-4"
              onClick={props.close}
            >
              아니오
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
