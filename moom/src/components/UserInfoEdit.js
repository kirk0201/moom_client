import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import nickname from "../images/nickname.png";
import { BASEURL } from "../helpurl";

import axios from "axios";
axios.defaults.withCredentials = true;

// TODO: 수정할 수 있는 데이터 형식에 따른 에러 메세지 확인
class UserinfoEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      promise: "",
      nikname: "",
      password: "",
      birth: "",
    };
  }

  // input 이벤트시 서버에게 보낼 정보 저장하는 함수
  handleInputUserEdit = (e) => {
    let target = e.target;
    let value = target.value; //내가쓴거
    let name = target.name; //promise
    this.setState({
      [name]: value,
    });
  };

  // 저장 버튼 클릭시 회원정보 수정하는 axios요청 함수
  handleUserEdit = (e) => {
    let key = e.target.name; //what=isOpenPromise
    const { promise, nikname, password, birth } = this.state;
    axios
      .put(`${BASEURL}/user/edit`, {
        promise: promise, //내가쓴거
        name: nikname,
        password: password,
        birth: birth,
      })
      .then((res) => {
        console.log(res.data);
        // 수정 성공하면 인풋창 사라짐
        this.props.closeInput(key); //isOpenPromise 를 false로 만듬
        // 수정 성공하면 그 유저정보를 다시 가지고 오는 함수
        this.props.handleLoginSuccess();
      })
      // TODO: 다른 상태코드에 따른 분기가 필요
      .catch((err) => {
        console.log(err.message);
      });
  };

  render() {
    const { info, noInfo, name, type, what } = this.props;
    return (
      <>
        <hr />
        <div class="md:inline-flex w-full space-y-4 md:space-y-0 p-1 text-gray-500 items-center">
          <h2 class="text-xl text-gray-900 md:w-3/12 max-w-sm mx-auto">닉네임</h2>

          <div class="md:w-6/12 w-full md:pl-9 max-w-sm mx-auto space-y-5 md:inline-flex pl-2">
            <div class="w-full inline-flex border-b">
              <img class="w-5 h-8 pt-2" src={nickname}></img>
              <input
                name={name} //"promise"
                type={type}
                placeholder={info ? info : noInfo}
                onChange={this.handleInputUserEdit}
                class="text-xl text-gray-900 w-11/12 focus:outline-none focus:text-gray-600 p-2 ml-4"
              />
            </div>
          </div>

          <div class="md:w-3/12 text-center md:pl-6">
            <button
              name={what}
              onClick={this.handleUserEdit}
              class="text-white w-full mx-auto max-w-sm rounded-md text-center bg-indigo-400 py-2 px-4 inline-flex items-center focus:outline-none md:float-right"
            >
              <svg
                fill="none"
                class="w-4 text-white mr-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              저장
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(UserinfoEdit);
