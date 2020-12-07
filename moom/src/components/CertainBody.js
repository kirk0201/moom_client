import { Component } from "react";
import { withRouter } from "react-router-dom";

class CertainBody extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div>certain바디 컴포넌트 입니다.</div>
      </>
    );
  }
}

export default withRouter(CertainBody);
