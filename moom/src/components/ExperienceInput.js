import React, { Component } from "react";

export default class ExperienceInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bodyL: "",
      bodyR: "",
      unitL: "",
      unitR: "",
    };
  }

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
              name={this.props.inputR}
              value={this.props.bodyL}
            ></input>
            <div style={{ display: "inline-block" }}>{this.props.unitL}</div>
          </div>
          <div className="input_right">
            <input
              name={this.props.inputR}
              readOnly
              value={this.props.bodyR}
            ></input>
            <div>{this.state.unit_1_1}</div>
          </div>
        </div>
      </>
    );
  }
}
