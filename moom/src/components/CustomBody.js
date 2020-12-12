import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import BodyNav from "./BodyNav";
import CustomBodyCreate from "./CustomBodyCreate";
import BasicInputPost from "./BasicInputPost";
import CertainData from "./CertainData";
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
      editCustom: [],
      editValue: [],
      allBodyData: [],
      basicPartName: null,
    };
  }

  // CustomBody.js가 실행될 때 자동 실행되는 함수
  componentWillMount() {
    this.handleCustomRecentBody();
    const contactData = localStorage.getItem("basicPartName");
    console.log(contactData);
    if (contactData) {
      this.setState({ basicPartName: contactData });
    }
    this.certainBodyDataGet(contactData);
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
          editCustom: new Array(res.data.length),
          editValue: new Array(res.data.length),
        });
      })
      .catch((err) => {
        console.log(err);
        console.log(err.message);
      });
    if (this.state.basicPartName) {
      this.certainBodyDataGet(this.state.basicPartName);
    }
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

  handleeditopen = (e) => {
    let index = e.target.name;
    this.setState((pre) => {
      pre.editCustom[index] = !pre.editCustom[index];
      return {
        editCustom: pre.editCustom,
      };
    });
  };

  handleeditCustom = (e) => {
    let part_name = e.target.name;
    let index = e.target.value;
    let new_name = this.state.editValue[index];
    for (let i of this.state.customs) {
      if (i.part_name === new_name) {
        alert("동일한 이름의 커스텀을 사용중입니다.");
        return;
      }
    }
    axios
      .put(`${BASEURL}/data/custom`, {
        part_name: part_name,
        new_name: new_name,
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

  handleeditvalue = (e) => {
    let index = e.target.name;
    this.setState((pre) => {
      pre.editValue[index] = e.target.value;
      return {
        editValue: pre.editValue,
      };
    });
  };

  // axios통신으로 특정 신체정보를 setState하는 함수
  certainBodyDataGet = (part) => {
    axios
      .get(`${BASEURL}/data/get`, { params: { part_name: part } })
      .then((res) => {
        console.log(res.data);
        this.setState({ allBodyData: res.data });
      })
      .catch((err) => {
        console.log(err);
        console.log(err.message);
      });
  };

  // 기록보기 버튼 클릭시 basicPartName을 setState하는 함수
  bodyChoiceSuccess = (e) => {
    let key = e.target.name;
    this.setState({ basicPartName: key });
    localStorage.setItem("basicPartName", key);
    this.certainBodyDataGet(key);
  };

  render() {
    const {
      customs,
      isOpen,
      isCM,
      editCustom,
      allBodyData,
      basicPartName,
    } = this.state;
    const mapcustoms = (data) => {
      // data/custom get 에서 받아온 배열 정보를 map 함수를 통해 컴포넌트로 만들기
      return data.map((custom, index) => {
        return (
          <div>
            {editCustom[index] ? (
              <>
                <input
                  type="text"
                  placeholder={custom.part_name}
                  name={index}
                  onChange={this.handleeditvalue}
                />
                <button
                  name={custom.part_name}
                  value={index}
                  onClick={this.handleeditCustom}
                >
                  수정
                </button>
                <button name={index} onClick={this.handleeditopen}>
                  취소
                </button>
              </>
            ) : (
              <span>{custom.part_name}</span>
            )}
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
                        onClick={this.bodyChoiceSuccess}
                      >
                        기록보기
                      </button>
                      <button name={index} onClick={this.handleeditopen}>
                        수정
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
    const DataList =
      allBodyData &&
      allBodyData.map((data) => <CertainData data={data} key={data.id} />);
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
        <div>{basicPartName}을 선택했습니다.</div>
        <div>{DataList}</div>
      </>
    );
  }
}
export default withRouter(CustomBody);
