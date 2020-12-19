import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { BASEURL } from "../helpurl";
import BodyNav from "./BodyNav";
import CustomBodyCreate from "./CustomBodyCreate";
import BasicInputPost from "./BasicInputPost";
import CertainChart from "./CertainChart";
import CertainEdit from "./CertainEdit";
import CertainGoal from "./CertainGoal";
import "../css/BasicBody.css";

import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import SaveIcon from "@material-ui/icons/Save";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";

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
      isCertainEdit: false,
      date: null,
      value: null,
      id: null,
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
    let index = e.currentTarget.name;
    this.setState((pre) => {
      pre.editCustom[index] = !pre.editCustom[index];
      return {
        editCustom: pre.editCustom,
      };
    });
  };

  handleeditvalue = (e) => {
    let index = e.currentTarget.name;
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
    let part_name = e.currentTarget.name;
    localStorage.removeItem("customPartName");
    this.setState({
      basicPartName: null,
    });
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
    let part_name = e.currentTarget.name;
    let index = e.currentTarget.value;
    let new_name = this.state.editValue[index];
    for (let i of this.state.customs) {
      if (i.part_name === new_name) {
        alert("동일한 이름의 커스텀을 사용중입니다.");
        return;
      }
    }
    // localStorage.removeItem("customPartName");
    // this.setState({
    //   basicPartName: null,
    // });
    localStorage.setItem("customPartName", new_name);
    this.setState({
      basicPartName: new_name,
    });
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
        console.log(res.data.length);
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

  // chart의 포인트 클릭시 해당 데이터의 정보만 setState하는 함수
  handlePointClick = (date, value, id) => {
    this.setState({
      date: date,
      value: value,
      id: id,
      isCertainEdit: true,
    });
  };

  // chart의 포인트 클릭시 랜더된 CertainEdit을 닫는 함수
  handleDeleteEdit = () => {
    this.setState({
      isCertainEdit: false,
    });
  };

  render() {
    const { name } = this.props.userInfo;
    const { handleHeader, header } = this.props;
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
      isCertainEdit,
      date,
      value,
      id,
    } = this.state;

    // data/custom get 에서 받아온 배열 정보를 map 함수를 통해 컴포넌트로 만들기
    const mapcustoms = (data) => {
      return data.map((custom, index) => {
        return (
          <div class="w-72 h-20 shadow mb-4 mr-4 bg-white rounded-md p-3 border border-dashed border-gray-300 hover:border-gray-500">
            {editCustom[index] ? (
              <>
                <div class="flex justify-between">
                  <div>
                    <input
                      class=" border-b border-solid border-gray-300 focus:outline-none text-gray-800"
                      type="text"
                      placeholder={custom.part_name}
                      name={index}
                      onChange={this.handleeditvalue}
                    />
                  </div>
                  <div class="opacity-50">
                    <button
                      class="mr-1 focus:outline-none"
                      name={custom.part_name}
                      value={index}
                      onClick={this.handleeditCustom}
                    >
                      <SaveIcon />
                    </button>
                    <button
                      class="focus:outline-none"
                      name={index}
                      onClick={this.handleeditopen}
                    >
                      <CloseOutlinedIcon />
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div class="flex justify-between">
                  <div>
                    <span class="text-base font-bold text-purple-600 hover:text-purple-400">
                      {custom.part_name}
                    </span>
                  </div>
                  {editCustom[index] ? (
                    <></>
                  ) : (
                    <>
                      <div class="opacity-50">
                        <button
                          class="mr-1 focus:outline-none"
                          name={index}
                          onClick={this.handleeditopen}
                        >
                          <CreateIcon />
                        </button>
                        <button
                          class="focus:outline-none"
                          name={custom.part_name}
                          onClick={this.handleDeleteCustom}
                        >
                          <DeleteIcon />
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </>
            )}

            <div>
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
                      <div class="flex items-center justify-between">
                        <div class="flex items-center">
                          <span class="text-2xl font-medium">
                            {custom.value}
                          </span>
                        </div>
                        <div class="absolute ml-14">
                          <button
                            class="shadow-md text-xs mt-1 focus:outline-none font-medium ml-2 rounded p-1 bg-gray-200 hover:bg-gray-300"
                            name={custom.part_name}
                            onClick={this.handleToggleClick}
                          >
                            {isCM[index] ? "IN" : "CM"}
                          </button>
                        </div>
                        <div>
                          <button
                            class="focus:outline-none shadow-md ml-12 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded p-1 text-xs"
                            name={index}
                            onClick={this.openInputBodyPost}
                          >
                            RECORD
                          </button>
                          <button
                            class="focus:outline-none shadow-md ml-1 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded p-1 text-xs"
                            name={custom.part_name}
                            onClick={this.bodyChoiceSuccess}
                          >
                            SHOW
                          </button>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div class="flex items-center justify-between">
                        <span class="ml-2 text-2xl font-normal text-gray-700">
                          --
                        </span>
                        <button
                          class="focus:outline-none shadow-md ml-36 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded p-1 text-xs"
                          name={index}
                          onClick={this.openInputBodyPost}
                        >
                          RECORD
                        </button>
                      </div>
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        );
      });
    };

    // map 함수를 통해 CertainData 컴포넌트로 만들기
    // const DataList =
    //   allBodyData &&
    //   allBodyData.map((data) => (
    //     <CertainData
    //       data={data}
    //       key={data.id}
    //       certainBodyDataGet={this.certainBodyDataGet}
    //       certainBodyGoalGet={this.certainBodyGoalGet}
    //       handleRecentBody={this.handleRecentBody}
    //       partName={basicPartName}
    //     />
    //   ));

    // CustomBody 컴포넌트 리턴
    return (
      <>
        <div class="nav relative top-96">
          <BodyNav handleHeader={handleHeader} header={header} />
        </div>

        <div class="custom mb-10">
          <div class="tracking-tight text-2xl font-bold">
            <span class="text-gray-900">Recent</span>
            <span class=" pl-1 text-purple-400">Custom body</span>
          </div>

          <div class="grid grid-cols-2 max-w-screen-xl mt-9">
            <div class="flex flex-wrap max-w-2xl min-w-min">
              <CustomBodyCreate
                closeInputBodyPost={this.closeInputBodyPost}
                handleCustomRecentBody={this.handleRecentBody}
              />
              {mapcustoms(customs)}
            </div>

            <div class="row-span-5 ml-4">
              {basicPartName ? (
                <>
                  {allBodyData.length ? (
                    <>
                      <div className="chart">
                        <CertainChart
                          allBodyData={allBodyData}
                          partName={basicPartName}
                          isAllData={isAllData}
                          handlePointClick={this.handlePointClick}
                        />
                      </div>
                      <div className="certain mt-9 mb-4 pt-80 pl-10 pb-5 pr-10 bg-white shadow-lg rounded-lg border border-dashed border-gray-300 hover:border-gray-500">
                        <div class="tracking-tight md:flex items-center justify-between">
                          <div class="font-bold text-2xl text-gray-800">
                            {basicPartName}
                          </div>
                          <div>
                            <select
                              class="mt-1 rounded-sm border border-dashed text-xs font-medium text-gray-800 border-gray-300 hover:border-purple-500 p-1  bg-white shadow flex items-center focus:outline-none"
                              value={selectChart}
                              onChange={this.handleChangeChart}
                            >
                              <option class="hover:bg-white" value="">
                                CHOSSE
                              </option>
                              <option value="CertainAllData">
                                ALL DATA ABOUT {basicPartName}
                              </option>
                              <option value="CertainLastData">
                                LAST SEVEN DATA ABOUT {basicPartName}
                              </option>
                            </select>
                          </div>
                        </div>

                        <div>
                          {isCertainEdit ? (
                            <>
                              <CertainEdit
                                id={id}
                                value={value}
                                date={date}
                                basicPartName={basicPartName}
                                certainBodyDataGet={this.certainBodyDataGet}
                                certainBodyGoalGet={this.certainBodyGoalGet}
                                handleRecentBody={this.handleRecentBody}
                                handleDeleteEdit={this.handleDeleteEdit}
                              />
                            </>
                          ) : (
                            <>
                              <div
                                class="text-sm text-left text-gray-600 bg-gray-200 border border-gray-400 h-12 flex items-center p-4 rounded-sm"
                                role="alert"
                              >
                                그래프 포인트를 클릭하면 원하는 날짜의 데이터를
                                수정할 수 있어요!
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                      <div className="certain pt-5 pl-10 pb-5 pr-10 bg-white shadow-lg rounded-lg border border-dashed border-gray-300 hover:border-gray-500">
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
              ) : null}
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default withRouter(CustomBody);
