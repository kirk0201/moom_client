import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "../css/Experience.css";
import ExperienceInput from "./ExperienceInput";
import male from "../images/maleimg.png";
import female from "../images/femaleimg.png";
import ExperienceGoal from "./ExperienceGoal";
import { User } from "../store/store";
import "../index.css";
import sM from "../images/sexmale.png";
import sW from "../images/sexfemale.png";
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

      isFault: false,

      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      show6: false,
      show7: false,
    };
  }

  handleGoalState = (e) => {
    let id = e.target.id;

    if (e.target.checked === true) {
      if (id === "isClick1")
        this.setState({
          show1: true,
          show2: false,
          show3: false,
          show4: false,
          show5: false,
          show6: false,
          show7: false,
        });
      if (id === "isClick2")
        this.setState({
          show1: false,
          show2: true,
          show3: false,
          show4: false,
          show5: false,
          show6: false,
          show7: false,
        });
      if (id === "isClick3")
        this.setState({
          show1: false,
          show2: false,
          show3: true,
          show4: false,
          show5: false,
          show6: false,
          show7: false,
        });
      if (id === "isClick4")
        this.setState({
          show1: false,
          show2: false,
          show3: false,
          show4: true,
          show5: false,
          show6: false,
          show7: false,
        });
      if (id === "isClick5")
        this.setState({
          show1: false,
          show2: false,
          show3: false,
          show4: false,
          show5: true,
          show6: false,
          show7: false,
        });
      if (id === "isClick6")
        this.setState({
          show1: false,
          show2: false,
          show3: false,
          show4: false,
          show5: false,
          show6: true,
          show7: false,
        });
      if (id === "isClick7")
        this.setState({
          show1: false,
          show2: false,
          show3: false,
          show4: false,
          show5: false,
          show6: false,
          show7: true,
        });
    } else if (e.target.checked === false) {
      if (id === "isClick1") this.setState({ show1: false });
      if (id === "isClick2") this.setState({ show2: false });
      if (id === "isClick3") this.setState({ show3: false });
      if (id === "isClick4") this.setState({ show4: false });
      if (id === "isClick5") this.setState({ show5: false });
      if (id === "isClick6") this.setState({ show6: false });
      if (id === "isClick7") this.setState({ show7: false });
    }
  };

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

  };

  render() {
    const part1 = "Weight";
    const part2 = "Body fat";
    const part3 = "Shoulder";
    const part4 = "Chest";
    const part5 = "Waist";
    const part6 = "Hip";
    const part7 = "Thigh";

    // 상황에 따른 사진 선택

    return (
      <>
        <div
          className="contents_wrap max-w-screen-2xl m-auto pt-2 mx-10 my-20 border-solid border rounded-3xl border-gray-300 shadow-2xl"
          
        >
          {/* 탑 div */}

          {/* 성별 버튼 */}
          <div className="content_left w-1/3">
            <div className="text-center pt-5 pb-5">
              <div className="gender_button bg-gray-200 text-sm text-gray-500 leading-none border-2 border-gray-200 rounded-full inline-flex">
                <button
                  className=" focus:bg-blue-200 inline-flex items-center transition-colors duration-300 ease-in focus:outline-none hover:text-blue-400 focus:text-white rounded-l-full px-4 py-2"
                  id="radioM"
                  onClick={this.handleSexChange}
                  defaultChecked
                >
                  <img id="radioM" src={sM} alt="이미지 어디감?"/>
                  <span id="radioM" className="gender font-bold">
                    Male
                  </span>
                </button>
                <button
                  className=" focus:bg-blue-200  inline-flex items-center transition-colors duration-300 ease-in focus:outline-none hover:text-blue-400 focus:text-white rounded-r-full px-4 py-2"
                  id="radioW"
                  onClick={this.handleSexChange}
                >
                  <img id="radioW" src={sW} alt="이미지 어디감?"></img>
                  <span id="radioW" className="gender font-bold">
                    Female
                  </span>
                </button>
              </div>
            </div>
      
            <div className="exp_container">
            <div className="place-content-center bg-white border-none">
              <img
                className="border-solid hover:border-gray-500 shadow-lg border-gray-300 border rounded-3xl"
                src={this.state.sex ? female : male}
                alt="전신 일러스트"
              ></img>
            </div>
          </div>
          </div>

          {/* 남여 이미지 div */}
            <div className="flex whitespace-normal border-dashed border border-gray-400"></div>
            {/* 인풋박스 */}
            <div className="record_wrap">

            <div className="input_title">
             <div className=" hover:bg-blue-300 text-gray-400 italic shadow-lg border-gray-200 rounded-3xl mx-20 bg-indigo-100 pt-4 pb-4 text-center place-content-center border-2 border-solid">
                Record
              <span className="pl-5 italic text-black">Body</span>
             </div>
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
                show={this.state.show1}
                handleGoalState={this.handleGoalState}
              />
              <ExperienceGoal
                name={part1}
                temp="isClick1"
                unitL="kg"
                unitR="lb"
                isClick={this.state.isClick1}
                show={this.state.show1}
              ></ExperienceGoal>
              <ExperienceInput
                name={part2}
                unitL="%"
                unitR="%"
                temp="isClick2"
                handleButtonTrue={this.handleButtonTrue}
                handleButtonFalse={this.handleButtonFalse}
                isClick={this.state.isClick2}
                show={this.state.show2}
                handleGoalState={this.handleGoalState}
              />
              <ExperienceGoal
                name={part2}
                temp="isClick2"
                unitL="%"
                unitR="%"
                isClick={this.state.isClick2}
                show={this.state.show2}
              ></ExperienceGoal>
              <ExperienceInput
                name={part3}
                unitL="cm"
                unitR="in"
                temp="isClick3"
                handleButtonTrue={this.handleButtonTrue}
                handleButtonFalse={this.handleButtonFalse}
                isClick={this.state.isClick3}
                show={this.state.show3}
                handleGoalState={this.handleGoalState}
              />
              <ExperienceGoal
                name={part3}
                temp="isClick3"
                unitL="cm"
                unitR="in"
                isClick={this.state.isClick3}
                show={this.state.show3}
              ></ExperienceGoal>
              <ExperienceInput
                name={part4}
                unitL="cm"
                unitR="in"
                temp="isClick4"
                handleButtonTrue={this.handleButtonTrue}
                handleButtonFalse={this.handleButtonFalse}
                isClick={this.state.isClick4}
                show={this.state.show4}
                handleGoalState={this.handleGoalState}
              />
              <ExperienceGoal
                name={part4}
                temp="isClick4"
                unitL="cm"
                unitR="in"
                isClick={this.state.isClick4}
                show={this.state.show4}
              ></ExperienceGoal>
              <ExperienceInput
                name={part5}
                unitL="cm"
                unitR="in"
                temp="isClick5"
                handleButtonTrue={this.handleButtonTrue}
                handleButtonFalse={this.handleButtonFalse}
                isClick={this.state.isClick5}
                show={this.state.show5}
                handleGoalState={this.handleGoalState}
              />
              <ExperienceGoal
                name={part5}
                temp="isClick5"
                unitL="cm"
                unitR="in"
                isClick={this.state.isClick5}
                show={this.state.show5}
              ></ExperienceGoal>
              <ExperienceInput
                name={part6}
                unitL="cm"
                unitR="in"
                temp="isClick6"
                handleButtonTrue={this.handleButtonTrue}
                handleButtonFalse={this.handleButtonFalse}
                isClick={this.state.isClick6}
                show={this.state.show6}
                handleGoalState={this.handleGoalState}
              />
              <ExperienceGoal
                name={part6}
                temp="isClick6"
                unitL="cm"
                unitR="in"
                isClick={this.state.isClick6}
                show={this.state.show6}
              ></ExperienceGoal>
              <ExperienceInput
                name={part7}
                unitL="cm"
                unitR="in"
                temp="isClick7"
                handleButtonTrue={this.handleButtonTrue}
                handleButtonFalse={this.handleButtonFalse}
                isClick={this.state.isClick7}
                show={this.state.show7}
                handleGoalState={this.handleGoalState}
              />
              <ExperienceGoal
                name={part7}
                temp="isClick7"
                unitL="cm"
                unitR="in"
                isClick={this.state.isClick7}
                show={this.state.show7}
              ></ExperienceGoal>
            </div>
          {/* </div> */}
          <div className="border border-solid border-t-2 mx-auto w-5/6 border-gray-300"></div>
          <div className="save_ mx-20 text-center p-12">
            <button
              // 로그인 창으로 이동
              onClick={() => this.props.history.push("/login")}
              className="save_button w-48 h-32 hover:bg-gray-400 text-gray-100 focus:border-white focus:outline-none font-bold focus:bg-gray-600 border-2 text-3xl bg-gray-300 rounded-3xl shadow-xl border-gray-300 border-solid"
            >
              저장
            </button>
          </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Experience);
