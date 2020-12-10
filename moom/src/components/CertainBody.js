import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { BASEURL } from "../helpurl";

import axios from "axios";
axios.defaults.withCredentials = true;

class CertainBody extends Component {
  render() {
    const { partName } = this.props;
    return (
      <>
        <div>{partName}을 선택했습니다.</div>
      </>
    );
  }
}

export default withRouter(CertainBody);
