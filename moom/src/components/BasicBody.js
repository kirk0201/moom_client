import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { BASEURL } from "../helpurl";
import BodyNav from "./BodyNav";
import BasicData from "./BasicData";
import CertainData from "./CertainData";
import CertainChart from "./CertainChart";
import BasicAllChart from "./BasicAllChart";
import CertainGoal from "./CertainGoal";

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
    };
  }

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
        }
      })
      .catch((err) => {
        console.log(err);
        console.log(err.message);
      });
  };

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

  // axios통신으로 특정 신체정보를 모두 setState(배열!!)하는 함수
  certainBodyDataGet = (part) => {
    axios
      .get(`${BASEURL}/data/get`, { params: { part_name: part } })
      .then((res) => {
        this.setState({ allBodyData: res.data });
        console.log(res.data);
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
    localStorage.setItem("basicPartName", key);
    this.certainBodyDataGet(key);
    this.certainBodyGoalGet(key);
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

  render() {
    const { name, sex } = this.props.userInfo;

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
    } = this.state;

    const DataList =
      allBodyData &&
      allBodyData.map((data) => (
        <CertainData
          data={data}
          key={data.id}
          certainBodyDataGet={this.certainBodyDataGet}
          certainBodyGoalGet={this.certainBodyGoalGet}
          handleRecentBody = {this.handleRecentBody}
          partName={basicPartName}
        />
      ));

    return (
      <>
        <div>
          <BodyNav />
        </div>
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
        <div>
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
                  <option value="BasicAllData">
                    All data about basic body
                  </option>
                  <option value="BasicLastData">
                    Last seven data about basic body
                  </option>
                </select>
              </div>
              <div
                style={{
                  width: "650px",
                }}
              >
                {isCertain ? (
                  <>
                    {allBodyData ? (
                      <CertainChart
                        allBodyData={allBodyData}
                        partName={basicPartName}
                        isAllData={isAllData}
                      />
                    ) : null}
                  </>
                ) : (
                  <>
                    {allBasicData ? (
                      <BasicAllChart
                        allBasicData={allBasicData}
                        allBodyData={allBodyData}
                        partName={basicPartName}
                        name={name}
                        isAllData={isAllData}
                      />
                    ) : null}
                  </>
                )}
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
        </div>
      </>
    );
  }
}

export default withRouter(BasicBody);
