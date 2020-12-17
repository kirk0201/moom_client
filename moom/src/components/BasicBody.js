import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { BASEURL } from "../helpurl";
import BodyNav from "./BodyNav";
import BasicData from "./BasicData";
import CertainChart from "./CertainChart";
import CertainEdit from "./CertainEdit";
import BasicAllChart from "./BasicAllChart";
import CertainGoal from "./CertainGoal";
import "../css/BasicBody.css";

import axios from "axios";
axios.defaults.withCredentials = true;

class BasicBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body_fat: null,
      weight: null,
      shoulder: null,
      chest: null,
      waist: null,
      hip: null,
      thigh: null,
      basicPartName: null,
      basicPartRecent: null,
      basicPartGoal: null,
      allBodyData: null,
      allBasicData: null,
      isWeightKG: true,
      isShoulderCM: true,
      isChestCM: true,
      isWaistCM: true,
      isHipCM: true,
      isThighCM: true,
      isAllData: false,
      isCertain: true,
      selectChart: "CertainLastData",
      isCertainEdit: false,
      date: null,
      value: null,
      id: null,
    };
  }

  // axios통신으로 기본 신체정보를 모두 setState(객체안에 배열!!)하는 함수
  basicBodyDataGet = () => {
    axios
      .get(`${BASEURL}/data/allbasic`)
      .then((res) => {
        this.setState({ allBasicData: res.data });
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
        console.log(err.message);
      });
  };

  // axios통신으로 최근 신체정보를 setState하는 함수
  handleRecentBody = () => {
    axios
      .get(`${BASEURL}/data/recent`)
      .then((res) => {
        this.setState({
          body_fat: res.data.body_fat,
          weight: res.data.weight,
          shoulder: res.data.shoulder,
          chest: res.data.chest,
          waist: res.data.waist,
          hip: res.data.hip,
          thigh: res.data.thigh,
        });
        if (this.state.basicPartName) {
          this.certainBodyDataGet(this.state.basicPartName);
          this.certainBodyGoalGet(this.state.basicPartName);
          this.basicBodyDataGet();
        }
      })
      .catch((err) => {
        console.log(err);
        console.log(err.message);
      });
  };

  // axios통신으로 특정 신체정보를 모두 setState하는 함수
  certainBodyDataGet = (part) => {
    axios
      .get(`${BASEURL}/data/get`, { params: { part_name: part } })
      .then((res) => {
        this.setState({ allBodyData: res.data });
        console.log(res.data);
        this.basicBodyDataGet();
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
    this.setState({ basicPartName: key, isCertainEdit: false });
    localStorage.setItem("basicPartName", key);
    this.certainBodyDataGet(key);
    this.certainBodyGoalGet(key);
    this.basicBodyDataGet();
  };

  // BasicBody가 생기기 전에 실행되는 함수
  componentDidMount() {
    this.handleRecentBody();
    this.basicBodyDataGet();
    const contactData = localStorage.getItem("basicPartName");
    if (contactData) {
      this.setState({ basicPartName: contactData });
      this.certainBodyDataGet(contactData);
      this.certainBodyGoalGet(contactData);
    }
  }

  // KG 혹은 LN으로 바꿔 계산하여 setState하는 함수
  handleMakeKGtoLN = () => {
    const { isWeightKG, weight } = this.state;
    if (isWeightKG) {
      this.setState({ weight: Math.floor(weight * 2.205) });
    } else {
      this.setState({ weight: (weight * 0.454).toFixed(1) });
    }
  };

  // CM 혹은 IN으로 바꿔 계산하여 setState하는 함수
  handleMakeCMtoIN = (key) => {
    const {
      isShoulderCM,
      isChestCM,
      isWaistCM,
      isHipCM,
      isThighCM,
      shoulder,
      chest,
      waist,
      hip,
      thigh,
    } = this.state;
    if (key === "isShoulderCM") {
      if (isShoulderCM) {
        this.setState({ shoulder: (shoulder * 0.3937).toFixed(2) });
      } else {
        this.setState({ shoulder: Math.floor(shoulder * 2.54) });
      }
    }
    if (key === "isChestCM") {
      if (isChestCM) {
        this.setState({ chest: (chest * 0.3937).toFixed(2) });
      } else {
        this.setState({ chest: Math.floor(chest * 2.54) });
      }
    }
    if (key === "isWaistCM") {
      if (isWaistCM) {
        this.setState({ waist: (waist * 0.3937).toFixed(2) });
      } else {
        this.setState({ waist: Math.floor(waist * 2.54) });
      }
    }
    if (key === "isHipCM") {
      if (isHipCM) {
        this.setState({ hip: (hip * 0.3937).toFixed(2) });
      } else {
        this.setState({ hip: Math.floor(hip * 2.54) });
      }
    }
    if (key === "isThighCM") {
      if (isThighCM) {
        this.setState({ thigh: (thigh * 0.3937).toFixed(2) });
      } else {
        this.setState({ thigh: Math.floor(thigh * 2.54) });
      }
    }
  };

  // 단위변환 버튼 클릭에 따라 계산해주는 함수로 연결
  handleToggleClick = (e) => {
    let toggle = e.target.name;
    this.setState((prevState) => ({
      [toggle]: !prevState[toggle],
    }));
    if (toggle === "isWeightKG") {
      this.handleMakeKGtoLN();
    } else {
      this.handleMakeCMtoIN(toggle);
    }
  };

  // select 이벤트시 선택된 chart 반환하는 함수
  handleChangeChart = (e) => {
    let chartTarget = e.target.value;
    if (chartTarget === "CertainLastData") {
      this.setState({
        isAllData: false,
        isCertain: true,
        selectChart: "CertainLastData",
      });
    } else if (chartTarget === "CertainAllData") {
      this.setState({
        isAllData: true,
        isCertain: true,
        selectChart: "CertainAllData",
      });
    } else if (chartTarget === "BasicLastData") {
      this.setState({
        isAllData: false,
        isCertain: false,
        selectChart: "BasicLastData",
      });
    } else if (chartTarget === "BasicAllData") {
      this.setState({
        isAllData: true,
        isCertain: false,
        selectChart: "BasicAllData",
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
    const { name, sex } = this.props.userInfo;
    const { handleHeader, header } = this.props;
    const {
      body_fat,
      weight,
      shoulder,
      chest,
      waist,
      hip,
      thigh,
      basicPartName,
      basicPartRecent,
      basicPartGoal,
      allBodyData,
      allBasicData,
      isWeightKG,
      isShoulderCM,
      isChestCM,
      isWaistCM,
      isHipCM,
      isThighCM,
      isAllData,
      isCertain,
      selectChart,
      isCertainEdit,
      date,
      value,
      id,
    } = this.state;

    let partName = basicPartName;
    if (basicPartName) {
      if (partName.toUpperCase()) {
        partName = partName.toUpperCase();
      }
    }

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
    //       basicBodyDataGet={this.basicBodyDataGet}
    //       partName={basicPartName}
    //     />
    //   ));

    // CustomBody 컴포넌트 리턴
    return (
      <>
        <div class="relative top-96">
          <BodyNav handleHeader={handleHeader} header={header} />
        </div>
        <div class="mt-2 ml-10 mr-10 mb-10 md:flex">
          <div>
            <BasicData
              sex={sex}
              body_fat={body_fat}
              weight={weight}
              shoulder={shoulder}
              chest={chest}
              waist={waist}
              hip={hip}
              thigh={thigh}
              handleRecentBody={this.handleRecentBody}
              bodyChoiceSuccess={this.bodyChoiceSuccess}
              handleToggleClick={this.handleToggleClick}
              isWeightKG={isWeightKG}
              isShoulderCM={isShoulderCM}
              isChestCM={isChestCM}
              isWaistCM={isWaistCM}
              isHipCM={isHipCM}
              isThighCM={isThighCM}
            />
          </div>
          <div class="mt-5">
            {basicPartName ? (
              <>
                {isCertain ? (
                  <>
                    {allBodyData ? (
                      <div className="chart">
                        <CertainChart
                          allBodyData={allBodyData}
                          partName={basicPartName}
                          isAllData={isAllData}
                          handlePointClick={this.handlePointClick}
                        />
                      </div>
                    ) : null}
                  </>
                ) : (
                  <>
                    {allBasicData ? (
                      <div className="chart">
                        <BasicAllChart
                          allBasicData={allBasicData}
                          allBodyData={allBodyData}
                          partName={basicPartName}
                          name={name}
                          isAllData={isAllData}
                        />
                      </div>
                    ) : null}
                  </>
                )}
                <div className="certain mt-9 mb-4 pt-80 pl-10 pb-5 pr-10 bg-white shadow-lg rounded-lg border border-dashed border-gray-300 hover:border-gray-500">
                  <div class="tracking-tight md:flex items-center justify-between">
                    <div class="font-bold text-2xl text-gray-800">
                      {partName}
                    </div>

                    {/* <div>{DataList}</div> */}
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
                          ALL DATA ABOUT {partName}
                        </option>
                        <option value="CertainLastData">
                          LAST SEVEN DATA ABOUT {partName}
                        </option>
                        <option value="BasicAllData">
                          ALL DATA ABOUT BASIC BODY
                        </option>
                        <option value="BasicLastData">
                          LAST SEVEN DATA ABOUT BASIC BODY
                        </option>
                      </select>
                    </div>
                  </div>

                  <div class="mt-4">
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
                          basicBodyDataGet={this.basicBodyDataGet}
                          handleDeleteEdit={this.handleDeleteEdit}
                        />
                      </>
                    ) : (
                      <>
                        <div
                          class="text-sm text-left text-gray-600 bg-gray-200 border border-gray-400 h-12 flex items-center p-4 rounded-sm"
                          role="alert"
                        >
                          그래프 포인트를 클릭하면 원하는 날짜의 데이터를 수정할
                          수 있어요!
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
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(BasicBody);
