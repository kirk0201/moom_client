import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import BasicInputPost from "./BasicInputPost";

import male from "../images/maleimg.png";
import female from "../images/femaleimg.png";

class BasicData extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    let key = e.target.name;
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

  render() {
    const {
      sex,
      handleRecentBody,
      bodyChoiceSuccess,
      handleToggleClick,
      body_fat,
      weight,
      shoulder,
      chest,
      waist,
      hip,
      thigh,
      isWeightKG,
      isShoulderCM,
      isChestCM,
      isWaistCM,
      isHipCM,
      isThighCM,
    } = this.props;

    let isMale = false;
    if (sex === "male") {
      isMale = true;
    }

    const {
      isOpenBodyfat,
      isOpenWeight,
      isOpenShoulder,
      isOpencChest,
      isOpenWaist,
      isOpenHip,
      isOpenThigh,
    } = this.state;

    return (
      <>
        <div>최근 기본 부위 정보</div>
        <div>
          {sex ? (
            <img src={isMale ? male : female} alt="전신 일러스트"></img>
          ) : (
            <span>마이페이지에서 성별을 선택해주세요</span>
          )}
        </div>
        <div>
          <span>체지방율</span>
          <span>
            {isOpenBodyfat ? (
              <BasicInputPost
                name="body_fat"
                what="isOpenBodyfat"
                closeInputBodyPost={this.closeInputBodyPost}
                handleRecentBody={handleRecentBody}
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
                    <button name="body_fat" onClick={bodyChoiceSuccess}>
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
                handleRecentBody={handleRecentBody}
              />
            ) : (
              <>
                {weight ? (
                  <>
                    <span>{weight}</span>
                    <button name="isWeightKG" onClick={handleToggleClick}>
                      {isWeightKG ? "KG" : "LN"}
                    </button>
                    <button
                      name="isOpenWeight"
                      onClick={this.openInputBodyPost}
                    >
                      기록하기
                    </button>
                    <button name="weight" onClick={bodyChoiceSuccess}>
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
                handleRecentBody={handleRecentBody}
              />
            ) : (
              <>
                {shoulder ? (
                  <>
                    <span>{shoulder}</span>
                    <button name="isShoulderCM" onClick={handleToggleClick}>
                      {isShoulderCM ? "CM" : "IN"}
                    </button>
                    <button
                      name="isOpenShoulder"
                      onClick={this.openInputBodyPost}
                    >
                      기록하기
                    </button>
                    <button name="shoulder" onClick={bodyChoiceSuccess}>
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
                handleRecentBody={handleRecentBody}
              />
            ) : (
              <>
                {chest ? (
                  <>
                    <span>{chest}</span>
                    <button name="isChestCM" onClick={handleToggleClick}>
                      {isChestCM ? "CM" : "IN"}
                    </button>
                    <button
                      name="isOpencChest"
                      onClick={this.openInputBodyPost}
                    >
                      기록하기
                    </button>
                    <button name="chest" onClick={bodyChoiceSuccess}>
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
                handleRecentBody={handleRecentBody}
              />
            ) : (
              <>
                {waist ? (
                  <>
                    <span>{waist}</span>
                    <button name="isWaistCM" onClick={handleToggleClick}>
                      {isWaistCM ? "CM" : "IN"}
                    </button>
                    <button name="isOpenWaist" onClick={this.openInputBodyPost}>
                      기록하기
                    </button>
                    <button name="waist" onClick={bodyChoiceSuccess}>
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
                handleRecentBody={handleRecentBody}
              />
            ) : (
              <>
                {hip ? (
                  <>
                    <span>{hip}</span>
                    <button name="isHipCM" onClick={handleToggleClick}>
                      {isHipCM ? "CM" : "IN"}
                    </button>
                    <button name="isOpenHip" onClick={this.openInputBodyPost}>
                      기록하기
                    </button>
                    <button name="hip" onClick={bodyChoiceSuccess}>
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
                handleRecentBody={handleRecentBody}
              />
            ) : (
              <>
                {thigh ? (
                  <>
                    <span>{thigh}</span>
                    <button name="isThighCM" onClick={handleToggleClick}>
                      {isThighCM ? "CM" : "IN"}
                    </button>
                    <button name="isOpenThigh" onClick={this.openInputBodyPost}>
                      기록하기
                    </button>
                    <button name="thigh" onClick={bodyChoiceSuccess}>
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

export default withRouter(BasicData);
