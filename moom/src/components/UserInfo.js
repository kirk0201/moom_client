import React, { Component } from "react";
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
    if (type === "normal") {
      social = true;
    }

    return (
      <>
        <div className="container">
          <div>
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
                  alt="프로필사진"
                  name="isOpenProfile"
                  onClick={this.openInput}
                  src={profile ? profile : profile_img}
                ></img>
                {/* <button name="isOpenProfile" onClick={this.openInput}>
                  수정
                </button> */}
              </>
            )}
          </div>
          <div>
            <div style={{ marginLeft: 60, marginTop: 10 }}>
              <div class="md:inline-flex space-y-4 md:space-y-0 w-full p-4 text-gray-500 items-center">
                <h2 class="md:w-1/3 max-w-sm mx-auto">Account</h2>
                <div class="md:w-2/3 max-w-sm mx-auto">
                  <label class="text-sm text-gray-400">Email</label>
                  <div class="w-full inline-flex border">
                    <div class="pt-2 w-1/12 bg-gray-100 bg-opacity-50">
                      <svg
                        fill="none"
                        class="w-6 text-gray-400 mx-auto"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <input
                      type="email"
                      class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                      placeholder={email}
                      disabled
                    />
                  </div>
                </div>
              </div>
            </div>

            <div style={{ marginLeft: 60, marginTop: 10 }}>
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
                  <hr />
                  <div class="md:inline-flex w-full space-y-4 md:space-y-0 p-8 text-gray-500 items-center">
                    <h2 class="md:w-4/12 max-w-sm mx-auto">닉네임</h2>

                    <div class="md:w-5/12 w-full md:pl-9 max-w-sm mx-auto space-y-5 md:inline-flex pl-2">
                      <div class="w-full inline-flex border-b">
                        <div class="w-1/12 pt-2">
                          <svg
                            fill="none"
                            class="w-6 text-gray-400 mx-auto"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                            />
                          </svg>
                        </div>
                        <input
                          type="text"
                          class="w-11/12 focus:outline-none focus:text-gray-600 p-2 ml-4"
                          placeholder={name}
                        />
                      </div>
                    </div>

                    <div class="md:w-3/12 text-center md:pl-6">
                      <button
                        name="isOpenName"
                        onClick={this.openInput}
                        class="text-white w-full mx-auto max-w-sm rounded-md text-center bg-indigo-400 py-2 px-4 inline-flex items-center focus:outline-none md:float-right"
                      >
                        <svg
                          fill="none"
                          class="w-6 text-gray-400 mx-auto"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                        수정
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>

            <div style={{ marginLeft: 60, marginTop: 10 }}>
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
                      <hr />
                      <div class="md:inline-flex w-full space-y-4 md:space-y-0 p-8 text-gray-500 items-center">
                        <h2 class="md:w-4/12 max-w-sm mx-auto">비밀번호</h2>

                        <div class="md:w-5/12 w-full md:pl-9 max-w-sm mx-auto space-y-5 md:inline-flex pl-2">
                          <div class="w-full inline-flex border-b">
                            <div class="w-1/12 pt-2">
                              <svg
                                fill="none"
                                class="w-6 text-gray-400 mx-auto"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                />
                              </svg>
                            </div>
                            <input
                              type="password"
                              class="w-11/12 focus:outline-none focus:text-gray-600 p-2 ml-4"
                              placeholder="변경할 비밀번호 입력"
                            />
                          </div>
                        </div>

                        <div class="md:w-3/12 text-center md:pl-6">
                          <button
                            name="isOpenPassword"
                            onClick={this.openInput}
                            class="text-white w-full mx-auto max-w-sm rounded-md text-center bg-indigo-400 py-2 px-4 inline-flex items-center focus:outline-none md:float-right"
                          >
                            <svg
                              fill="none"
                              class="w-6 text-gray-400 mx-auto"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                              />
                            </svg>
                            수정
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                </>
              )}
            </div>

            <div style={{ marginLeft: 60, marginTop: 10 }}>
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
                  <hr />
                  <div class="md:inline-flex w-full space-y-4 md:space-y-0 p-8 text-gray-500 items-center">
                    <h2 class="md:w-4/12 max-w-sm mx-auto">나의다짐</h2>

                    <div class="md:w-5/12 w-full md:pl-9 max-w-sm mx-auto space-y-5 md:inline-flex pl-2">
                      <div class="w-full inline-flex border-b">
                        <div class="w-1/12 pt-2">
                          <svg
                            fill="none"
                            class="w-6 text-gray-400 mx-auto"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                            />
                          </svg>
                        </div>
                        <input
                          type="text"
                          class="w-11/12 focus:outline-none focus:text-gray-600 p-2 ml-4"
                          placeholder={
                            promise ? promise : "목표를 위한 다짐을 남겨보세요"
                          }
                        />
                      </div>
                    </div>

                    <div class="md:w-3/12 text-center md:pl-6">
                      <button
                        name="isOpenPromise"
                        onClick={this.openInput}
                        class="text-white w-full mx-auto max-w-sm rounded-md text-center bg-indigo-400 py-2 px-4 inline-flex items-center focus:outline-none md:float-right"
                      >
                        <svg
                          fill="none"
                          class="w-6 text-gray-400 mx-auto"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                        수정
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>

            <div style={{ marginLeft: 60, marginTop: 10 }}>
              {isOpenSex ? (
                <UserInfoSex
                  info={sex}
                  what="isOpenSex"
                  handleLoginSuccess={handleLoginSuccess}
                  closeInput={this.closeInput}
                />
              ) : (
                <>
                  <hr />
                  <div class="md:inline-flex w-full space-y-4 md:space-y-0 p-8 text-gray-500 items-center">
                    <h2 class="md:w-4/12 max-w-sm mx-auto">성별</h2>

                    <div class="md:w-5/12 w-full md:pl-9 max-w-sm mx-auto space-y-5 md:inline-flex pl-2">
                      <div class="w-full inline-flex border-b">
                        <div class="w-1/12 pt-2">
                          <svg
                            fill="none"
                            class="w-6 text-gray-400 mx-auto"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                            />
                          </svg>
                        </div>
                        <input
                          type="text"
                          class="w-11/12 focus:outline-none focus:text-gray-600 p-2 ml-4"
                          placeholder={sex ? sex : "성별을 선택해주세요"}
                        />
                      </div>
                    </div>

                    <div class="md:w-3/12 text-center md:pl-6">
                      <button
                        name="isOpenSex"
                        onClick={this.openInput}
                        class="text-white w-full mx-auto max-w-sm rounded-md text-center bg-indigo-400 py-2 px-4 inline-flex items-center focus:outline-none md:float-right"
                      >
                        <svg
                          fill="none"
                          class="w-6 text-gray-400 mx-auto"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                        수정
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>

            <div style={{ marginLeft: 60, marginTop: 10 }}>
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
                  <hr />
                  <div class="md:inline-flex w-full space-y-4 md:space-y-0 p-8 text-gray-500 items-center">
                    <h2 class="md:w-4/12 max-w-sm mx-auto">생년월일</h2>

                    <div class="md:w-5/12 w-full md:pl-9 max-w-sm mx-auto space-y-5 md:inline-flex pl-2">
                      <div class="w-full inline-flex border-b">
                        <div class="w-1/12 pt-2">
                          <svg
                            fill="none"
                            class="w-6 text-gray-400 mx-auto"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            style={{ backgroundImage: { birth } }}
                          ></svg>
                        </div>
                        <input
                          type="text"
                          class="w-11/12 focus:outline-none focus:text-gray-600 p-2 ml-4"
                          placeholder={birth ? birth : "생년월일을 설정하세요"}
                        />
                      </div>
                    </div>

                    <div class="md:w-3/12 text-center md:pl-6">
                      <button
                        name="isOpenBirth"
                        onClick={this.openInput}
                        class="text-white w-full mx-auto max-w-sm rounded-md text-center bg-indigo-400 py-2 px-4 inline-flex items-center focus:outline-none md:float-right"
                      >
                        <svg
                          fill="none"
                          class="w-6 text-gray-400 mx-auto"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                        수정
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        <hr />
        <div class="w-full p-4 text-right text-gray-500">
          <button
            onClick={this.openModal}
            class="inline-flex items-center focus:outline-none mr-4"
          >
            <svg
              fill="none"
              class="w-4 mr-2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
            회원탈퇴
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
