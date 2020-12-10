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
      body_part: this.body_part,
    };
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
    const { body_part } = this.state;
    axios
      .post(`${BASEURL}/data/custom`, {
        part_name: body_part,
      })
      .then((res) => {
        console.log(res.data);
        this.props.closeInput(key);
        this.props.handleCustomRecentBody();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  render() {
    const { name, what, type, info, noInfo } = this.props;
    return (
      <>
        <input
          name={name}
          type={type}
          paleceholder={info ? info : noInfo}
          onChange={this.handleInputCreate}
        />
        <button name={what} onClick={this.handleCreateBodypart}>
          저장
        </button>
      </>
    );
  }
}

export default withRouter(CustomBodyCreate);
