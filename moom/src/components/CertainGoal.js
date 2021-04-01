import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import SaveIcon from "@material-ui/icons/Save";
import AddIcon from "@material-ui/icons/Add";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import "../css/CertainGoal.css"
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
    let part_name = e.currentTarget.name;
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
    let part_name = e.currentTarget.name;
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
    let part_name = e.currentTarget.name;
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
    const { goal, partName, recent } = this.props;
    const { isOpenInputGaol } = this.state;

    let gap = goal - recent;
    if (Math.sign(gap) === 1) {
      gap = "+" + gap.toFixed(1);
    } else {
      gap = gap.toFixed(1);
    }

    let unit = "CM";
    if (partName === "body_fat") {
      unit = "%";
    } else if (partName === "weight") {
      unit = "KG";
    }

    let part = partName;
    if (part) {
      if (part.toUpperCase()) {
        part = part.toUpperCase();
      }
    }

    return (
      <>
        <div>
          {goal ? (
            <>
              {isOpenInputGaol ? (
                <>
                  <div className="flex pb-2 space-x-10">
                    <div className="pb-2 w-1/2 shadow-md border border-dashed border-gray-300 rounded-2xl">
                      <div className="mt-2 mb-2 mx-10 text-base text-center border-b-2 shadow">
                        <span className="tracking-tight text-gray-500 font-bold">
                          YOUR
                        </span>
                        <span className="pl-2 tracking-tight text-purple-600 font-bold">
                          GOAL
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <div className="pl-11 text-center mt-3">
                          <input
                            className="p-1 text-sm border-b border-solid border-gray-300 focus:outline-none text-gray-800"
                            type="text"
                            placeholder="수정할 목표를 입력하세요"
                            onChange={this.handleInputGoal}
                          />
                        </div>
                        <div className="ml-1 opacity-50 mt-3 mr-3">
                          <button
                            name={partName}
                            className="mr-1 focus:outline-none"
                            onClick={this.handleGoalPutClick}
                          >
                            <SaveIcon />
                          </button>
                          <button
                            className="focus:outline-none"
                            onClick={this.closeInputGoal}
                          >
                            <CloseOutlinedIcon />
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="pb-2 w-1/2 shadow-md border border-dashed border-gray-300 rounded-2xl">
                      <div className="mt-2 mb-2 mx-10 text-base text-center border-b-2 shadow">
                        <span className="tracking-tight text-gray-500 font-bold">
                          RECENT
                        </span>
                        <span className="pl-2 tracking-tight text-purple-600 font-bold">
                          {part}
                        </span>
                      </div>
                      <div className="text-center mb-1">
                        <span className="font-extrabold text-4xl text-gray-900">
                          {recent}
                        </span>
                        <span className="tracking-tight font-bold text-gray-500">
                          {unit}
                        </span>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex pb-5 space-x-10">
                    <div className="pb-2 w-1/2 shadow-md border border-dashed border-gray-300 rounded-2xl">
                      <div className="mt-2 mb-2 mx-10 text-base text-center border-b-2 shadow">
                        <span className="login_input_title tracking-tight text-gray-500 font-bold">
                          YOUR
                        </span>
                        <span className="login_input_title pl-2 tracking-tight text-purple-600 font-bold">
                          GOAL
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <div className="login_input_left pl-28 text-center mb-1">
                          <span className="font-extrabold text-4xl text-gray-900">
                            {goal}
                          </span>
                          <span className="tracking-tight font-bold text-gray-500">
                            {unit}
                          </span>
                        </div>
                        <div className="opacity-50 mt-3 mr-3">
                          <button
                            className="mr-1 focus:outline-none"
                            onClick={this.openInputGoal}
                          >
                            <CreateIcon />
                          </button>
                          <button
                            className="focus:outline-none"
                            name={partName}
                            onClick={this.handleGoalDeleteClick}
                          >
                            <DeleteIcon />
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="pb-2 w-1/2 shadow-md border border-dashed border-gray-300 rounded-2xl">
                      <div className="mt-2 mb-2 mx-10 text-base text-center border-b-2 shadow">
                        <span className="login_input_title tracking-tight text-gray-500 font-bold">
                          RECENT
                        </span>
                        <span className="login_input_title pl-2 tracking-tight text-purple-600 font-bold">
                          {part}
                        </span>
                      </div>
                      <div className="text-center mb-1">
                        <span className="font-extrabold text-4xl text-gray-900">
                          {recent}
                        </span>
                        <span className="tracking-tight font-bold text-gray-500">
                          {unit}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-1 flex justify-center items-center shadow-md border border-dashed border-gray-300 rounded-2xl">
                    <span className="pr-1 text-2xl text-gray-900 font-bold">
                      목표
                    </span>
                    <span className="pr-5 pt-1 text-sm text-gray-800 font-semibold">
                      까지
                    </span>
                    <span className="text-purple-800 tracking-tight pt-2 animate-bounce font-extrabold text-4xl">
                      {gap}
                    </span>
                    <span className="pl-5 pt-1 text-sm text-gray-800 font-semibold">
                      남았습니다!
                    </span>
                  </div>
                </>
              )}
            </>
          ) : (
            <>
              {isOpenInputGaol ? (
                <>
                  <div className="flex pb-2 space-x-10">
                    <div className="pb-2 w-1/2 shadow-md border border-dashed border-gray-300 rounded-2xl">
                      <div className="mt-2 mb-2 mx-10 text-base text-center border-b-2 shadow">
                        <span className="tracking-tight text-gray-500 font-bold">
                          YOUR
                        </span>
                        <span className="pl-2 tracking-tight text-purple-600 font-bold">
                          GOAL
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <div className="pl-11 text-center mt-3">
                          <input
                            className="p-1 text-sm border-b border-solid border-gray-300 focus:outline-none text-gray-800"
                            type="text"
                            placeholder="새로운 목표를 입력하세요"
                            onChange={this.handleInputGoal}
                          />
                        </div>
                        <div className="ml-1 opacity-50 mt-3 mr-3">
                          <button
                            name={partName}
                            className="mr-1 focus:outline-none"
                            onClick={this.handleGoalPostClick}
                          >
                            <SaveIcon />
                          </button>
                          <button
                            className="focus:outline-none"
                            onClick={this.closeInputGoal}
                          >
                            <CloseOutlinedIcon />
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="pb-2 w-1/2 shadow-md border border-dashed border-gray-300 rounded-2xl">
                      <div className="mt-2 mb-2 mx-10 text-base text-center border-b-2 shadow">
                        <span className="tracking-tight text-gray-500 font-bold">
                          RECENT
                        </span>
                        <span className="pl-2 tracking-tight text-purple-600 font-bold">
                          {part}
                        </span>
                      </div>
                      <div className="text-center mb-1">
                        <span className="font-extrabold text-4xl text-gray-900">
                          {recent}
                        </span>
                        <span className="tracking-tight font-bold text-gray-500">
                          {unit}
                        </span>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex pb-2 space-x-10">
                    <div className="pb-2 w-1/2 shadow-md border border-dashed border-gray-300 rounded-2xl">
                      <div className="mt-2 mb-2 mx-10 text-base text-center border-b-2 shadow">
                        <span className="tracking-tight text-gray-500 font-bold">
                          YOUR
                        </span>
                        <span className="pl-2 tracking-tight text-purple-600 font-bold">
                          GOAL
                        </span>
                      </div>

                      <div className="text-center mt-3 opacity-70">
                        <button
                          className="m-auto focus:outline-none"
                          onClick={this.openInputGoal}
                        >
                          <AddIcon />
                        </button>
                      </div>
                    </div>

                    <div className="pb-2 w-1/2 shadow-md border border-dashed border-gray-300 rounded-2xl">
                      <div className="mt-2 mb-2 mx-10 text-base text-center border-b-2 shadow">
                        <span className="tracking-tight text-gray-500 font-bold">
                          RECENT
                        </span>
                        <span className="pl-2 tracking-tight text-purple-600 font-bold">
                          {part}
                        </span>
                      </div>
                      <div className="text-center mb-1">
                        <span className="font-extrabold text-4xl text-gray-900">
                          {recent}
                        </span>
                        <span className="tracking-tight font-bold text-gray-500">
                          {unit}
                        </span>
                      </div>
                    </div>
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
