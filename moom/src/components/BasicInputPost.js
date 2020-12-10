import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { BASEURL } from "../helpurl";

import axios from "axios";
axios.defaults.withCredentials = true;

// TODO: 기록할 수 있는 데이터 형식에 따른 에러 메세지 확인
class BasicInputPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body_fat: null,
      weight: null,
      shoulder: null,
      chest: null,
      waist: null,
      hip: null,
      thigh: null,
      errorMessage: null,
    };
  }

  // input 이벤트시 서버에게 보낼 정보 setState하는 함수
  handleInputBasicPost = (e) => {
    let target = e.target;
    let value = target.value;
    let name = target.name;
    this.setState({
      [name]: value,
    });
  };

  // 저장 버튼 클릭시 새로운 수치를 추가하는 axios요청 함수
  handleBasicPost = (e) => {
    let key = e.target.value;
    let part_name = e.target.name;
    let part_value = null;
    const { body_fat, weight, shoulder, chest, waist, hip, thigh } = this.state;
    if (body_fat) {
      part_value = body_fat;
    } else if (weight) {
      part_value = weight;
    } else if (shoulder) {
      part_value = shoulder;
    } else if (chest) {
      part_value = chest;
    } else if (waist) {
      part_value = waist;
    } else if (hip) {
      part_value = hip;
    } else if (thigh) {
      part_value = thigh;
    } else {
      return this.setState({
        errorMessage: "입력한 수치를 확인해주세요",
      });
    }
    console.log(part_value);
    console.log(part_name);
    axios
      .post(`${BASEURL}/data/write`, {
        value: part_value,
        part_name: part_name,
      })
      .then((res) => {
        console.log(res.data);
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
          type="text"
          name={name}
          placeholder="새로운 수치를 입력해주세요"
          onChange={this.handleInputBasicPost}
        />
        <button name={name} value={what} onClick={this.handleBasicPost}>
          저장
        </button>
        <button name={what} onClick={this.handlecloseInput}>
          취소
        </button>
        <div>{this.state.errorMessage}</div>
      </>
    );
  }
}

export default withRouter(BasicInputPost);
