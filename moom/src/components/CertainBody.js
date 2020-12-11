import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { BASEURL } from "../helpurl";
import BodyNav from "./BodyNav";
import Chart from "./CertainChart/Chart";

import axios from "axios";
axios.defaults.withCredentials = true;

class CertainBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      partName: this.props.partName,
    };
  }

  render() {
    const { partName } = this.state;
    return (
      <>
        <BodyNav />
        <div>{`${partName}을 선택했습니다.`}</div>
        <div><Chart /></div>
      </>
    );
  }
}

export default withRouter(CertainBody);
