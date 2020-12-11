import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class CertainGoal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goal: null,
    };
  }
  //
  render() {
    return (
      <>
        <div>목표나오기 데헷</div>
      </>
    );
  }
}

export default withRouter(CertainGoal);
