import { Component } from "react";
import { withRouter } from "react-router-dom";

class BasicBody extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div>베이직바디 컴포넌트 입니다.</div>
      </>
    );
  }
}

export default withRouter(BasicBody);
