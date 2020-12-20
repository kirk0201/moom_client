import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import "../css/UserInfo.css";
import profile_male from "../images/profilemale.svg";
import profile_female from "../images/profilefemale.svg";
import birthimg from "../images/birth.png";
import seximg from "../images/sex.png";
import mygoal from "../images/mygoal.png";
import keyimg from "../images/keyimg.png";
import nickname from "../images/nickname.png";

import UserInfoEdit from "./UserInfoEdit";
import UserbirthEdit from "./UserbirthEdit";
import UsergoalEdit from "./UsergoalEdit";
import UserpwdEdit from "./UserpwdEdit";
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

    let social = true;
    if (type === "normal") {
      social = false;
    }

    let profile_img;
    if (sex === "female") {
      profile_img = profile_female;
    } else {
      profile_img = profile_male;
    }

    return (
      <>
        <div className="mypage mt-10 mb-36">
          <div class="tracking-tight text-2xl font-bold">
            <span class="text-gray-900">Info</span>
            <span class="text-purple-400">mation</span>
          </div>

          <div class="flex mt-7 ml-10">
            <div class="row-span-6">
              <div class="text-lg font-medium text-gray-800">프로필사진</div>
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
                    src={profile ? profile : profile_img}
                  ></img>
                  <button
                    class="bg-purple-300 focus:outline-none hover:bg-purple-400 shadow-md p-1 pr-2 rounded-md flex items-center text-center font-medium text-white"
                    name="isOpenProfile"
                    onClick={this.openInput}
                  >
                    <svg
                      fill="none"
                      class="text-white w-6"
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
                </>
              )}
            </div>

            <div class="box ml-20">
              <div class="mt-5 pb-4 inline-flex items-center">
                <span class="pt-1 mr-16 text-lg font-medium text-gray-800">
                  이메일
                </span>
                <svg
                  fill="none"
                  class="pt-1 w-6 mx-auto mr-3 text-gray-500"
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
                <span class="text-xl text-gray-800">{email}</span>
              </div>
              {/* 이메일 */}

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
                  <div class="mt-2 pb-4 inline-flex items-center w-full">
                    <span class="pt-1 mr-16 text-lg font-medium text-gray-800">
                      닉네임
                    </span>
                    <div class="flex justify-between items-center md:w-9/12">
                      <div class="flex truncate md:w-10/12">
                        <img
                          class="w-5 h-8 pt-2 mr-3 text-gray-500"
                          src={nickname}
                        ></img>
                        <span class="truncate pt-2 pr-10 text-gray-800 text-xl">
                          {name}
                        </span>
                      </div>

                      <div>
                        <button
                          name="isOpenName"
                          onClick={this.openInput}
                          class="bg-purple-300 focus:outline-none hover:bg-purple-400 shadow-md p-1 pr-2 rounded-md flex items-center text-center font-medium text-white"
                        >
                          <svg
                            fill="none"
                            class="w-6 text-white mx-auto"
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
                  </div>
                </>
              )}

              {isOpenPassword ? (
                <UserpwdEdit
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
                  <hr />
                  <div class="mt-2 pb-4 inline-flex items-center w-full">
                    <span class="pt-1 mr-12 text-lg font-medium text-gray-800">
                      비밀번호
                    </span>
                    <div class="flex justify-between items-center md:w-9/12">
                      <div class="flex">
                        <img class="w-5 h-8 pt-2 mr-3" src={keyimg}></img>
                        <span class="pt-2 pr-10 text-lg text-gray-500">
                          {social
                            ? "비밀번호를 변경할 수 없습니다"
                            : "변경할 비밀번호를 입력해주세요"}
                        </span>
                      </div>

                      <div>
                        <button
                          name="isOpenPassword"
                          onClick={this.openInput}
                          class="bg-purple-300 focus:outline-none hover:bg-purple-400 shadow-md p-1 pr-2 rounded-md flex items-center text-center font-medium text-white"
                        >
                          <svg
                            fill="none"
                            class="w-6 text-white mx-auto"
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
                  </div>
                </>
              )}

              {isOpenPromise ? (
                <UsergoalEdit
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
                  <div class="mt-2 pb-4 inline-flex items-center w-full">
                    <span class="pt-1 mr-12 text-lg font-medium text-gray-800">
                      나의다짐
                    </span>

                    <div class="flex justify-between items-center md:w-9/12">
                      <div class="md:w-10/12 flex truncate">
                        <img class="w-5 h-8 pt-2 mr-3" src={mygoal}></img>
                        <span class="truncate pt-2 pr-10 text-xl text-gray-800">
                          {promise ? promise : "목표를 위한 다짐을 남겨보세요"}
                        </span>
                      </div>

                      <div>
                        <button
                          name="isOpenPromise"
                          onClick={this.openInput}
                          class="bg-purple-300 focus:outline-none hover:bg-purple-400 shadow-md p-1 pr-2 rounded-md flex items-center text-center font-medium text-white"
                        >
                          <svg
                            fill="none"
                            class="w-6 text-white mx-auto"
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
                  </div>
                </>
              )}

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
                  <div class="mt-2 pb-4 inline-flex w-full items-center">
                    <span class="pt-1 mr-20 text-lg font-medium text-gray-800">
                      성별
                    </span>
                    <div class="flex justify-between items-center md:w-9/12">
                      <div class="flex">
                        <img class="w-5 h-8 pt-2 mr-3" src={seximg}></img>
                        <span class="pt-2 pr-10 text-xl text-gray-800">
                          {sex ? sex : "성별을 선택해주세요"}
                        </span>
                      </div>
                      <div>
                        <button
                          name="isOpenSex"
                          onClick={this.openInput}
                          class="bg-purple-300 focus:outline-none hover:bg-purple-400 shadow-md p-1 pr-2 rounded-md flex items-center text-center font-medium text-white"
                        >
                          <svg
                            fill="none"
                            class="w-6 text-white mx-auto"
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
                  </div>
                </>
              )}

              {isOpenBirth ? (
                <UserbirthEdit
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
                  <div class="mt-2 pb-4 inline-flex items-center w-full">
                    <span class="pt-1 mr-12 text-lg font-medium text-gray-800">
                      생년월일
                    </span>

                    <div class="flex justify-between items-center md:w-9/12">
                      <div class="flex">
                        <img class="w-5 h-8 pt-2 mr-3" src={birthimg}></img>
                        <span class="pt-2 pr-10 text-xl text-gray-800">
                          {birth ? birth : "생년월일을 설정하세요"}
                        </span>
                      </div>

                      <div>
                        <button
                          name="isOpenBirth"
                          onClick={this.openInput}
                          class="bg-purple-300 focus:outline-none hover:bg-purple-400 shadow-md p-1 pr-2 rounded-md flex items-center text-center font-medium text-white"
                        >
                          <svg
                            fill="none"
                            class="w-6 text-white mx-auto"
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
                  </div>
                </>
              )}
            </div>
            {/* 여기까지 한박스 */}
          </div>
          {/* 프로필까지 */}
        </div>
        {/* 모두다 */}

        <hr class="mt-10" />
        <div class="out mt-10 text-right text-gray-500">
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
