import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { BASEURL } from "../helpurl";
import BodyNav from "./BodyNav";
import BasicInputPost from "./BasicInputPost";

import male from "../images/maleimg.png";
import female from "../images/femaleimg.png";

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
      isOpenBodyfat: false,
      isOpenWeight: false,
      isOpenShoulder: false,
      isOpencChest: false,
      isOpenWaist: false,
      isOpenHip: false,
      isOpenThigh: false,
      isWeightKG: true,
      isShoulderCM: true,
      isChestCM: true,
      isWaistCM: true,
      isHipCM: true,
      isThighCM: true,
    };
  }

  // BasicBody.js가 실행될 때 자동 실행되는 함수
  componentDidMount() {
    this.handleRecentBody();
  }

  // setState로 최근 신체정보 저장하는 함수
  handleRecentBody = () => {
    axios
      .get(`${BASEURL}/data/recent`)
      .then((res) => {
        console.log(res.data);
        this.setState({
          body_fat: res.data.body_fat,
          weight: res.data.weight,
          shoulder: res.data.shoulder,
          chest: res.data.chest,
          waist: res.data.waist,
          hip: res.data.hip,
          thigh: res.data.thigh,
        });
      })
      .catch((err) => {
        console.log(err);
        console.log(err.message);
      });
  };

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

  // 단위 변환 버튼 클릭에 따라
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

  // 기록하기 버튼 클릭시 BasicInputPost를 랜더하는 함수
  openInputBodyPost = (e) => {
    console.log();
    let target = e.target;
    let key = target.name;
    this.setState({
      [key]: true,
    });
  };

  // BasicInputPost에서 저장 혹은 취소 버튼 클릭시 닫는 함수
  closeInputBodyPost = (key) => {
    this.setState({
      [key]: false,
    });
  };

  // 기록보기 버튼 클릭시 해당하는 부위의 CertainBody으로 이용하는 함수
  goCertainBody = (e) => {
    let key = e.target.name;
    this.props.bodyChoiceSuccess(key);
    this.props.history.push("/certain");
  };

  render() {
    const { sex } = this.props.userInfo;
    const {
      body_fat,
      weight,
      shoulder,
      chest,
      waist,
      hip,
      thigh,
      isOpenBodyfat,
      isOpenWeight,
      isOpenShoulder,
      isOpencChest,
      isOpenWaist,
      isOpenHip,
      isOpenThigh,
      isWeightKG,
      isShoulderCM,
      isChestCM,
      isWaistCM,
      isHipCM,
      isThighCM,
    } = this.state;

    let isMale = false;
    if (sex === "male") {
      isMale = true;
    }
    return (
      <>
        <BodyNav />
        <div>최근 기본 부위 정보</div>
        {sex ? (
          <img src={isMale ? male : female} alt="전신 일러스트"></img>
        ) : (
          <span>마이페이지에서 성별을 선택해주세요</span>
        )}
        <div>
          <span>체지방율</span>
          <span>
            {isOpenBodyfat ? (
              <BasicInputPost
                name="body_fat"
                what="isOpenBodyfat"
                closeInputBodyPost={this.closeInputBodyPost}
                handleRecentBody={this.handleRecentBody}
              />
            ) : (
              <>
                {body_fat ? (
                  <>
                    <span>{body_fat}</span>
                    <span>%</span>
                    <button
                      name="isOpenBodyfat"
                      onClick={this.openInputBodyPost}
                    >
                      기록하기
                    </button>
                    <button name="body_fat" onClick={this.goCertainBody}>
                      기록보기
                    </button>
                  </>
                ) : (
                  <>
                    <span>수치를 등록해주세요</span>
                    <button
                      name="isOpenBodyfat"
                      onClick={this.openInputBodyPost}
                    >
                      기록하기
                    </button>
                  </>
                )}
              </>
            )}
          </span>
        </div>
        <div>
          <span>체중</span>
          <span>
            {isOpenWeight ? (
              <BasicInputPost
                name="weight"
                what="isOpenWeight"
                closeInputBodyPost={this.closeInputBodyPost}
                handleRecentBody={this.handleRecentBody}
              />
            ) : (
              <>
                {weight ? (
                  <>
                    <span>{weight}</span>
                    <button name="isWeightKG" onClick={this.handleToggleClick}>
                      {isWeightKG ? "KG" : "LN"}
                    </button>
                    <button
                      name="isOpenWeight"
                      onClick={this.openInputBodyPost}
                    >
                      기록하기
                    </button>
                    <button name="weight" onClick={this.goCertainBody}>
                      기록보기
                    </button>
                  </>
                ) : (
                  <>
                    <span>수치를 등록해주세요</span>
                    <button
                      name="isOpenWeight"
                      onClick={this.openInputBodyPost}
                    >
                      기록하기
                    </button>
                  </>
                )}
              </>
            )}
          </span>
        </div>
        <div>
          <span>어깨길이</span>
          <span>
            {isOpenShoulder ? (
              <BasicInputPost
                name="shoulder"
                what="isOpenShoulder"
                closeInputBodyPost={this.closeInputBodyPost}
                handleRecentBody={this.handleRecentBody}
              />
            ) : (
              <>
                {shoulder ? (
                  <>
                    <span>{shoulder}</span>
                    <button
                      name="isShoulderCM"
                      onClick={this.handleToggleClick}
                    >
                      {isShoulderCM ? "CM" : "IN"}
                    </button>
                    <button
                      name="isOpenShoulder"
                      onClick={this.openInputBodyPost}
                    >
                      기록하기
                    </button>
                    <button name="shoulder" onClick={this.goCertainBody}>
                      기록보기
                    </button>
                  </>
                ) : (
                  <>
                    <span>수치를 등록해주세요</span>
                    <button
                      name="isOpenShoulder"
                      onClick={this.openInputBodyPost}
                    >
                      기록하기
                    </button>
                  </>
                )}
              </>
            )}
          </span>
        </div>
        <div>
          <span>가슴둘레</span>
          <span>
            {isOpencChest ? (
              <BasicInputPost
                name="chest"
                what="isOpencChest"
                closeInputBodyPost={this.closeInputBodyPost}
                handleRecentBody={this.handleRecentBody}
              />
            ) : (
              <>
                {chest ? (
                  <>
                    <span>{chest}</span>
                    <button name="isChestCM" onClick={this.handleToggleClick}>
                      {isChestCM ? "CM" : "IN"}
                    </button>
                    <button
                      name="isOpencChest"
                      onClick={this.openInputBodyPost}
                    >
                      기록하기
                    </button>
                    <button name="chest" onClick={this.goCertainBody}>
                      기록보기
                    </button>
                  </>
                ) : (
                  <>
                    <span>수치를 등록해주세요</span>
                    <button
                      name="isOpencChest"
                      onClick={this.openInputBodyPost}
                    >
                      기록하기
                    </button>
                  </>
                )}
              </>
            )}
          </span>
        </div>
        <div>
          <span>허리둘레</span>
          <span>
            {isOpenWaist ? (
              <BasicInputPost
                name="waist"
                what="isOpenWaist"
                closeInputBodyPost={this.closeInputBodyPost}
                handleRecentBody={this.handleRecentBody}
              />
            ) : (
              <>
                {waist ? (
                  <>
                    <span>{waist}</span>
                    <button name="isWaistCM" onClick={this.handleToggleClick}>
                      {isWaistCM ? "CM" : "IN"}
                    </button>
                    <button name="isOpenWaist" onClick={this.openInputBodyPost}>
                      기록하기
                    </button>
                    <button name="waist" onClick={this.goCertainBody}>
                      기록보기
                    </button>
                  </>
                ) : (
                  <>
                    <span>수치를 등록해주세요</span>
                    <button name="isOpenWaist" onClick={this.openInputBodyPost}>
                      기록하기
                    </button>
                  </>
                )}
              </>
            )}
          </span>
        </div>
        <div>
          <span>엉덩이둘레</span>
          <span>
            {isOpenHip ? (
              <BasicInputPost
                name="hip"
                what="isOpenHip"
                closeInputBodyPost={this.closeInputBodyPost}
                handleRecentBody={this.handleRecentBody}
              />
            ) : (
              <>
                {hip ? (
                  <>
                    <span>{hip}</span>
                    <button name="isHipCM" onClick={this.handleToggleClick}>
                      {isHipCM ? "CM" : "IN"}
                    </button>
                    <button name="isOpenHip" onClick={this.openInputBodyPost}>
                      기록하기
                    </button>
                    <button name="hip" onClick={this.goCertainBody}>
                      기록보기
                    </button>
                  </>
                ) : (
                  <>
                    <span>수치를 등록해주세요</span>
                    <button name="isOpenHip" onClick={this.openInputBodyPost}>
                      기록하기
                    </button>
                  </>
                )}
              </>
            )}
          </span>
        </div>
        <div>
          <span>허벅지둘레</span>
          <span>
            {isOpenThigh ? (
              <BasicInputPost
                name="thigh"
                what="isOpenThigh"
                closeInputBodyPost={this.closeInputBodyPost}
                handleRecentBody={this.handleRecentBody}
              />
            ) : (
              <>
                {thigh ? (
                  <>
                    <span>{thigh}</span>
                    <button name="isThighCM" onClick={this.handleToggleClick}>
                      {isThighCM ? "CM" : "IN"}
                    </button>
                    <button name="isOpenThigh" onClick={this.openInputBodyPost}>
                      기록하기
                    </button>
                    <button name="thigh" onClick={this.goCertainBody}>
                      기록보기
                    </button>
                  </>
                ) : (
                  <>
                    <span>수치를 등록해주세요</span>
                    <button name="isOpenThigh" onClick={this.openInputBodyPost}>
                      기록하기
                    </button>
                  </>
                )}
              </>
            )}
          </span>
        </div>
      </>
    );
  }
}

export default withRouter(BasicBody);
