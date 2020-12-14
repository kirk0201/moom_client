import { Component } from "react";
import { withRouter } from "react-router-dom";

import { BASEURL } from "../helpurl";

import axios from "axios";
axios.defaults.withCredentials = true;

class CustomBodyCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenInputCustom: false,
      body_part: this.body_part,
    };
  }

  // 추가 버튼 클릭시 input태그 열리는 함수
  openInputCustom = () => {
    this.setState({
      isOpenInputCustom: true,
    });
  };

  // 저장 버튼 클릭시 input태그 닫는 함수
  closeInputCustom = () => {
    this.setState({
      isOpenInputCustom: false,
    });
  };

  // input 테그의 값이 변경될때마다 state에 다시 저장해주는 함수
  handleInputCreate = (e) => {
    const value = e.target.value;
    this.setState({
      body_part: value,
    });
  };

  // 새로운 커스텀을 생성 요청을 서버에 보내는 함수
  handleCreateBodypart = () => {
    const { body_part } = this.state;
    axios
      .post(`${BASEURL}/data/custom`, {
        part_name: body_part,
      })
      .then((res) => {
        console.log(res.data);
        this.props.handleCustomRecentBody();
        this.closeInputCustom();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  render() {
    const { isOpenInputCustom } = this.state;
    return (
      <>
        {isOpenInputCustom ? (
          <>
            <input
              type="text"
              placeholder="새로운 부위를 추가하세요"
              onChange={this.handleInputCreate}
            />
            <button onClick={this.handleCreateBodypart}>저장</button>
            <button onClick={this.closeInputCustom}>취소</button>
          </>
        ) : (
          <>
            <span>새로운 부위를 추가하세요!</span>
            <button onClick={this.openInputCustom}>추가</button>
          </>
        )}
      </>
    );
  }
}

export default withRouter(CustomBodyCreate);
