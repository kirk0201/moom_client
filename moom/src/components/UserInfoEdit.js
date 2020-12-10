import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { BASEURL } from "../helpurl";

import axios from "axios";
axios.defaults.withCredentials = true;

// TODO: 수정할 수 있는 데이터 형식에 따른 에러 메세지 확인
class UserInfoEdit extends Component {
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
    let value = target.value;
    let name = target.name;
    this.setState({
      [name]: value,
    });
  };

  // 저장 버튼 클릭시 회원정보 수정하는 axios요청 함수
  handleUserEdit = (e) => {
    let key = e.target.name;
    const { promise, nikname, password, birth } = this.state;
    axios
      .put(`${BASEURL}/user/edit`, {
        promise: promise,
        name: nikname,
        password: password,
        birth: birth,
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
    const { info, noInfo, name, type, what } = this.props;
    return (
      <>
        <input
          name={name}
          type={type}
          placeholder={info ? info : noInfo}
          onChange={this.handleInputUserEdit}
        />
        <button name={what} onClick={this.handleUserEdit}>
          저장
        </button>
      </>
    );
  }
}

export default withRouter(UserInfoEdit);
