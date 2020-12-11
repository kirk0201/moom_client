import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class CertainData extends Component {
  //
  render() {
    const { id, value, schedule } = this.props.data;
    return (
      <>
        <div>
          {schedule}에 수치는 {value}입니다.
        </div>
      </>
    );
  }
}

export default withRouter(CertainData);
