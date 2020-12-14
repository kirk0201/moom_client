import React, { Component, useContext } from "react";
import "../css/Experience.css";
import ExperienceInput from "./ExperienceInput";
import male from "../images/maleimg.png";
import female from "../images/femaleimg.png";
import ExperienceGoal from "./ExperienceGoal";
import { User } from "../store/store";
export class Experience extends Component {
  static contextType = User;
  constructor(props) {
    super(props);
    this.state = {
      sex: false,
      isClick1: false,
      isClick2: false,
      isClick3: false,
      isClick4: false,
      isClick5: false,
      isClick6: false,
      isClick7: false,
    };
  }
  handleButtonFalse = (e) => {
    const name = e.target.name;
    this.setState({
      [name]: true,
    });
  };
  handleButtonTrue = (e) => {
    const name = e.target.name;
    this.setState({
      [name]: false,
    });
  };

  handleSexChange = (e) => {
    if (e.target.id === "radioW") {
      this.setState({
        sex: true,
      });
    } else if (e.target.id === "radioM")
      this.setState({
        sex: false,
      });
    console.log(this.state.sex);
  };

  render() {
    const part1 = "체중";
    const part2 = "체지방율";
    const part3 = "어깨길이";
    const part4 = "가슴둘레";
    const part5 = "허리둘레";
    const part6 = "엉덩이둘레";
    const part7 = "허벅지둘레";

    // 상황에 따른 사진 선택
    let changeSex = this.state.sex ? `url("${female}")` : `url("${male}")`;
    console.log(changeSex);
    return (
      <>
        <div className="exp_top">
          <div>
            <input
              id="radioM"
              name="radio"
              type="radio"
              onClick={this.handleSexChange}
              defaultChecked
            ></input>
            <label for="radioM">남자</label>
            <input
              id="radioW"
              name="radio"
              type="radio"
              onClick={this.handleSexChange}
            ></input>
            <label for="radioW">여자</label>
          </div>
          <div>사이즈 입력</div>
          <div>목표설정</div>
        </div>
        <div className="exp_container">
          <div className="left_">
            <img
              style={{ backgroundImage: changeSex }}
              className="left_img"
            ></img>
          </div>
          <div className="input_size">
            <ExperienceInput
              name={part1}
              temp="isClick1"
              unitL="kg"
              unitR="lb"
              handleButtonTrue={this.handleButtonTrue}
              handleButtonFalse={this.handleButtonFalse}
              isClick={this.state.isClick1}
            />
            <ExperienceInput
              name={part2}
              unitL="%"
              unitR="%"
              temp="isClick2"
              handleButtonTrue={this.handleButtonTrue}
              handleButtonFalse={this.handleButtonFalse}
              isClick={this.state.isClick2}
            />
            <ExperienceInput
              name={part3}
              unitL="cm"
              unitR="in"
              temp="isClick3"
              handleButtonTrue={this.handleButtonTrue}
              handleButtonFalse={this.handleButtonFalse}
              isClick={this.state.isClick3}
            />
            <ExperienceInput
              name={part4}
              unitL="cm"
              unitR="in"
              temp="isClick4"
              handleButtonTrue={this.handleButtonTrue}
              handleButtonFalse={this.handleButtonFalse}
              isClick={this.state.isClick4}
            />
            <ExperienceInput
              name={part5}
              unitL="cm"
              unitR="in"
              temp="isClick5"
              handleButtonTrue={this.handleButtonTrue}
              handleButtonFalse={this.handleButtonFalse}
              isClick={this.state.isClick5}
            />
            <ExperienceInput
              name={part6}
              unitL="cm"
              unitR="in"
              temp="isClick6"
              handleButtonTrue={this.handleButtonTrue}
              handleButtonFalse={this.handleButtonFalse}
              isClick={this.state.isClick6}
            />
            <ExperienceInput
              name={part7}
              unitL="cm"
              unitR="in"
              temp="isClick7"
              handleButtonTrue={this.handleButtonTrue}
              handleButtonFalse={this.handleButtonFalse}
              isClick={this.state.isClick7}
            />
          </div>

          {/* temp는 해당 컴퍼넌트 안에서 고유한 id값처럼 쓰임 (특정 컴퍼넌트를 선택하기 위함) */}
          <div className="info_size">
            사이즈 정보
            <ExperienceGoal
              name={part1}
              temp="isClick1"
              unitL="kg"
              unitR="lb"
              isClick={this.state.isClick1}
            ></ExperienceGoal>
            <ExperienceGoal
              name={part2}
              temp="isClick2"
              unitL="%"
              unitR="%"
              isClick={this.state.isClick2}
            ></ExperienceGoal>
            <ExperienceGoal
              name={part3}
              temp="isClick3"
              unitL="cm"
              unitR="in"
              isClick={this.state.isClick3}
            ></ExperienceGoal>
            <ExperienceGoal
              name={part4}
              temp="isClick4"
              unitL="cm"
              unitR="in"
              isClick={this.state.isClick4}
            ></ExperienceGoal>
            <ExperienceGoal
              name={part5}
              temp="isClick5"
              unitL="cm"
              unitR="in"
              isClick={this.state.isClick5}
            ></ExperienceGoal>
            <ExperienceGoal
              name={part6}
              temp="isClick6"
              unitL="cm"
              unitR="in"
              isClick={this.state.isClick6}
            ></ExperienceGoal>
            <ExperienceGoal
              name={part7}
              temp="isClick7"
              unitL="cm"
              unitR="in"
              isClick={this.state.isClick7}
            ></ExperienceGoal>
          </div>
        </div>
        <div style={{ textAlign: "center", backgroundColor: "ivory" }}>
          <button style={{ width: 100, height: 60 }}>저장</button>
        </div>
      </>
    );
  }
}

export default Experience;
