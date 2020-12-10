import React, { Component } from "react";
import "../css/Introduce.css";
import bg5 from "../images/bg5.jpg";
import bg3 from "../images/bg3.jpg";
import bg1 from "../images/bg1.jpg";

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
        <div class="slideshow-container">
          <div class={slide1}>
            <div class="numbertext">1 / 3</div>
            <img class="slide-img" src={bg1} alt="이미지 어디감?" />
            <div class="text">안녕하세요</div>
            <span class="slidebutton" to="/">
              click1
            </span>
          </div>

          <div class={slide2}>
            <div class="numbertext">2 / 3</div>
            <img class="slide-img" src={bg3} alt="이미지 어디감?" />
            <div class="text">안녕하세요</div>
            <span class="slidebutton" to="/">
              click2
            </span>
          </div>

          <div class={slide3}>
            <div class="numbertext">3 / 3</div>
            <img class="slide-img" src={bg5} alt="이미지 어디감?" />
            <div class="text">안녕하세요</div>
            <span class="slidebutton" to="/">
              click3
            </span>
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

export default Introduce;
