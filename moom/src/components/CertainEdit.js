import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import SaveIcon from "@material-ui/icons/Save";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";

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
    let id = e.currentTarget.name;
    console.log(id);
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
    let id = e.currentTarget.name;
    console.log(id);
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
    let unit = "CM";
    if (basicPartName === "body_fat") {
      unit = "%";
    } else if (basicPartName === "weight") {
      unit = "KG";
    }

    return (
      <>
        <div>
          {isOpenInputCertain ? (
            <>
              <div>
                <span class="ml-1 text-sm font-medium text-purple-900 rounded p-1 bg-purple-100">
                  {date}
                </span>
              </div>
              <div class="flex justify-between">
                <div>
                  <span class="font-extrabold text-6xl text-gray-900">
                    {value}
                  </span>
                  <span class="ml-1 mt-7 text-2xl text-purple-900 font-medium">
                    {unit}
                  </span>
                </div>
                <div class="mt-8">
                  <input
                    class="mr-3 border-b border-solid border-gray-300 focus:outline-none focus:text-gray"
                    type="text"
                    placeholder="수정할 수치를 입력하세요"
                    onChange={this.handleInputCertain}
                  />
                  <button
                    class="opacity-50 mr-1 focus:outline-none"
                    name={id}
                    onClick={this.handleCertainPutClick}
                  >
                    <SaveIcon />
                  </button>
                  <button
                    class="opacity-50 mr-1 focus:outline-none"
                    onClick={this.closeInputCertain}
                  >
                    <CloseOutlinedIcon />
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              <div>
                <span class="ml-1 text-sm font-medium text-purple-900 rounded p-1 bg-purple-100">
                  {date}
                </span>
              </div>
              <div class="flex justify-between">
                <div>
                  <span class="font-extrabold text-6xl text-gray-900">
                    {value}
                  </span>
                  <span class="ml-1 mt-7 text-2xl text-purple-900 font-medium">
                    {unit}
                  </span>
                </div>

                <div class="mt-8 opacity-50">
                  <button
                    class="mr-1 focus:outline-none"
                    onClick={this.openInputCertain}
                  >
                    <CreateIcon />
                  </button>
                  <button
                    class="mr-1 focus:outline-none"
                    name={id}
                    onClick={this.handleCertainDeleteClick}
                  >
                    <DeleteIcon />
                  </button>
                  <button
                    class="mr-1 focus:outline-none"
                    onClick={this.props.handleDeleteEdit}
                  >
                    <CloseOutlinedIcon />
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </>
    );
  }
}

export default withRouter(CertainEdit);
