import { Component } from "react";
import { withRouter } from "react-router-dom";

import { BASEURL } from "../helpurl";

import axios from "axios";
axios.defaults.withCredentials = true;

class CustomBodyCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body_part: this.body_part,
    };
  }

  // input 테그의 값이 변경될때마다 state에 다시 저장해주는 함수
  handleInputCreate = (e) => {
    const value = e.target.value;
    this.setState({
      body_part: value,
    });
  };

  //새로운 커스텀을 생성 요청을 서버에 보내는 함수
  handleCreateBodypart = () => {
    const { body_part } = this.state;
    axios
      .post(`${BASEURL}/data/custom`, {
        part_name: body_part,
      })
      .then((res) => {
        console.log(res.data);
        this.props.handleCustomRecentBody();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  render() {
    return (
      <>
        <input
          type="text"
          placeholder="새로운 부위를 추가하세요"
          onChange={this.handleInputCreate}
        />
        <button onClick={this.handleCreateBodypart}>
          저장
        </button>
      </>
    );
  }
}

export default withRouter(CustomBodyCreate);
