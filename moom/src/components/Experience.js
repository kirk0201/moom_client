import React, { Component } from "react";
import "../css/Experience.css";
import ExperienceInput from "./ExperienceInput";

export class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      radio: false,
    };
  }

  handleUnitChange = (e) => {
    console.log(e);
    // console.log(e.target.nextSibling.textContent);
    if (
      e.target.nextSibling.textContent === "in|lb" &&
      this.state.radio === false
    ) {
      this.setState({
        radio: true,
      });
    } else if (
      e.target.nextSibling.textContent === "cm|kg" &&
      this.state.radio === true
    ) {
      this.setState({
        radio: false,
      });
    }
  };

  render() {
    const part1 = "체중";
    const part2 = "체지방율";
    const part3 = "어깨길이";
    const part4 = "가슴둘레";
    const part5 = "허리둘레";
    const part6 = "엉덩이둘레";
    const part7 = "허벅지둘레";
    return (
      <>
        <div className="exp_top">
          <div>신체정보</div>
          <div>
            {/* <div>
              <input
                type="radio"
                name="radio"
                onClick={this.handleUnitChange}
              ></input>
              <label for="radio">in|lb</label>
            </div> */}
            <div>
              {/* <input
                type="radio"
                name="radio"
                defaultChecked
                onClick={this.handleUnitChange}
              ></input>
              <label for="radio">cm|kg</label> */}
              사이즈 입력
            </div>
          </div>
          <div>목표설정</div>
        </div>
        <div className="exp_container">
          <div className="left_img">좌측 이미지</div>
          <div className="input_size">
            {/* <div>사이즈 입력</div> */}
            <ExperienceInput name={part1} unitL="kg" unitR="ln" />
            <ExperienceInput name={part2} unitL="%" unitR="%" />
            <ExperienceInput name={part3} unitL="cm" unitR="in" />
            <ExperienceInput name={part4} unitL="cm" unitR="in" />
            <ExperienceInput name={part5} unitL="cm" unitR="in" />
            <ExperienceInput name={part6} unitL="cm" unitR="in" />
            <ExperienceInput name={part7} unitL="cm" unitR="in" />
          </div>

          {/* <div className="right_img">우측 이미지</div> */}
          <div className="info_size">사이즈 정보</div>
        </div>
        <div style={{ textAlign: "center", backgroundColor: "teal" }}>
          <button style={{ width: 100, height: 60 }}>저장</button>
        </div>
      </>
    );
  }
}

export default Experience;
