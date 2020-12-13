import React, { Component } from "react";
import "../css/Experience.css";
import ExperienceInput from "./ExperienceInput";
import male from "../images/maleimg.png";
import female from "../images/femaleimg.png";
export class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sex: false,
    };
  }
  componentDidUpdate(prevProps, prevState) {
    // console.log(prevState);
    // if (this.state.sex !== prevState.sex) {
    //   this.setState({});
    // }
  }
  handleSexChange = (e) => {
    // console.log(e);
    console.log("!!", e.target.id);

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
    console.log(this.state.sex);

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
