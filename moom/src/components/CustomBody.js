import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import BodyNav from "./BodyNav";
import CustomBodyCreate from "./CustomBodyCreate";
import BasicInputPost from "./BasicInputPost";

import { BASEURL } from "../helpurl";
import axios from "axios";
axios.defaults.withCredentials = true;

// data/custom get에서 받아온 정보를 저장하는 customs
class CustomBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customs: [],
      isOpen: [],
      isCM: [],
    };
  }

  // CustomBody.js가 실행될 때 자동 실행되는 함수
  componentDidMount() {
    this.handleCustomRecentBody();
  }

  // 기록하기 버튼 클릭시 BasicInputPost를 랜더하는 함수
  openInputBodyPost = (e) => {
    let index = Number(e.target.name);
    this.setState((pre) => {
      pre.isOpen[index] = true;
      return {
        isOpen: pre.isOpen,
      };
    });
  };

  // BasicInputPost에서 저장 혹은 취소 버튼 클릭시 닫는 함수
  closeInputBodyPost = (index) => {
    this.setState((pre) => {
      pre.isOpen[index] = false;
      return { isOpen: pre.isOpen };
    });
  };

  // setState로 최근 신체정보 저장하는 함수
  handleCustomRecentBody = () => {
    axios
      .get(`${BASEURL}/data/custom`)
      .then((res) => {
        console.log("res.data==> ", res.data);
        this.setState({
          customs: res.data,
          isOpen: new Array(res.data.length),
          isCM: new Array(res.data.length),
        });
      })
      .catch((err) => {
        console.log(err);
        console.log(err.message);
      });
  };

  // 단위 변환 버튼 클릭에 따라
  handleToggleClick = (e) => {
    let part_name = e.target.name;
    this.handleMakeCMtoIN(part_name);
  };

  // CM 혹은 IN으로 바꿔 계산하여 setState하는 함수
  handleMakeCMtoIN = (part_name) => {
    let customs = this.state.customs;
    let index;
    for (let i = 0; i < customs.length; i++) {
      if (customs[i].part_name === part_name) {
        index = i;
        break;
      }
    }

    this.setState((pre) => {
      if (pre.isCM[index]) {
        pre.customs[index].value = Math.floor(pre.customs[index].value * 2.54);
        pre.isCM[index] = false;
        return {
          customs: pre.customs,
          isCM: pre.isCM,
        };
      } else {
        pre.customs[index].value = (pre.customs[index].value * 0.3937).toFixed(
          2
        );
        pre.isCM[index] = true;
        return {
          customs: pre.customs,
          isCM: pre.isCM,
        };
      }
    });
  };

  // 기록보기 버튼 클릭시 해당하는 부위의 CertainBody으로 이용하는 함수
  goCertainBody = (e) => {
    let key = e.target.name;
    this.props.bodyChoiceSuccess(key);
    this.props.history.push("/certain");
  };

  //custom을 삭제하는 함수
  handleDeleteCustom = (e) => {
    let part_name = e.target.name;
    axios
      .delete(`${BASEURL}/data/custom`, {
        data: { part_name: part_name },
        withCredentials: true,
      })
      .then((res) => {
        // 수정 성공하면 custom를 다시 setState하는 함수
        this.handleCustomRecentBody();
      })
      // TODO: 다른 상태코드에 따른 분기가 필요
      .catch((err) => {
        console.log(err.message);
      });
  };

  render() {
    const { customs, isOpen, isCM } = this.state;
    const mapcustoms = (data) => {
      // data/custom get 에서 받아온 배열 정보를 map 함수를 통해 컴포넌트로 만들기
      return data.map((custom, index) => {
        return (
          <div>
            <span>{custom.part_name}</span>
            <span>
              {isOpen[index] ? (
                <BasicInputPost
                  name={custom.part_name}
                  what={index}
                  closeInputBodyPost={this.closeInputBodyPost}
                  handleRecentBody={this.handleCustomRecentBody}
                />
              ) : (
                <>
                  {custom.value ? (
                    <>
                      <span>{custom.value}</span>
                      <button
                        name={custom.part_name}
                        onClick={this.handleToggleClick}
                      >
                        {isCM[index] ? "CM" : "IN"}
                      </button>
                      <button name={index} onClick={this.openInputBodyPost}>
                        기록하기
                      </button>
                      <button
                        name={custom.part_name}
                        onClick={this.goCertainBody}
                      >
                        기록보기
                      </button>
                      <button
                        name={custom.part_name}
                        onClick={this.handleDeleteCustom}
                      >
                        삭제
                      </button>
                    </>
                  ) : (
                    <>
                      <span>수치를 등록해주세요</span>
                      <button name={index} onClick={this.openInputBodyPost}>
                        기록하기
                      </button>
                    </>
                  )}
                </>
              )}
            </span>
          </div>
        );
      });
    };
    return (
      <>
        <BodyNav />
        <div>
          <CustomBodyCreate
            closeInputBodyPost={this.closeInputBodyPost}
            handleCustomRecentBody={this.handleCustomRecentBody}
          />
        </div>
        {mapcustoms(customs)}
      </>
    );
  }
}
export default withRouter(CustomBody);
