import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { BASEURL } from "../helpurl";
import Alert from "@material-ui/lab/Alert";

import axios from "axios";
axios.defaults.withCredentials = true;

// TODO: 기록할 수 있는 데이터 형식에 따른 에러 메세지 확인
class BasicInputPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
      errorMessage: null,
    };
  }

  // input 이벤트시 서버에게 보낼 정보 setState하는 함수
  handleInputGoal = (e) => {
    let value = e.target.value;
    this.setState({
      value: value,
    });
  };

  // 저장 버튼 클릭시 새로운 수치를 추가하는 axios요청 함수
  handleBasicPost = (e) => {
    let key = e.target.value;
    let part_name = e.target.name;
    let part_value = null;
    const { value } = this.state;
    if (value) {
      part_value = value;
    } else {
      return this.setState({
        errorMessage: "입력한 수치를 확인해주세요",
      });
    }
    axios
      .post(`${BASEURL}/data/write`, {
        value: part_value,
        part_name: part_name,
      })
      .then((res) => {
        // 수정 성공하면 인풋창 사라짐
        this.props.closeInputBodyPost(key);
        // 수정 성공하면 그 수치정보를 다시 setState하는 함수
        this.props.handleRecentBody();
      })
      // TODO: 다른 상태코드에 따른 분기가 필요
      .catch((err) => {
        console.log(err.message);
      });
  };

  // 취소 버튼 클릭시 BasicInputPost을 닫는 함수
  handlecloseInput = (e) => {
    let key = e.target.name;
    this.props.closeInputBodyPost(key);
  };

  render() {
    const { name, what } = this.props;
    return (
      <>
        <input
          class="text-sm rounded-md focus:outline-none focus:text-gray"
          type="text"
          name={name}
          placeholder="새로운 수치를 입력하세요"
          onChange={this.handleInputGoal}
        />
        <button
          class="focus:outline-none shadow-md ml-5 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded p-1 text-xs"
          name={name}
          value={what}
          onClick={this.handleBasicPost}
        >
          SAVE
        </button>
        <button
          class="focus:outline-none shadow-md ml-1 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded p-1 text-xs"
          name={what}
          onClick={this.handlecloseInput}
        >
          CANCEL
        </button>
        {/* <div>
          <Alert severity="error">This is an error alert — check it out!</Alert>
          {this.state.errorMessage}
        </div> */}
      </>
    );
  }
}

export default withRouter(BasicInputPost);
