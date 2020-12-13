import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { BASEURL } from "../helpurl";
import BodyNav from "./BodyNav";
import CustomBodyCreate from "./CustomBodyCreate";
import BasicInputPost from "./BasicInputPost";
import CertainData from "./CertainData";
import CertainChart from "./CertainChart";
import CertainGoal from "./CertainGoal";

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
      basicPartGoal: null,
      basicPartRecent: null,
      isAllData: false,
      selectChart: "CertainLastData",
    };
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

  handleeditopen = (e) => {
    let index = e.target.name;
    this.setState((pre) => {
      pre.editCustom[index] = !pre.editCustom[index];
      return {
        editCustom: pre.editCustom,
      };
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

  // setState로 최근 신체정보 저장하는 함수
  handleRecentBody = () => {
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
      this.certainBodyGoalGet(this.state.basicPartName);
    }
  };

  // axios통신으로  custom부위를 삭제하는 함수
  handleDeleteCustom = (e) => {
    let part_name = e.target.name;
    axios
      .delete(`${BASEURL}/data/custom`, {
        data: { part_name: part_name },
        withCredentials: true,
      })
      .then((res) => {
        // 수정 성공하면 custom를 다시 setState하는 함수
        this.handleRecentBody();
      })
      // TODO: 다른 상태코드에 따른 분기가 필요
      .catch((err) => {
        console.log(err.message);
      });
  };

  // axios통신으로  custom부위를 수정하는 함수
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
        this.handleRecentBody();
      })
      // TODO: 다른 상태코드에 따른 분기가 필요
      .catch((err) => {
        console.log(err.message);
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

  // axios통신으로 특정 신체목표와 수치를 setState하는 함수
  certainBodyGoalGet = (part) => {
    axios
      .get(`${BASEURL}/data/goal`, { params: { part_name: part } })
      .then((res) => {
        this.setState({
          basicPartGoal: res.data.goal,
          basicPartRecent: res.data.recent,
        });
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
    localStorage.setItem("customPartName", key);
    this.certainBodyDataGet(key);
    this.certainBodyGoalGet(key);
  };

  // CustomBody가 생기기 전에 실행되는 함수
  componentDidMount() {
    this.handleRecentBody();
    const contactData = localStorage.getItem("customPartName");
    console.log(contactData);
    if (contactData) {
      this.setState({ basicPartName: contactData });
      this.certainBodyDataGet(contactData);
      this.certainBodyGoalGet(contactData);
    }
  }

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

  // 단위 변환 버튼 클릭에 따라 계산해주는 함수로 연결
  handleToggleClick = (e) => {
    let part_name = e.target.name;
    this.handleMakeCMtoIN(part_name);
  };

  // select 이벤트시 선택된 chart 반환하는 함수
  handleChangeChart = (e) => {
    let chartTarget = e.target.value;
    if (chartTarget === "CertainLastData") {
      this.setState({
        isAllData: false,
        selectChart: "CertainLastData",
      });
    } else if (chartTarget === "CertainAllData") {
      this.setState({
        isAllData: true,
        selectChart: "CertainAllData",
      });
    }
  };

  render() {
    const { name } = this.props.userInfo;
    const {
      customs,
      isOpen,
      isCM,
      editCustom,
      allBodyData,
      basicPartName,
      basicPartRecent,
      basicPartGoal,
      isAllData,
      selectChart,
    } = this.state;

    // data/custom get 에서 받아온 배열 정보를 map 함수를 통해 컴포넌트로 만들기
    const mapcustoms = (data) => {
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
                  저장
                </button>
                <button name={index} onClick={this.handleeditopen}>
                  취소
                </button>
              </>
            ) : (
              <>
                <span>{custom.part_name}</span>
                {editCustom[index] ? (
                  <></>
                ) : (
                  <>
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
                )}
              </>
            )}
            <span>
              {isOpen[index] ? (
                <BasicInputPost
                  name={custom.part_name}
                  what={index}
                  closeInputBodyPost={this.closeInputBodyPost}
                  handleRecentBody={this.handleRecentBody}
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
                        {isCM[index] ? "IN" : "CM"}
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

    // map 함수를 통해 CertainData 컴포넌트로 만들기
    const DataList =
      allBodyData &&
      allBodyData.map((data) => (
        <CertainData
          data={data}
          key={data.id}
          certainBodyDataGet={this.certainBodyDataGet}
          certainBodyGoalGet={this.certainBodyGoalGet}
          handleRecentBody={this.handleRecentBody}
          partName={basicPartName}
        />
      ));

    // CustomBody 컴포넌트 리턴
    return (
      <>
        <div>
          <BodyNav />
        </div>
        <div>
          <CustomBodyCreate
            closeInputBodyPost={this.closeInputBodyPost}
            handleCustomRecentBody={this.handleRecentBody}
          />
        </div>
        <div>최근 커스텀 부위 정보</div>
        {mapcustoms(customs)}
        {basicPartName ? (
          <>
            <div>{basicPartName}을 선택했습니다.</div>
            <div>{DataList}</div>
            <div>
              <select value={selectChart} onChange={this.handleChangeChart}>
                <option value="">선택</option>
                <option value="CertainAllData">
                  All data about {basicPartName}
                </option>
                <option value="CertainLastData">
                  Last seven data about {basicPartName}
                </option>
              </select>
            </div>
            <div
              style={{
                width: "650px",
              }}
            >
              {allBodyData ? (
                <CertainChart
                  allBodyData={allBodyData}
                  partName={basicPartName}
                  isAllData={isAllData}
                />
              ) : null}
            </div>
            <div>
              <CertainGoal
                goal={basicPartGoal}
                name={name}
                partName={basicPartName}
                recent={basicPartRecent}
                certainBodyGoalGet={this.certainBodyGoalGet}
              />
            </div>
          </>
        ) : null}
      </>
    );
  }
}
export default withRouter(CustomBody);
