import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { BASEURL } from "../helpurl";
import axios from "axios";
axios.defaults.withCredentials = true;

class CertainGoal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
      errorMessage: null,
    };
  }

  // handleInputBasicPost = (e) => {
  //   let value = e.target.value;
  //   this.setState({
  //     value: value,
  //   });
  // };

  // 목표등록 버튼 클릭시 목표를 등록하는  axios요청 함수
  // handleToggleClick = () => {
  //   axios
  //     .post(`${BASEURL}/data/write`, {
  //       value: ㅇㅇ,
  //       part_name: ㅇㅇ,
  //     })
  //     .then((res) => {})
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // };

  render() {
    const { goal, name, partName, recent } = this.props;

    return (
      <>
        <div>
          {goal ? (
            <>
              <span>
                {name}님의 목표는 {goal}입니다.
              </span>
              <div>
                {partName}의 가장 최근 수치는 {recent}입니다.
              </div>
              <div>목표까지 뭐뭐 남았습니다.</div>
            </>
          ) : (
            <>
              <input type="text" />
              <button>등록</button>
              <div>
                {partName}의 가장 최근 수치는{recent}입니다.
              </div>
            </>
          )}
        </div>
      </>
    );
  }
}

export default withRouter(CertainGoal);
