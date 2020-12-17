import React, { Component } from "react";
import { User } from "../store/store";
import "../css/ToggleButton.css";
import "../index.css";
export default class ExperienceInput extends Component {
  // class컴퍼넌트에서 contexAPI 불러오기
  static contextType = User;
  constructor(props) {
    super(props);
    this.radioInput = React.createRef();
    this.state = {
      unitL: this.props.unitL,
      unitR: this.props.unitR,
      // isClick: false,

      isError: false,
    };
  }
  // 단위 변환하기 전과 후의 값을 모두 가지고 있기 위해 2개씩의 매서드 필요

  componentDidMount() {
    console.log(this.radioInput.current);
  }
  radioOn = (e) => {
    console.log(e.target);
  };
  handleBodyChange = (e) => {
    const context = this.context.actions;
    const value = e.target.value;
    // set~~~L : 해당 부위 값
    // set~~~R : 해당 단위 변환 수치

    // 소수점 둘째자리까지 작성되면 Error

    if (value.indexOf(".") !== -1) {
      let numLength = value.substring(value.indexOf(".") + 1);
      if (numLength > 2) {
        this.setState({
          isError: true,
        });
      } else if (numLength < 2) {
        this.setState({
          isError: false,
        });
      }
    }
    if (this.props.isClick === false) {
      switch (this.props.name) {
        case "Weight":
          // 300kg 이하 입력
          if (value <= 300) {
            context.setWeightL(value);
            context.setWeightR((value * 2.205).toFixed(2));
          } else {
            context.setWeightL(value);
          }
          break;
        case "Body fat":
          // 100% 이하 입력
          if (value <= 100) {
            context.setBody_fatL(value);
            context.setBody_fatR(value);
          }
          break;
        case "Shoulder":
          // 200cm 이하 입력
          if (value <= 200) {
            context.setShoulderL(value);
            context.setShoulderR(value / (2.54).toFixed(1));
          }
          break;
        case "Chest":
          if (value <= 200) {
            context.setChestL(value);
            context.setChestR(value / (2.54).toFixed(1));
          }
          break;
        case "Waist":
          if (value <= 200) {
            context.setWaistL(value);
            context.setWaistR(value / (2.54).toFixed(1));
          }
          break;
        case "Hip":
          if (value <= 200) {
            context.setHipL(value);
            context.setHipR(value / (2.54).toFixed(1));
          }
          break;
        case "Thigh":
          if (value <= 200) {
            context.setThighL(value);
            context.setThighR(value / (2.54).toFixed(1));
          }
          break;
        default:
          break;
      }
    }
    // isClick으로 단위를 변환했으므로 변환 전 공식의 반대로 작성해야함
    else if (this.props.isClick === true) {
      switch (this.props.name) {
        case "Weight":
          // 300lb 이하 입력 가능
          if (value <= 300) {
            context.setWeightL((value / 2.205).toFixed(2));
            context.setWeightR(value);
          }
          break;
        case "Body fat":
          // 100% 이하 입력 가능
          if (value <= 100) {
            context.setBody_fatL(value);
            context.setBody_fatR(value);
          }
          break;
        case "Shoulder":
          // 508in 이하 입력 가능
          if (value <= 508) {
            context.setShoulderL(value * (2.54).toFixed(1));
            context.setShoulderR(value);
          }
          break;
        case "Chest":
          if (value <= 508) {
            context.setChestL(value * (2.54).toFixed(1));
            context.setChestR(value);
          }
          break;
        case "Waist":
          if (value <= 508) {
            context.setWaistL(value * (2.54).toFixed(1));
            context.setWaistR(value);
          }
          break;
        case "Hip":
          if (value <= 508) {
            context.setHipL(value * (2.54).toFixed(1));
            context.setHipR(value);
          }
          break;
        case "Thigh":
          if (value <= 508) {
            context.setThighL(value * (2.54).toFixed(1));
            context.setThighR(value);
          }
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
    // this.props.isClick === false -> 단위 변환 전
    // L에 해당 부위 값, R에 단위 변환 후 값 할당
    if (this.props.isClick === false) {
      if (this.props.name === "Weight") {
        resultL = context.weightL;
        resultR = context.weightR;
      } else if (this.props.name === "Body fat") {
        resultL = context.body_fatL;
        resultR = context.body_fatR;
      } else if (this.props.name === "Shoulder") {
        resultL = context.shoulderL;
        resultR = context.shoulderR;
      } else if (this.props.name === "Chest") {
        resultL = context.chestL;
        resultR = context.chestR;
      } else if (this.props.name === "Waist") {
        resultL = context.waistL;
        resultR = context.waistR;
      } else if (this.props.name === "Hip") {
        resultL = context.hipL;
        resultR = context.hipR;
      } else if (this.props.name === "Thigh") {
        resultL = context.thighL;
        resultR = context.thighR;
      }
    }
    // this.props.isClick === true -> 단위 변환 후
    // 단위 변환 이후이므로 기존 L, R의 위치를 바꿈
    else if (this.props.isClick === true) {
      if (this.props.name === "Weight") {
        resultL = context.weightR;
        resultR = context.weightL;
      } else if (this.props.name === "Body fat") {
        resultL = context.body_fatR;
        resultR = context.body_fatL;
      } else if (this.props.name === "Shoulder") {
        resultL = context.shoulderR;
        resultR = context.shoulderL;
      } else if (this.props.name === "Chest") {
        resultL = context.chestR;
        resultR = context.chestL;
      } else if (this.props.name === "Waist") {
        resultL = context.waistR;
        resultR = context.waistL;
      } else if (this.props.name === "Hip") {
        resultL = context.hipR;
        resultR = context.hipL;
      } else if (this.props.name === "Thigh") {
        resultL = context.thighR;
        resultR = context.thighL;
      }
    }
    // 버튼 스타일
    let noError =
      " border-b-4 shadow-lg hover:bg-gray-200 rounded-md text-3xl w-3/4 text-center focus:outline-none hover:border-blue-300 mb-2 ml-2";
    let isError =
      " border-b-4 border-red-200 text-red-500 shadow-lg hover:bg-gray-200 rounded-md text-3xl w-3/4 text-center focus:outline-none hover:border-red-300 mb-2 ml-2";

    // 목표 컴퍼넌트 state 관리
    let onToggleName;
    let temp = this.props.temp;
    if (temp === "isClick1") {
      onToggleName = `btn-change_on1 font-bold flex items-center p-1 rounded-lg w-12 h-6 cursor-pointer`;
    } else if (temp === "isClick2")
      onToggleName = `btn-change_on2 font-bold flex items-center p-1 rounded-lg w-12 h-6 cursor-pointer`;
    else if (temp === "isClick3")
      onToggleName = `btn-change_on3 font-bold flex items-center p-1 rounded-lg w-12 h-6 cursor-pointer`;
    else if (temp === "isClick4")
      onToggleName = `btn-change_on4 font-bold flex items-center p-1 rounded-lg w-12 h-6 cursor-pointer`;
    else if (temp === "isClick5")
      onToggleName = `btn-change_on5 font-bold flex items-center p-1 rounded-lg w-12 h-6 cursor-pointer`;
    else if (temp === "isClick6")
      onToggleName = `btn-change_on6 font-bold flex items-center p-1 rounded-lg w-12 h-6 cursor-pointer`;
    else if (temp === "isClick7")
      onToggleName = `btn-change_on7 font-bold flex items-center p-1 rounded-lg w-12 h-6 cursor-pointer`;

    return (
      <>
        {/* Container (div * 3) */}
        <div className="flex shadow-xl m-1 mb-4 h-24 bg-white rounded-md border border-dashed border-gray-300 hover:border-gray-500">
          {/* 좌측 div */}
          <div className="flex flex-col w-2/6">
            <div className="flex ml-3 text-2xl font-bold text-purple-600 hover:text-purple-400">
              {this.props.name}
            </div>
            <div className="flex flex-row h-full">
              {/* TODO: 좌측 인풋 */}
              <input
                type="number"
                min="0"
                maxLength="5"
                onChange={this.handleBodyChange}
                value={resultL}
                className={this.state.isError ? isError : noError}
              ></input>
              <div className="mt-4 flex w-1/4 h-ful text-2xl text-gray-400 font-bold">
                {this.props.isClick ? this.state.unitR : this.state.unitL}
              </div>
            </div>
          </div>
          {/* 중간 div */}
          {this.props.name === "Body fat" ? (
            <div className="flex flex-col font-bold w-1/6 justify-evenly ">
              <button
                name={this.props.temp}
                onClick={this.props.handleButtonFalse}
                className="w-full border-b-4 font-bold focus:shadow-xl focus:bg-gray-500 border-gray-400 rounded-md h-1/3 justify-center justify-self-center focus:outline-none text-white rounded-br-3xl hover:bg-blue-300 bg-purple-300 rounded-tl-3xl border-black"
              >
                {this.state.unitR}
              </button>
            </div>
          ) : (
            <div className="flex flex-col font-bold w-1/6 justify-evenly">
              <button
                name={this.props.temp}
                onClick={this.props.handleButtonTrue}
                className="w-full border-b-4 font-bold focus:shadow-xl focus:bg-gray-500 border-gray-400 rounded-md h-1/3 focus:outline-none hover:bg-blue-300 rounded-br-3xl text-white justify-center bg-purple-300 rounded-tl-3xl"
              >
                {this.state.unitL}
              </button>
              <button
                name={this.props.temp}
                onClick={this.props.handleButtonFalse}
                className="w-full border-b-4 font-bold focus:shadow-xl focus:bg-gray-500 border-gray-400 rounded-md h-1/3 justify-center justify-self-center focus:outline-none text-white rounded-br-3xl hover:bg-blue-300 bg-purple-300 rounded-tl-3xl border-black"
              >
                {this.state.unitR}
              </button>
            </div>
          )}

          {/* 우측 div */}
          <div className="flex pl-6 flex-col w-2/6 ">
            <div className="flex ml-3 text-2xl font-bold text-purple-600 hover:text-purple-400 m">
              Convert
            </div>
            <div className="flex flex-row h-full">
              <input
                type="text"
                value={resultR}
                readOnly
                className=" shadow-lg flex-grow mb-2 border-b-4 hover:border-blue-300 w-4/5 bg-white text-3xl hover:bg-gray-200 hover:border-b-2 text-center focus:outline-none rounded-md"
              />
              <div className="flex-grow text-2xl text-gray-400 mt-4 font-bold ">
                {this.props.isClick ? this.state.unitL : this.state.unitR}
              </div>
            </div>
          </div>
          {/* 토글 */}
          <div className="flex w-1/6 justify-center items-center ">
            <div className="btn-status">
              <input
                type="checkbox"
                name="checkbox"
                id={this.props.temp}
                className="hidden"
                onClick={this.props.handleGoalState}
              />
              <label
                for={this.props.temp}
                ref={this.radioInput}
                className={
                  this.props.show
                    ? onToggleName
                    : "btn-change flex items-center p-1 rounded-lg w-12 h-6 cursor-pointer"
                }
              ></label>
            </div>
          </div>
        </div>
      </>
    );
  }
}
