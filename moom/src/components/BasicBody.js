import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import BodyNav from "./BodyNav";
import BasicInputPost from "./BasicInputPost";
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
      isOpenBodyfat: false,
      isOpenWeight: false,
      isOpenShoulder: false,
      isOpencChest: false,
      isOpenWaist: false,
      isOpenHip: false,
      isOpenThigh: false,
    };
  }

  // 기록하기 버튼 클릭시 BasicInputPost를 랜더하는 함수
  openInputBodyPost = (e) => {
    let target = e.target;
    let key = target.name;
    this.setState({
      [key]: true,
    });
  };

  // 저장 버튼 클릭시 BasicInputPost를 닫는 함수
  closeInputBodyPost = (key) => {
    this.setState({
      [key]: false,
    });
  };

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
          <span>성별을 선택해주세요</span>
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
                    <button
                      name="isOpenBodyfat"
                      onClick={this.openInputBodyPost}
                    >
                      기록하기
                    </button>
                    <button>기록보기</button>
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
                    <button>기록보기</button>
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
                    <button
                      name="isOpenWeight"
                      onClick={this.openInputBodyPost}
                    >
                      기록하기
                    </button>
                    <button>기록보기</button>
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
                    <button>기록보기</button>
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
                      name="isOpenShoulder"
                      onClick={this.openInputBodyPost}
                    >
                      기록하기
                    </button>
                    <button>기록보기</button>
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
                    <button>기록보기</button>
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
                    <button
                      name="isOpencChest"
                      onClick={this.openInputBodyPost}
                    >
                      기록하기
                    </button>
                    <button>기록보기</button>
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
                    <button>기록보기</button>
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
                    <button name="isOpenWaist" onClick={this.openInputBodyPost}>
                      기록하기
                    </button>
                    <button>기록보기</button>
                  </>
                ) : (
                  <>
                    <span>수치를 등록해주세요</span>
                    <button name="isOpenWaist" onClick={this.openInputBodyPost}>
                      기록하기
                    </button>
                    <button>기록보기</button>
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
                    <button name="isOpenHip" onClick={this.openInputBodyPost}>
                      기록하기
                    </button>
                    <button>기록보기</button>
                  </>
                ) : (
                  <>
                    <span>수치를 등록해주세요</span>
                    <button name="isOpenHip" onClick={this.openInputBodyPost}>
                      기록하기
                    </button>
                    <button>기록보기</button>
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
                    <button name="isOpenThigh" onClick={this.openInputBodyPost}>
                      기록하기
                    </button>
                    <button>기록보기</button>
                  </>
                ) : (
                  <>
                    <span>수치를 등록해주세요</span>
                    <button name="isOpenThigh" onClick={this.openInputBodyPost}>
                      기록하기
                    </button>
                    <button>기록보기</button>
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
