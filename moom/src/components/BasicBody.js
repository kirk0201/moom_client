import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import BodyNav from "./BodyNav";
import male from "../images/maleimg.png";
import female from "../images/femaleimg.png";

import { BASEURL } from "../helpurl";
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
    };
  }

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
          hip: res.data.waist,
          thigh: res.data.thigh,
        });
      })
      .catch((err) => {
        console.log(err);
        console.log(err.message);
      });
  };

  render() {
    const { sex } = this.props.userInfo;
    const { body_fat, weight, shoulder, chest, waist, hip, thigh } = this.state;

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
          <span>성별을 선택해주세요</span>
        )}
        <div>
          <span>체지방율</span>
          <span>
            {body_fat ? (
              <>
                <span>{body_fat}</span>
                <button>수정</button>
              </>
            ) : (
              <>
                <span>수치를 등록해주세요</span>
                <button>수정</button>
              </>
            )}
          </span>
        </div>
        <div>
          <span>체중</span>
          <span>{weight}</span>
        </div>
        <div>
          <span>어깨길이</span>
          <span>{shoulder}</span>
        </div>
        <div>
          <span>가슴둘레</span>
          <span>{chest}</span>
        </div>
        <div>
          <span>허리둘레</span>
          <span>{waist}</span>
        </div>
        <div>
          <span>엉덩이둘레</span>
          <span>{hip}</span>
        </div>
        <div>
          <span>허벅지둘레</span>
          <span>{thigh}</span>
        </div>
      </>
    );
  }
}

export default withRouter(BasicBody);
