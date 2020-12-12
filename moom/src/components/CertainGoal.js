import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { BASEURL } from "../helpurl";
import axios from "axios";
axios.defaults.withCredentials = true;

// TODO: 기록할 수 있는 데이터 형식에 따른 에러 메세지 확인
class CertainGoal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenInputGaol: false,
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

  // 목표 등록 혹은 수정 버튼 클릭시 input태그 열리는 함수
  openInputGoal = () => {
    this.setState({
      isOpenInputGaol: true,
    });
  };

  // 목표 저장 버튼 클릭시 input태그 닫는 함수
  closeInputGoal = () => {
    this.setState({
      isOpenInputGaol: false,
    });
  };

  // 목표삭제 버튼 클릭시 axios요청 함수
  handleGoalDeleteClick = (e) => {
    let part_name = e.target.name;
    axios
      .delete(`${BASEURL}/data/goal`, {
        data: { part_name: part_name },
        withCredentials: true,
      })
      .then((res) => {
        this.props.certainBodyGoalGet(part_name);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  // 목표등록 버튼 클릭시 axios요청 함수
  handleGoalPostClick = (e) => {
    let part_name = e.target.name;
    const { value } = this.state;
    axios
      .post(`${BASEURL}/data/goal`, {
        part_name: part_name,
        value: value,
      })
      .then((res) => {
        this.props.certainBodyGoalGet(part_name);
        this.closeInputGoal();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  // 목표수정 버튼 클릭시 axios요청 함수
  handleGoalPutClick = (e) => {
    let part_name = e.target.name;
    const { value } = this.state;
    axios
      .put(`${BASEURL}/data/goal`, {
        part_name: part_name,
        value: value,
      })
      .then((res) => {
        this.props.certainBodyGoalGet(part_name);
        this.closeInputGoal();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  render() {
    const { goal, name, partName, recent } = this.props;
    const { isOpenInputGaol } = this.state;

    let gap = recent - goal;
    if (Math.sign(gap) === 1) {
      gap = "+" + gap.toFixed(1);
    } else {
      gap = gap.toFixed(1);
    }

    return (
      <>
        <div>
          {goal ? (
            <>
              {isOpenInputGaol ? (
                <>
                  <input
                    type="text"
                    placeholder="수정할 목표를 입력해주세요!"
                    onChange={this.handleInputGoal}
                  />
                  <button name={partName} onClick={this.handleGoalPutClick}>
                    저장
                  </button>
                  <button onClick={this.closeInputGoal}>취소</button>
                  <div>
                    {partName}의 가장 최근 수치는 {recent}입니다.
                  </div>
                </>
              ) : (
                <>
                  <span>
                    {name}님의 목표는 {goal}입니다.
                  </span>
                  <button onClick={this.openInputGoal}>수정</button>
                  <button name={partName} onClick={this.handleGoalDeleteClick}>
                    삭제
                  </button>
                  <div>
                    {partName}의 가장 최근 수치는 {recent}입니다.
                  </div>
                  <div>목표까지 {gap}남았습니다.</div>
                </>
              )}
            </>
          ) : (
            <>
              {isOpenInputGaol ? (
                <>
                  <input
                    type="text"
                    placeholder="새로운 목표를 등록해주세요!"
                    onChange={this.handleInputGoal}
                  />
                  <button name={partName} onClick={this.handleGoalPostClick}>
                    저장
                  </button>
                  <button onClick={this.closeInputGoal}>취소</button>
                  <div>
                    {partName}의 가장 최근 수치는{recent}입니다.
                  </div>
                </>
              ) : (
                <>
                  <span>목표를 등록해주세요!</span>
                  <button onClick={this.openInputGoal}>등록</button>
                  <div>
                    {partName}의 가장 최근 수치는{recent}입니다.
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </>
    );
  }
}

export default withRouter(CertainGoal);
