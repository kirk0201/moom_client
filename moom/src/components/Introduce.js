import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import "../css/Introduce.css";
import bg5 from "../images/bg-3.jpg";
import bg3 from "../images/bg-2.jpg";
import bg1 from "../images/bg-1.jpg";
import "tailwindcss/tailwind.css";

export class Introduce extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectSlide: 1,
      intervalId: null,
    };
  }

  componentDidMount() {
    let intervalId = setInterval(this.slideTimer, 6000);
    this.setState({ intervalId: intervalId });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  slideTimer = () => {
    this.setState((pre) => {
      if (pre.selectSlide === 3) {
        return { selectSlide: 1 };
      }
      return { selectSlide: pre.selectSlide + 1 };
    });
  };

  switchSlide = (n) => {
    clearInterval(this.state.intervalId);
    let intervalId = setInterval(this.slideTimer, 6000);
    this.setState({ intervalId: intervalId });
    this.setState({ selectSlide: n });
  };

  nextSlide = (n) => {
    clearInterval(this.state.intervalId);
    let intervalId = setInterval(this.slideTimer, 6000);
    this.setState({ intervalId: intervalId });
    if (n) {
      this.setState((pre) => {
        if (pre.selectSlide === 3) {
          return { selectSlide: 1 };
        }
        return { selectSlide: pre.selectSlide + 1 };
      });
    } else {
      this.setState((pre) => {
        if (pre.selectSlide === 1) {
          return { selectSlide: 3 };
        }
        return { selectSlide: pre.selectSlide - 1 };
      });
    }
  };

  render() {
    let slide1 = this.state.selectSlide === 1 ? "fade" : "selectSlide";
    let slide2 = this.state.selectSlide === 2 ? "fade" : "selectSlide";
    let slide3 = this.state.selectSlide === 3 ? "fade" : "selectSlide";
    return (
      <>
        <div className="slideshow-container" style={{ marginTop: "165px" }}>
          <div className={slide1}>
            <div className="numbertext">1 / 3</div>
            <img className="slide-img" src={bg1} alt="이미지 어디감?" />
            <div className="text_ad text_ad1_h">
              체계적인 신체 관리를 시작해보세요
            </div>
            <div>
              <div className="subtext subtext1_h">
                즐거운 변화를 만들어 드립니다 <br/>
                <button className="button1_h border-solid border-2 rounded-lg mt-5 p-3 border-gray-200 font-bold bg-blue-100">지금 시작하기</button>
              </div>
            </div>
            
            
            
            <a href="https://kr.freepik.com/photos/people" className="origin">
              People 사진는 aleksandarlittlewolf - kr.freepik.com가 제작함
            </a>
          </div>

          <div className={slide2}>
            <div className="numbertext">2 / 3</div>
            <img className="slide-img" src={bg3} alt="이미지 어디감?" />
            <div className="text_ad text_ad2_h">어느 부위든 기록하고 <span className="long_Text">분석 하세요</span></div>
            <div className="subtext subtext2_h">
            원하는 모든곳을 관리할수 있습니다
            <br/>
              <button
              // className="startbutton2"
              className="border-solid border-2 rounded-lg mt-5 p-3 border-gray-200 font-bold bg-blue-100"
              onClick={() => this.props.history.push("/login")}
            >
              지금 시작하기
            </button>
            </div>
            
            
            <a href="https://kr.freepik.com/photos/people" className="origin">
              People 사진는 diana.grytsku - kr.freepik.com가 제작함
            </a>
          </div>

          <div className={slide3}>
            <div className="numbertext">3 / 3</div>
            <img className="slide-img" src={bg5} alt="이미지 어디감?" />
            <div className="text_ad text_ad3_h">건강한 신체를 느껴보세요</div>
            <div className="subtext subtext3_h">뭄과 함께라면 가능합니다
            <br/>
            <button
              // className="startbutton3"
              className="border-solid border-2 rounded-lg mt-5 p-3 border-gray-200 font-bold bg-blue-100"
              onClick={() => this.props.history.push("/login")}
            >
              지금 시작하기
            </button>
            </div>
            <a href="https://kr.freepik.com/photos/people" className="origin">
              People 사진는 wayhomestudio - kr.freepik.com가 제작함
            </a>
          </div>

          <span className="prev" onClick={() => this.nextSlide(false)}>
            &#10094;
          </span>
          <span className="next" onClick={() => this.nextSlide(true)}>
            &#10095;
          </span>

          <div className="dot--container">
            <span className="dot" onClick={() => this.switchSlide(1)}></span>
            <span className="dot" onClick={() => this.switchSlide(2)}></span>
            <span className="dot" onClick={() => this.switchSlide(3)}></span>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Introduce);
