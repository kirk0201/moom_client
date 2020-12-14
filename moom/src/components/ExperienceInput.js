import React, { Component } from "react";
import { User } from "../store/store";

export default class ExperienceInput extends Component {
  // class컴퍼넌트에서 contexAPI 불러오기
  static contextType = User;
  constructor(props) {
    super(props);
    this.state = {
      unitL: this.props.unitL,
      unitR: this.props.unitR,
      isClick: false,
    };
  }
  // 단위 변환하기 전과 후의 값을 모두 가지고 있기 위해 2개씩의 매서드 필요
  handleBodyChange = (e) => {
    const context = this.context.actions;
    const value = e.target.value;
    // set~~~L : 해당 부위 값
    // set~~~R : 해당 단위 변환 수치
    if (this.props.isClick === false) {
      switch (this.props.name) {
        case "체중":
          // 300kg 이하 입력
          if (value <= 300) {
            context.setWeightL(value);
            context.setWeightR(value * 2.205);
            break;
          }
        case "체지방율":
          // 100% 이하 입력
          if (value <= 100) {
            context.setBody_fatL(value);
            context.setBody_fatR(value);
          }
          break;
        case "어깨길이":
          // 200cm 이하 입력
          if (value <= 200) {
            context.setShoulderL(value);
            context.setShoulderR(value / (2.54).toFixed(2));
          }
          break;
        case "가슴둘레":
          if (value <= 200) {
            context.setChestL(value);
            context.setChestR(value / (2.54).toFixed(2));
          }
          break;
        case "허리둘레":
          if (value <= 200) {
            context.setWaistL(value);
            context.setWaistR(value / (2.54).toFixed(2));
          }
          break;
        case "엉덩이둘레":
          if (value <= 200) {
            context.setHipL(value);
            context.setHipR(value / (2.54).toFixed(2));
          }
          break;
        case "허벅지둘레":
          if (value <= 200) {
            context.setThighL(value);
            context.setThighR(value / (2.54).toFixed(2));
          }
          break;
        default:
          break;
      }
    }
    // isClick으로 단위를 변환했으므로 변환 전 공식의 반대로 작성해야함
    else if (this.props.isClick === true) {
      switch (this.props.name) {
        case "체중":
          // 300lb 이하 입력 가능
          if (value <= 300) {
            context.setWeightL(value / (2.205).toFixed(2));
            context.setWeightR(value);
          }
          break;
        case "체지방율":
          // 100% 이하 입력 가능
          if (value <= 100) {
            context.setBody_fatL(value);
            context.setBody_fatR(value);
          }
          break;
        case "어깨길이":
          // 508in 이하 입력 가능
          if (value <= 508) {
            context.setShoulderL(value * (2.54).toFixed(2));
            context.setShoulderR(value);
          }
          break;
        case "가슴둘레":
          if (value <= 508) {
            context.setChestL(value * (2.54).toFixed(2));
            context.setChestR(value);
          }
          break;
        case "허리둘레":
          if (value <= 508) {
            context.setWaistL(value * (2.54).toFixed(2));
            context.setWaistR(value);
          }
          break;
        case "엉덩이둘레":
          if (value <= 508) {
            context.setHipL(value * (2.54).toFixed(2));
            context.setHipR(value);
          }
          break;
        case "허벅지둘레":
          if (value <= 508) {
            context.setThighL(value * (2.54).toFixed(2));
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
      if (this.props.name === "체중") {
        resultL = context.weightL;
        resultR = context.weightR;
      } else if (this.props.name === "체지방율") {
        resultL = context.body_fatL;
        resultR = context.body_fatR;
      } else if (this.props.name === "어깨길이") {
        resultL = context.shoulderL;
        resultR = context.shoulderR;
      } else if (this.props.name === "가슴둘레") {
        resultL = context.chestL;
        resultR = context.chestR;
      } else if (this.props.name === "허리둘레") {
        resultL = context.waistL;
        resultR = context.waistR;
      } else if (this.props.name === "엉덩이둘레") {
        resultL = context.hipL;
        resultR = context.hipR;
      } else if (this.props.name === "허벅지둘레") {
        resultL = context.thighL;
        resultR = context.thighR;
      }
    }
    // this.props.isClick === true -> 단위 변환 후
    // 단위 변환 이후이므로 기존 L, R의 위치를 바꿈
    else if (this.props.isClick === true) {
      if (this.props.name === "체중") {
        resultL = context.weightR;
        resultR = context.weightL;
      } else if (this.props.name === "체지방율") {
        resultL = context.body_fatR;
        resultR = context.body_fatL;
      } else if (this.props.name === "어깨길이") {
        resultL = context.shoulderR;
        resultR = context.shoulderL;
      } else if (this.props.name === "가슴둘레") {
        resultL = context.chestR;
        resultR = context.chestL;
      } else if (this.props.name === "허리둘레") {
        resultL = context.waistR;
        resultR = context.waistL;
      } else if (this.props.name === "엉덩이둘레") {
        resultL = context.hipR;
        resultR = context.hipL;
      } else if (this.props.name === "허벅지둘레") {
        resultL = context.thighR;
        resultR = context.thighL;
      }
    }
    //

    return (
      <>
        <div className="input_size_cont">
          <div className="input_left">
            <span>{this.props.name} : </span>
          </div>
          <div className="input_middle">
            <input
              type="number"
              min="0"
              onChange={this.handleBodyChange}
              value={resultL}
              maxLength="4"
            ></input>
            {this.props.isClick ? (
              <button
                name={this.props.temp}
                onClick={this.props.handleButtonTrue}
              >
                {this.state.unitR}
              </button>
            ) : (
              <button
                name={this.props.temp}
                onClick={this.props.handleButtonFalse}
              >
                {this.state.unitL}
              </button>
            )}
          </div>
          {/* 오른쪽 끝 div 예비 코드 */}
          <div className="input_right">
            <input name="bodyR" readOnly value={resultR}></input>
            <div>
              {this.props.isClick ? this.state.unitL : this.state.unitR}
            </div>
          </div>
        </div>
      </>
    );
  }
}
