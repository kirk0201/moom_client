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
        <div class="slideshow-container" style={{ marginTop: "165px" }}>
          <div class={slide1}>
            <div class="numbertext">1 / 3</div>
            <img class="slide-img" src={bg1} alt="이미지 어디감?" />
            <div class="text1">뭄으로 체계적인 신체 관리를 시작해보세요</div>
            <div class="subtext1">- 즐거운 변화를 만들어 드립니다 -</div>
            {/* <span class="slidebutton" to="/">
              click1
            </span> */}
            <div
              className="startbutton1"
              onClick={() => this.props.history.push("/login")}
            >
              지금 시작하기
            </div>
            <a href="https://kr.freepik.com/photos/people" class="origin">
              People 사진는 aleksandarlittlewolf - kr.freepik.com가 제작함
            </a>
          </div>

          <div class={slide2}>
            <div class="numbertext">2 / 3</div>
            <img class="slide-img" src={bg3} alt="이미지 어디감?" />
            <div class="text2">어느 부위든 기록하고 분석 하세요</div>
            <div class="subtext2">- 원하는 모든곳을 관리할수 있습니다 -</div>
            {/* <span class="slidebutton" to="/">
              click2
            </span> */}
            <div
              className="startbutton2"
              onClick={() => this.props.history.push("/login")}
            >
              지금 시작하기
            </div>
            <a href="https://kr.freepik.com/photos/people" class="origin">
              People 사진는 diana.grytsku - kr.freepik.com가 제작함
            </a>
          </div>

          <div class={slide3}>
            <div class="numbertext">3 / 3</div>
            <img class="slide-img" src={bg5} alt="이미지 어디감?" />
            <div class="text3">건강한 신체를 느껴보세요</div>
            <div class="subtext3">- 뭄과 함께라면 가능합니다 -</div>
            {/* <span class="slidebutton" to="/">
              click3
            </span> */}
            <div
              className="startbutton3"
              onClick={() => this.props.history.push("/login")}
            >
              지금 시작하기
            </div>
            <a href="https://kr.freepik.com/photos/people" class="origin">
              People 사진는 wayhomestudio - kr.freepik.com가 제작함
            </a>
          </div>

          <span class="prev" onClick={() => this.nextSlide(false)}>
            &#10094;
          </span>
          <span class="next" onClick={() => this.nextSlide(true)}>
            &#10095;
          </span>

          <div class="dot--container">
            <span class="dot" onClick={() => this.switchSlide(1)}></span>
            <span class="dot" onClick={() => this.switchSlide(2)}></span>
            <span class="dot" onClick={() => this.switchSlide(3)}></span>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Introduce);
