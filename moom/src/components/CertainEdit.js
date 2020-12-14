import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { BASEURL } from "../helpurl";
import axios from "axios";
axios.defaults.withCredentials = true;

// TODO: 기록할 수 있는 데이터 형식에 따른 에러 메세지 확인
class CertainEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenInputCertain: false,
      editValue: null,
      errorMessage: null,
    };
  }

  // input 이벤트시 서버에게 보낼 정보 setState하는 함수
  handleInputCertain = (e) => {
    let value = e.target.value;
    this.setState({
      value: value,
    });
  };

  // 수정 버튼 클릭시 input태그 열리는 함수
  openInputCertain = () => {
    this.setState({
      isOpenInputCertain: true,
    });
  };

  // 저장 혹은 취소 버튼 클릭시 input태그 닫는 함수
  closeInputCertain = () => {
    this.setState({
      isOpenInputCertain: false,
    });
  };

  // 삭제 버튼 클릭시 axios요청 함수
  handleCertainDeleteClick = (e) => {
    const { partName } = this.props;
    let id = e.target.name;
    axios
      .delete(`${BASEURL}/data/delete/${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        this.props.certainBodyDataGet(partName);
        this.props.certainBodyGoalGet(partName);
        this.props.handleDeleteEdit();
        this.props.handleRecentBody();
        this.props.basicBodyDataGet();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  // 저장 버튼 클릭시 axios요청 함수
  handleCertainPutClick = (e) => {
    const { partName } = this.props;
    const { value } = this.state;
    let id = e.target.name;
    axios
      .put(`${BASEURL}/data/edit/${id}`, {
        value: value,
      })
      .then((res) => {
        this.closeInputCertain();
        this.props.certainBodyDataGet(partName);
        this.props.certainBodyGoalGet(partName);
        this.props.handleDeleteEdit();
        this.props.handleRecentBody();
        this.props.basicBodyDataGet();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  render() {
    const { id, value, date, basicPartName } = this.props;
    const { isOpenInputCertain } = this.state;
    // 저장 혹은 삭제시 모달창 구현 예정!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    return (
      <>
        <div>
          {isOpenInputCertain ? (
            <>
              <div>{date}</div>
              <div>
                {basicPartName}: {value}
              </div>
              <input
                type="text"
                placeholder="수정할 수치를 입력해주세요!"
                onChange={this.handleInputCertain}
              />
              <button name={id} onClick={this.handleCertainPutClick}>
                저장
              </button>
              <button onClick={this.closeInputCertain}>취소</button>
            </>
          ) : (
            <>
              <div>{date}</div>
              <span>
                {basicPartName}: {value}
              </span>
              <button onClick={this.openInputCertain}>수정</button>
              <button name={id} onClick={this.handleCertainDeleteClick}>
                삭제
              </button>
              <button onClick={this.props.handleDeleteEdit}>취소</button>
            </>
          )}
        </div>
      </>
    );
  }
}

export default withRouter(CertainEdit);
