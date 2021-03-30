import React, { Component, useContext } from "react";
import { User } from "../store/store";
import "../css/ExperienceGoal.css"

export default class ExperienceGoal extends Component {
  static contextType = User;
  constructor(props) {
    super(props);

    this.state = {
      unitL: this.props.unitL,
      unitR: this.props.unitR,
    };
  }
  handleGoalChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const context = this.context.actions;
    if (this.props.isClick === false) {
      switch (name) {
        case "isClick1":
          context.setGoal1(value);
          context.setGoal_1(value * 2.205);
          break;
        case "isClick2":
          context.setGoal2(value);
          context.setGoal_2(value);
          break;
        case "isClick3":
          context.setGoal3(value);
          context.setGoal_3(value / 2.54);
          break;
        case "isClick4":
          context.setGoal4(value);
          context.setGoal_4(value / 2.54);
          break;
        case "isClick5":
          context.setGoal5(value);
          context.setGoal_5(value / 2.54);
          break;
        case "isClick6":
          context.setGoal6(value);
          context.setGoal_6(value / 2.54);
          break;
        case "isClick7":
          context.setGoal7(value);
          context.setGoal_7(value / 2.54);
          break;
        default:
          break;
      }
    } else if (this.props.isClick === true) {
      switch (name) {
        case "isClick1":
          context.setGoal1(value / 2.205);
          context.setGoal_1(value);
          break;
        case "isClick2":
          context.setGoal2(value);
          context.setGoal_2(value);
          break;
        case "isClick3":
          context.setGoal3(value * 2.54);
          context.setGoal_3(value);
          break;
        case "isClick4":
          context.setGoal4(value * 2.54);
          context.setGoal_4(value);
          break;
        case "isClick5":
          context.setGoal5(value * 2.54);
          context.setGoal_5(value);
          break;
        case "isClick6":
          context.setGoal6(value * 2.54);
          context.setGoal_6(value);
          break;
        case "isClick7":
          context.setGoal7(value * 2.54);
          context.setGoal_7(value);
          break;
        default:
          break;
      }
    }
  };

  render() {
    var resultL = 0;
    var resultR = 0;
    const context = this.context.state;
    // this.props.isClick === false  -> 단위 변환 전 수치
    // resultL : 부위 값
    // resultR : 목표 값 - 부위 값
    if (this.props.isClick === false) {
      switch (this.props.name) {
        case "Weight":
          resultL = context.goal1;
          if (context.goal1 && context.weightL) {
            resultR = context.goal1 - context.weightL;
          }
          break;
        case "Body fat":
          resultL = context.goal2;
          if (context.goal2 && context.body_fatL) {
            resultR = context.goal2 - context.body_fatL;
          }
          break;
        case "Shoulder":
          resultL = context.goal3;
          if (context.goal3 && context.shoulderL) {
            resultR = context.goal3 - context.shoulderL;
          }
          break;
        case "Chest":
          resultL = context.goal4;
          if (context.goal4 && context.chestL) {
            resultR = context.goal4 - context.chestL;
          }
          break;
        case "Waist":
          resultL = context.goal5;
          if (context.goal5 && context.waistL) {
            resultR = context.goal5 - context.waistL;
          }
          break;
        case "Hip":
          resultL = context.goal6;
          if (context.goal6 && context.hipL) {
            resultR = context.goal6 - context.hipL;
          }
          break;
        case "Thigh":
          resultL = context.goal7;
          if (context.goal7 && context.thighL) {
            resultR = context.goal7 - context.thighL;
          }
          break;
        default:
          break;
      }
    }
    // this.props.isClick === true -> 단위 변환 후 수치
    // resultL : 단위 변환된 목표값
    // resultR : 단위 변환된 목표 값 - 단위 변환된 부위 값
    else if (this.props.isClick === true) {
      switch (this.props.name) {
        case "Weight":
          resultL = context.goal_1;
          resultR = context.goal_1 - context.weightR;

          break;
        case "Body fat":
          resultL = context.goal_2;
          resultR = context.goal_2 - context.body_fatL;
          break;
        case "Shoulder":
          resultL = context.goal_3;
          resultR = context.goal_3 - context.shoulderR;
          break;
        case "Chest":
          resultL = context.goal_4;
          resultR = context.goal_4 - context.chestR;
          break;
        case "Waist":
          resultL = context.goal_5;
          resultR = context.goal_5 - context.waistR;
          break;
        case "Hip":
          resultL = context.goal_6;
          resultR = context.goal_6 - context.hipR;
          break;
        case "Thigh":
          resultL = context.goal_7;
          resultR = context.goal_7 - context.thighR;
          break;
        default:
          break;
      }
    }

    const temp = this.props.temp;
    let currentValue;
    if (temp === "isClick1")
      this.props.isClick
        ? (currentValue = context.weightR)
        : (currentValue = context.weightL);
    else if (temp === "isClick2")
      this.props.isClick
        ? (currentValue = context.body_fatR)
        : (currentValue = context.body_fatL);
    else if (temp === "isClick3")
      this.props.isClick
        ? (currentValue = context.shoulderR)
        : (currentValue = context.shoulderL);
    else if (temp === "isClick4")
      this.props.isClick
        ? (currentValue = context.chestR)
        : (currentValue = context.chestL);
    else if (temp === "isClick5")
      this.props.isClick
        ? (currentValue = context.waistR)
        : (currentValue = context.waistL);
    else if (temp === "isClick6")
      this.props.isClick
        ? (currentValue = context.hipR)
        : (currentValue = context.hipL);
    else if (temp === "isClick7")
      this.props.isClick
        ? (currentValue = context.thighR)
        : (currentValue = context.thighL);

    return (
      <>
        {this.props.show ? (
          // <div className="container border-t border-l border-r border-solid rounded-bl-3xl rounded-br-3xl border-gray-200  bg-gray-50 rounded-md">
            <div className=" border-4 border-gray-400 shadow-2xl rounded-lg p-6">
              {/* <!-- 묶음 입력 --> */}
              <div className="flex pb-7">
                {/* <!-- 최측 입력  div --> */}
                <div className="w-1/2 shadow-xl text-2xl border-solid border-2 border-gray-200 rounded-2xl">
                  <div className=" mt-2 mb-1 mx-4 shadow text-center border-gray-200 border-solid border-b-2">
                    <span className="goal_title subtext1 mr-2 text-gray-400 font-bold">
                      Your 
                    </span>
                    <span className="goal_title subtext2 text-purple-600 font-bold">
                       Goal
                    </span>
                  </div>
                  <div className="text-center h-14">
                    <input
                      type="number"
                      min="0"
                      name={this.props.temp}
                      onChange={this.handleGoalChange}
                      maxLength="4"
                      value={resultL}
                      className="input_text h-full font-bold hover:bg-gray-200 focus:outline-none w-1/2 text-center"
                    />
                    <span className="input_text text-gray-400 font-bold">
                      {this.props.isClick ? this.state.unitR : this.state.unitL}
                    </span>
                  </div>
                </div>
                {/* <!-- 우측 입력 --> */}
                <div className=" w-1/2 shadow-xl text-2xl border-solid border-2 border-gray-200 rounded-2xl">
                  <div className="mt-2 mb-1 shadow mx-4 text-center border-b-2 border-solid border-gray-200">
                    <span className="goal_title text-gray-400  font-bold">Current </span>
                    <span className="goal_title text-purple-600 font-bold">
                      {this.props.name}
                    </span>
                  </div>
                  <div className="goal_unit text-center h-14">
                    <input
                      type="text"
                      readOnly
                      value={currentValue}
                      className="input_text h-full focus:outline-none font-bold cursor-not-allowed w-1/2 text-center"
                    />
                    <span className="input_text text-gray-400 font-bold">
                      {this.props.isClick ? this.state.unitR : this.state.unitL}
                    </span>
                  </div>
                </div>
              </div>
              {/* <!-- 하단 입력 --> */}

              <div className="result_text pb-2 border-2 border-solid border-gray-200 rounded-lg h-1/3 shadow-lg">
                <div className="flex justify-center mt-3">
                  <span className="pr-2 text-blue-400 animate-bounce font-bold">
                    목표
                  </span>
                  <span className="">까지</span>
                  <input
                    type="text"
                    readOnly
                    className={
                      Number(resultR) < 0
                        ? " text-red-500 focus:outline-none font-bold border-none w-1/4 text-center border "
                        : "text-blue-500 focus:outline-none font-bold border-none w-1/4 text-center border "
                    }
                    // className={"border-none w-1/4 text-center border "}
                    value={resultR}
                  />
                  <span className="pr-2 font-bold text-gray-500">
                    {this.props.isClick ? this.state.unitR : this.state.unitL}
                  </span>
                  <span className="">남았습니다</span>
                  <span className=" font-bold italic ml-2">!!!</span>
                </div>
              </div>
            {/* </div> */}
          </div>
        ) : null}
      </>
    );
  }
}
