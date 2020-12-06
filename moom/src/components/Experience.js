import React, { Component } from "react";
import "../css/Experience.css";

export class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body1: "",
      body2: "",
      body3: "",
      body4: "",
      body5: "",
      body6: "",
      body7: "",
      body_1: "",
      body_2: "",
      body_3: "",
      body_4: "",
      body_5: "",
      body_6: "",
      body_7: "",
      radio: false,
      unit_1: "kg",
      unit_2: "%",
      unit_3: "cm",
      unit_4: "cm",
      unit_5: "cm",
      unit_6: "cm",
      unit_7: "cm",
      unit_1_1: "ln",
      unit_1_2: "%",
      unit_1_3: "in",
      unit_1_4: "in",
      unit_1_5: "in",
      unit_1_6: "in",
      unit_1_7: "in",
    };

    // this.handleBodyChange = this.handleBodyChange.bind(this);
  }

  handleBodyChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // TODO: 기본값 cm|kg일떄
    if (this.state.radio === false) {
      if (name === "body1") {
        this.setState({
          [name]: value,
          body_1: (value * 2.205).toFixed(2),
        });
      } else if (name === "body2") {
        this.setState({
          [name]: value,
          body_2: value,
        });
      } else if (name === "body3") {
        this.setState({
          [name]: value,
          body_3: (value / 2.54).toFixed(2),
        });
      } else if (name === "body4") {
        this.setState({
          [name]: value,
          body_4: (value / 2.54).toFixed(2),
        });
      } else if (name === "body5") {
        this.setState({
          [name]: value,
          body_5: (value / 2.54).toFixed(2),
        });
      } else if (name === "body6") {
        this.setState({
          [name]: value,
          body_6: (value / 2.54).toFixed(2),
        });
      } else if (name === "body7") {
        this.setState({
          [name]: value,
          body_7: (value / 2.54).toFixed(2),
        });
      }
      // in|lb일때
    } else if (this.state.radio === true) {
      if (name === "body1") {
        this.setState({
          [name]: value,
          body_1: (value / 2.205).toFixed(2),
        });
      } else if (name === "body3") {
        this.setState({
          [name]: value,
          body_3: (value * 2.54).toFixed(2),
        });
      } else if (name === "body4") {
        this.setState({
          [name]: value,
          body_4: (value * 2.54).toFixed(2),
        });
      } else if (name === "body5") {
        this.setState({
          [name]: value,
          body_5: (value * 2.54).toFixed(2),
        });
      } else if (name === "body6") {
        this.setState({
          [name]: value,
          body_6: (value * 2.54).toFixed(2),
        });
      } else if (name === "body7") {
        this.setState({
          [name]: value,
          body_7: (value * 2.54).toFixed(2),
        });
      }
    }

    // this.setState({
    //   body_1: (value * 2.2).toFixed(2),
    // });
  };

  handleUnitChange = (e) => {
    console.log(e);
    // console.log(e.target.nextSibling.textContent);
    if (
      e.target.nextSibling.textContent === "in|lb" &&
      this.state.radio === false
    ) {
      this.setState({
        unit_1: "lb",
        unit_2: "%",
        unit_3: "in",
        unit_4: "in",
        unit_5: "in",
        unit_6: "in",
        unit_7: "in",
        radio: true,
        unit_1_1: "kg",
        unit_1_2: "%",
        unit_1_3: "cm",
        unit_1_4: "cm",
        unit_1_5: "cm",
        unit_1_6: "cm",
        unit_1_7: "cm",
        body1: (this.state.body1 * 2.205).toFixed(2),
        body_1: this.state.body1,
        body3: (this.state.body3 / 2.54).toFixed(2),
        body_3: this.state.body3,
        body4: (this.state.body4 / 2.54).toFixed(2),
        body_4: this.state.body4,
        body5: (this.state.body5 / 2.54).toFixed(2),
        body_5: this.state.body5,
        body6: (this.state.body6 / 2.54).toFixed(2),
        body_6: this.state.body6,
        body7: (this.state.body7 / 2.54).toFixed(2),
        body_7: this.state.body7,
      });
    } else if (
      e.target.nextSibling.textContent === "cm|kg" &&
      this.state.radio === true
    ) {
      this.setState({
        unit_1: "kg",
        unit_2: "%",
        unit_3: "cm",
        unit_4: "cm",
        unit_5: "cm",
        unit_6: "cm",
        unit_7: "cm",
        radio: false,
        unit_1_1: "lb",
        unit_1_2: "%",
        unit_1_3: "in",
        unit_1_4: "in",
        unit_1_5: "in",
        unit_1_6: "in",
        unit_1_7: "in",
        body1: (this.state.body1 / 2.205).toFixed(2),
        body_1: this.state.body1,
        body3: (this.state.body3 * 2.54).toFixed(2),
        body_3: this.state.body3,
        body4: (this.state.body4 * 2.54).toFixed(2),
        body_4: this.state.body4,
        body5: (this.state.body5 * 2.54).toFixed(2),
        body_5: this.state.body5,
        body6: (this.state.body6 * 2.54).toFixed(2),
        body_6: this.state.body6,
        body7: (this.state.body7 * 2.54).toFixed(2),
        body_7: this.state.body7,
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
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            backgroundColor: "teal",
            borderTop: "6px solid blue",
          }}
        >
          <div>신체정보</div>
          <div>
            <div>
              <input
                type="radio"
                name="radio"
                onClick={this.handleUnitChange}
              ></input>
              <label for="radio">in|lb</label>
            </div>
            <div>
              <input
                type="radio"
                name="radio"
                defaultChecked
                onClick={this.handleUnitChange}
              ></input>
              <label for="radio">cm|kg</label>
            </div>
          </div>

          <div>목표설정</div>
        </div>
        <div className="exp_container">
          <div className="left_img">좌측 이미지</div>
          <div
            className="input_size"
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            사이즈 입력
            <div
              style={{
                display: "flex",
                border: "1px solid black",
                alignItems: "center",
              }}
            >
              {/* 입력 div 시작 */}
              <div style={{ display: "flex", height: 40 }}>
                <div
                  style={{
                    border: "1px solid yellow",
                    height: 30,
                  }}
                >
                  <span style={{ float: "left" }}>{part1}:</span>
                </div>
                <div style={{ border: "1px solid blue" }}>
                  <input
                    style={{
                      borderRadius: 10,
                      width: 30,
                      padding: 5,
                      // margin: "auto",
                      // padding: "auto",
                      display: "inline-block",
                    }}
                    type="number"
                    min="0"
                    onChange={this.handleBodyChange}
                    name="body1"
                    value={this.state.body1}
                  ></input>
                  <div style={{ display: "inline-block" }}>
                    {this.state.unit_1}
                  </div>
                </div>
                <div
                  style={{
                    display: "inline-flex",
                    border: "1px solid purple",
                  }}
                >
                  <div
                    style={{
                      border: "1px solid black",
                      borderRadius: 10,
                      backgroundColor: "white",
                      // padding: 5,
                      width: 10,
                      display: "inline-flex",
                    }}
                    name="body_1"
                  >
                    {this.state.body_1}
                  </div>
                  <div>{this.state.unit_1_1}</div>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                border: "1px solid black",
                alignItems: "center",
              }}
            >
              {/* 입력 div 시작 */}
              <div style={{ display: "flex", height: 40 }}>
                <div
                  style={{
                    border: "1px solid yellow",
                    height: 30,
                  }}
                >
                  <span style={{ float: "left" }}>{part2}:</span>
                </div>
                <div style={{ border: "1px solid blue" }}>
                  <input
                    style={{
                      borderRadius: 10,
                      width: 30,
                      padding: 5,
                      // margin: "auto",
                      // padding: "auto",
                      display: "inline-block",
                    }}
                    type="number"
                    min="0"
                    onChange={this.handleBodyChange}
                    name="body2"
                    value={this.state.body2}
                  ></input>
                  <div style={{ display: "inline-block" }}>
                    {this.state.unit_2}
                  </div>
                </div>
                <div
                  style={{
                    display: "inline-flex",
                    border: "1px solid purple",
                  }}
                >
                  <div
                    style={{
                      border: "1px solid black",
                      borderRadius: 10,
                      backgroundColor: "white",
                      // padding: 5,
                      width: 10,
                      display: "inline-flex",
                    }}
                    name="body_2"
                  >
                    {this.state.body_2}
                  </div>
                  <div>{this.state.unit_1_2}</div>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                border: "1px solid black",
                alignItems: "center",
              }}
            >
              {/* 입력 div 시작 */}
              <div style={{ display: "flex", height: 40 }}>
                <div
                  style={{
                    border: "1px solid yellow",
                    height: 30,
                  }}
                >
                  <span style={{ float: "left" }}>{part3}:</span>
                </div>
                <div style={{ border: "1px solid blue" }}>
                  <input
                    style={{
                      borderRadius: 10,
                      width: 30,
                      padding: 5,
                      // margin: "auto",
                      // padding: "auto",
                      display: "inline-block",
                    }}
                    type="number"
                    min="0"
                    onChange={this.handleBodyChange}
                    name="body3"
                    value={this.state.body3}
                  ></input>
                  <div style={{ display: "inline-block" }}>
                    {this.state.unit_3}
                  </div>
                </div>
                <div
                  style={{
                    display: "inline-flex",
                    border: "1px solid purple",
                  }}
                >
                  <div
                    style={{
                      border: "1px solid black",
                      borderRadius: 10,
                      backgroundColor: "white",
                      // padding: 5,
                      width: 10,
                      display: "inline-flex",
                    }}
                    name="body_3"
                  >
                    {this.state.body_3}
                  </div>
                  <div>{this.state.unit_1_3}</div>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                border: "1px solid black",
                alignItems: "center",
              }}
            >
              {/* 입력 div 시작 */}
              <div style={{ display: "flex", height: 40 }}>
                <div
                  style={{
                    border: "1px solid yellow",
                    height: 30,
                  }}
                >
                  <span style={{ float: "left" }}>{part4}:</span>
                </div>
                <div style={{ border: "1px solid blue" }}>
                  <input
                    style={{
                      borderRadius: 10,
                      width: 30,
                      padding: 5,
                      // margin: "auto",
                      // padding: "auto",
                      display: "inline-block",
                    }}
                    type="number"
                    min="0"
                    onChange={this.handleBodyChange}
                    name="body4"
                    value={this.state.body4}
                  ></input>
                  <div style={{ display: "inline-block" }}>
                    {this.state.unit_4}
                  </div>
                </div>
                <div
                  style={{
                    display: "inline-flex",
                    border: "1px solid purple",
                  }}
                >
                  <div
                    style={{
                      border: "1px solid black",
                      borderRadius: 10,
                      backgroundColor: "white",
                      // padding: 5,
                      width: 10,
                      display: "inline-flex",
                    }}
                    name="body_4"
                  >
                    {this.state.body_4}
                  </div>
                  <div>{this.state.unit_1_4}</div>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                border: "1px solid black",
                alignItems: "center",
              }}
            >
              {/* 입력 div 시작 */}
              <div style={{ display: "flex", height: 40 }}>
                <div
                  style={{
                    border: "1px solid yellow",
                    height: 30,
                  }}
                >
                  <span style={{ float: "left" }}>{part5}:</span>
                </div>
                <div style={{ border: "1px solid blue" }}>
                  <input
                    style={{
                      borderRadius: 10,
                      width: 30,
                      padding: 5,
                      // margin: "auto",
                      // padding: "auto",
                      display: "inline-block",
                    }}
                    type="number"
                    min="0"
                    onChange={this.handleBodyChange}
                    name="body5"
                    value={this.state.body5}
                  ></input>
                  <div style={{ display: "inline-block" }}>
                    {this.state.unit_5}
                  </div>
                </div>
                <div
                  style={{
                    display: "inline-flex",
                    border: "1px solid purple",
                  }}
                >
                  <div
                    style={{
                      border: "1px solid black",
                      borderRadius: 10,
                      backgroundColor: "white",
                      // padding: 5,
                      width: 10,
                      display: "inline-flex",
                    }}
                    name="body_5"
                  >
                    {this.state.body_5}
                  </div>
                  <div>{this.state.unit_1_5}</div>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                border: "1px solid black",
                alignItems: "center",
              }}
            >
              {/* 입력 div 시작 */}
              <div style={{ display: "flex", height: 40 }}>
                <div
                  style={{
                    border: "1px solid yellow",
                    height: 30,
                  }}
                >
                  <span style={{ float: "left" }}>{part6}:</span>
                </div>
                <div style={{ border: "1px solid blue" }}>
                  <input
                    style={{
                      borderRadius: 10,
                      width: 30,
                      padding: 5,
                      // margin: "auto",
                      // padding: "auto",
                      display: "inline-block",
                    }}
                    type="number"
                    min="0"
                    onChange={this.handleBodyChange}
                    name="body6"
                    value={this.state.body6}
                  ></input>
                  <div style={{ display: "inline-block" }}>
                    {this.state.unit_6}
                  </div>
                </div>
                <div
                  style={{
                    display: "inline-flex",
                    border: "1px solid purple",
                  }}
                >
                  <div
                    style={{
                      border: "1px solid black",
                      borderRadius: 10,
                      backgroundColor: "white",
                      // padding: 5,
                      width: 10,
                      display: "inline-flex",
                    }}
                    name="body_6"
                  >
                    {this.state.body_6}
                  </div>
                  <div>{this.state.unit_1_6}</div>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                border: "1px solid black",
                alignItems: "center",
              }}
            >
              {/* 입력 div 시작 */}
              <div style={{ display: "flex", height: 40 }}>
                <div
                  style={{
                    border: "1px solid yellow",
                    height: 30,
                  }}
                >
                  <span style={{ float: "left" }}>{part7}:</span>
                </div>
                <div style={{ border: "1px solid blue" }}>
                  <input
                    style={{
                      borderRadius: 10,
                      width: 30,
                      padding: 5,
                      // margin: "auto",
                      // padding: "auto",
                      display: "inline-block",
                    }}
                    type="number"
                    min="0"
                    onChange={this.handleBodyChange}
                    name="body7"
                    value={this.state.body7}
                  ></input>
                  <div style={{ display: "inline-block" }}>
                    {this.state.unit_7}
                  </div>
                </div>
                <div
                  style={{
                    display: "inline-flex",
                    border: "1px solid purple",
                  }}
                >
                  <div
                    style={{
                      border: "1px solid black",
                      borderRadius: 10,
                      backgroundColor: "white",
                      // padding: 5,
                      width: 10,
                      display: "inline-flex",
                    }}
                    name="body_7"
                  >
                    {this.state.body_7}
                  </div>
                  <div>{this.state.unit_1_7}</div>
                </div>
              </div>
            </div>
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
