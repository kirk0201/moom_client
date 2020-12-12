import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { BASEURL } from "../helpurl";
import BodyNav from "./BodyNav";
import BasicData from "./BasicData";
import CertainData from "./CertainData";
import Chart from "./CertainChart/Chart"
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
      isWeightKG: true,
      isShoulderCM: true,
      isChestCM: true,
      isWaistCM: true,
      isHipCM: true,
      isThighCM: true,
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

  // axios통신으로 특정 신체정보를 모두 setState(배열!!)하는 함수
  certainBodyDataGet = (part) => {
    axios
      .get(`${BASEURL}/data/get`, { params: { part_name: part } })
      .then((res) => {
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
    localStorage.setItem("basicPartName", key);
    this.certainBodyDataGet(key);
    this.certainBodyGoalGet(key);
  };

  // BasicBody가 생기기 전에 실행되는 함수
  componentDidMount() {
    this.handleRecentBody();
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
      isWeightKG,
      isShoulderCM,
      isChestCM,
      isWaistCM,
      isHipCM,
      isThighCM,
    } = this.state;

    const DataList =
      allBodyData &&
      allBodyData.map((data) => (
        <CertainData
          data={data}
          key={data.id}
          certainBodyDataGet={this.certainBodyDataGet}
          certainBodyGoalGet={this.certainBodyGoalGet}
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
        <div>
          <Chart allBodyData={allBodyData} />
        </div>
      </>
    );
  }
}

export default withRouter(BasicBody);
