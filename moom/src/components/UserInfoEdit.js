import { Component } from "react";
import { withRouter } from "react-router-dom";

import { BASEURL } from "../helpurl";

import axios from "axios";
axios.defaults.withCredentials = true;

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

  handleInputUserEdit = (e) => {
    let target = e.target;
    let value = target.value;
    let name = target.name;
    this.setState({
      [name]: value,
    });
  };

  handleUserEdit = (e) => {
    let key = e.target.name;
    const { promise, nikname, password, birth } = this.state;
    console.log(promise);
    console.log(nikname);
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
