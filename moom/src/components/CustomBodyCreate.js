import { Component } from "react";
import { withRouter } from "react-router-dom";

import AddIcon from "@material-ui/icons/Add";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import SaveIcon from "@material-ui/icons/Save";

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
            <div class="w-72 h-20 shadow mb-4 mr-4 bg-white rounded-md border border-dashed border-gray-300 hover:border-gray-500">
              <div class="mt-2 flex justify-between">
                <div class="pl-11 text-center mt-3">
                  <input
                    class="p-1 text-sm border-b border-solid border-gray-300 focus:outline-none text-gray-800"
                    type="text"
                    placeholder="새로운 부위를 추가하세요"
                    onChange={this.handleInputCreate}
                  />
                </div>
                <div class="ml-1 opacity-50 mt-3 mr-3">
                  <button
                    class="mr-1 focus:outline-none"
                    onClick={this.handleCreateBodypart}
                  >
                    <SaveIcon />
                  </button>
                  <button
                    class="focus:outline-none"
                    onClick={this.closeInputCustom}
                  >
                    <CloseOutlinedIcon />
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div class="w-72 h-20 shadow mb-4 mr-4 bg-white rounded-md border border-dashed border-gray-300 hover:border-gray-500">
              <div class="mt-3 text-sm font-semibold tracking-tight text-center">
                <span class=" text-gray-500">새로운</span>
                <span class="pl-1 text-purple-600">부위</span>
                <span class="text-gray-600">를 추가하세요</span>
              </div>

              <div class="text-center pt-1 opacity-60">
                <button
                  class="m-auto focus:outline-none"
                  onClick={this.openInputCustom}
                >
                  <AddIcon />
                </button>
              </div>
            </div>
          </>
        )}
      </>
    );
  }
}

export default withRouter(CustomBodyCreate);
