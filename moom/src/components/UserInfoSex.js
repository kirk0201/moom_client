import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import seximg from "../images/sex.png";

import { BASEURL } from "../helpurl";

import axios from "axios";
axios.defaults.withCredentials = true;

// TODO: 수정할 수 있는 데이터 형식에 따른 에러 메세지 확인
class UserInfoSex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sex: this.props.info,
    };
  }

  // select 이벤트시 서버에게 보낼 정보 저장하는 함수
  handleSelectUserEdit = (e) => {
    let target = e.target;
    let value = target.value;
    this.setState({
      sex: value,
    });
  };

  // 저장 버튼 클릭시 회원정보 수정하는 axios요청 함수
  handleUserEditSex = (e) => {
    let key = e.target.name;
    // console.log(key);
    const { sex } = this.state;
    axios
      .put(`${BASEURL}/user/edit`, {
        sex: sex,
      })
      .then((res) => {
        // console.log(res.data);
        // 수정 성공하면 인풋창 사라짐
        this.props.closeInput(key);
        // 수정 성공하면 그 유저정보를 다시 가지고 오는 함수
        this.props.handleLoginSuccess();
      })
      // TODO: 다른 상태코드에 따른 분기가 필요
      .catch((err) => {
        console.log(err.message);
      });
  };

  render() {
    const { sex } = this.state;
    const { what } = this.props;
    return (
      <>
        <hr />
        <div className="mt-2 pb-4 inline-flex items-center w-full">
          <span className="pt-1 mr-20 text-lg font-medium text-gray-800">성별</span>

          <div className="flex justify-between items-center md:w-9/12">
            <div className="flex truncate md:w-10/12">
              <img className="w-5 h-8 pt-2 mr-3 text-gray-500" src={seximg} alt="이미지 어디감?"></img>
              <select
                value={sex}
                onChange={this.handleSelectUserEdit}
                className="text-lg pt-2 pr-2 text-gray-900 w-10/12 focus:outline-none"
              >
                <option value="">선택</option>
                <option value="female">female</option>
                <option value="male">male</option>
              </select>
            </div>

            <div>
              <button
                name={what}
                onClick={this.handleUserEditSex}
                className="bg-purple-300 focus:outline-none hover:bg-purple-400 shadow-md p-1 pr-2 rounded-md flex items-center text-center font-medium text-white"
              >
                <svg
                  fill="none"
                  className="w-4 text-white mr-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
                저장
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(UserInfoSex);
