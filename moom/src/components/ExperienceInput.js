import React, { Component } from "react";

export default class ExperienceInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bodyL: "",
      bodyR: "",
      unitL: this.props.unitL,
      unitR: this.props.unitR,
      radio: false,
    };
  }
  handleStateChange = (e) => {
    // const name = e.target.name;
    // const value = e.target.value;

    this.setState({
      radio: !this.state.radio,
    });
    console.log(this.state.radio);
    if (this.state.radio === false && this.props.name === "체중") {
      this.setState({
        // bodyL: this.state.bodyL,
        bodyL: (this.state.bodyL * 2.205).toFixed(2),
        bodyR: this.state.bodyL,
        unitR: this.props.unitL,
      });
    } else if (this.state.radio === true && this.props.name === "체중") {
      this.setState({
        bodyL: (this.state.bodyL / 2.205).toFixed(2),
        bodyR: this.state.bodyL,
        unitR: this.props.unitR,
      });
    } else if (this.state.radio === false && this.props.name === "체지방율") {
      this.setState({
        bodyL: this.state.bodyL,
        bodyR: this.state.bodyL,
        unitR: this.props.unitL,
      });
    } else if (this.state.radio === true && this.props.name === "체지방율") {
      this.setState({
        bodyL: this.state.bodyL,
        bodyR: this.state.bodyL,
        unitR: this.props.unitR,
      });
    } else if (this.state.radio === false) {
      this.setState({
        bodyL: (this.state.bodyL / 2.54).toFixed(2),
        bodyR: this.state.bodyL,
        unitR: this.props.unitL,
      });
    } else if (this.state.radio === true) {
      this.setState({
        bodyL: (this.state.bodyL * 2.54).toFixed(2),
        bodyR: this.state.bodyL,
        unitR: this.props.unitR,
      });
    }
  };

  handleBodyChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    // cm-kg, 200kg 이하 조건
    if (
      this.state.radio === false &&
      e.target.value <= 200 &&
      this.props.name === "체중"
    ) {
      this.setState({
        [name]: value,
        bodyR: (value * 2.205).toFixed(2),
      });
    }
    // in-ln일때 441ln 이하 조건
    else if (
      this.state.radio === true &&
      e.target.value <= 441 &&
      this.props.name === "체중"
    ) {
      this.setState({
        [name]: value,
        bodyR: (value / 2.205).toFixed(2),
      });
    }

    // 체지방율일 경우만 다른 조건 사용 (체지방만 단위 변화가 필요 없기 때문에)
    else if (this.props.name === "체지방율" && e.target.value <= 100) {
      this.setState({
        [name]: value,
        bodyR: value,
      });
    } else if (
      this.state.radio === false &&
      this.props.name !== "체지방율" &&
      this.props.name !== "체중"
    ) {
      this.setState({
        [name]: value,
        bodyR: (value / 2.54).toFixed(2),
      });
    } else if (
      this.state.radio === true &&
      this.props.name !== "체지방율" &&
      this.props.name !== "체중"
    ) {
      this.setState({
        [name]: value,
        bodyR: (value * 2.54).toFixed(2),
      });
    }
  };
  render() {
    console.log("prop : ", this.props);
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
              name="bodyL"
              value={this.state.bodyL}
              maxLength="4"
            ></input>
            <button onClick={this.handleStateChange}>
              {this.state.radio ? this.props.unitR : this.props.unitL}
            </button>
          </div>
          {/* 오른쪽 끝 div 예비 코드 */}
          <div className="input_right">
            <input name="bodyR" readOnly value={this.state.bodyR}></input>
            <div>{this.state.unitR}</div>
          </div>
        </div>
      </>
    );
  }
}
