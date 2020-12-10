import { Component } from "react";
import { withRouter } from "react-router-dom";

import { BASEURL } from "../helpurl";

import axios from "axios";
axios.defaults.withCredentials = true;

// TODO: 이메일 중복 버튼, 서버 요청, 에러 메세지 확인
class CustomBodyCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body_part1: "",
    };
    // this.handleInputCreate = this.handleInputCreate.bind(this);
    // this.handleCreateBodypart = this.handleCreateBodypart.bind(this);
  }

  // input 이벤트시 서버에게 보낼 정보 저장하는 함수
  handleInputCreate = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  };

  // 커스텀부위추가 버튼 클릭시 axios요청 함수
  handleCreateBodypart = (e) => {
    let key = e.target.name;
    const { body_part1 } = this.state;
    axios
      .post(`${BASEURL}/data/custom`, {
        part_name: body_part1,
      })
      .then((res) => {
        console.log(res.data);
        this.props.closeInput(key);
        this.props.handleRecentBody();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  render() {
    const { info, name, noInfo, what } = this.props;
    return (
      <>
        <input
          name={name}
          placeholder={info ? info : noInfo}
          onChange={this.handleCreateBodypart}
        />
        <button name={what} onClick={this.handleInputCreate}>
          저장
        </button>
      </>
    );
  }
}

export default withRouter(CustomBodyCreate);
