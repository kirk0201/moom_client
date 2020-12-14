import React, { Component, useContext } from "react";
import { User } from "../store/store";

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
        case "체중":
          resultL = context.goal1;
          if (context.goal1 && context.weightL) {
            resultR = context.goal1 - context.weightL;
          }
          break;
        case "체지방율":
          resultL = context.goal2;
          if (context.goal2 && context.body_fatL) {
            resultR = context.goal2 - context.body_fatL;
          }
          break;
        case "어깨길이":
          resultL = context.goal3;
          if (context.goal3 && context.shoulderL) {
            resultR = context.goal3 - context.shoulderL;
          }
          break;
        case "가슴둘레":
          resultL = context.goal4;
          if (context.goal4 && context.chestL) {
            resultR = context.goal4 - context.chestL;
          }
          break;
        case "허리둘레":
          resultL = context.goal5;
          if (context.goal5 && context.waistL) {
            resultR = context.goal5 - context.waistL;
          }
          break;
        case "엉덩이둘레":
          resultL = context.goal6;
          if (context.goal6 && context.hipL) {
            resultR = context.goal6 - context.hipL;
          }
          break;
        case "허벅지둘레":
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
        case "체중":
          resultL = context.goal_1;
          resultR = context.goal_1 - context.weightR;

          break;
        case "체지방율":
          resultL = context.goal_2;
          resultR = context.goal_2 - context.body_fatL;
          break;
        case "어깨길이":
          resultL = context.goal_3;
          resultR = context.goal_3 - context.shoulderR;
          break;
        case "가슴둘레":
          resultL = context.goal_4;
          resultR = context.goal_4 - context.chestR;
          break;
        case "허리둘레":
          resultL = context.goal_5;
          resultR = context.goal_5 - context.waistR;
          break;
        case "엉덩이둘레":
          resultL = context.goal_6;
          resultR = context.goal_6 - context.hipR;
          break;
        case "허벅지둘레":
          resultL = context.goal_7;
          resultR = context.goal_7 - context.thighR;
          break;
        default:
          break;
      }
    }
    return (
      <>
        <div className="input_size_cont">
          <div className="input_left">
            <span>목표 {this.props.name}</span>
          </div>
          <div className="input_middle">
            <input
              type="number"
              min="0"
              name={this.props.temp}
              onChange={this.handleGoalChange}
              maxLength="4"
              value={resultL}
            ></input>
            <button>
              {this.props.isClick ? this.state.unitR : this.state.unitL}
            </button>
            <span>까지</span>
          </div>
          {/* 오른쪽 끝 div 예비 코드 */}
          <div className="input_right">
            <input name="bodyR" readOnly value={resultR}></input>
            <button>
              {this.props.isClick ? this.state.unitR : this.state.unitL}
            </button>
            <div>남았습니다</div>
          </div>
        </div>
      </>
    );
  }
}
