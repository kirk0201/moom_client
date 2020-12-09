import React, { Component } from "react";
import { withRouter } from "react-router-dom";

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
    console.log(key);
    const { sex } = this.state;
    axios
      .put(`${BASEURL}/user/edit`, {
        sex: sex,
      })
      .then((res) => {
        console.log(res.data);
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
        <select value={sex} onChange={this.handleSelectUserEdit}>
          <option value="">선택</option>
          <option value="female">female</option>
          <option value="male">male</option>
        </select>
        <button name={what} onClick={this.handleUserEditSex}>
          저장
        </button>
      </>
    );
  }
}

export default withRouter(UserInfoSex);
