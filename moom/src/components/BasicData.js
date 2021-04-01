import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import BasicInputPost from "./BasicInputPost";
import male from "../images/maleimg.png";
import female from "../images/femaleimg.png";

import { withStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import "../css/BasicData.css"
const styles = {
  errSex: {
    // height: "560px",
    // textAlign: "center",
    // display: "block",
    // alignItems: "center",
    // justifyContent: "center",
  },
};

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

    const { classes } = this.props;

    return (
      <>

        <div className="md:flex pl-7">
          <div className="w-48 m-auto">
            {sex ? (
              <img
                className="pt-16"
                src={isMale ? male : female}
                alt="전신 일러스트"
              ></img>
            ) : (
              // <div className="pt-4">
              //   <Alert className={classes.errSex} severity="warning">
              //     마이페이지에서 <br />
              //     성별을 선택해주세요!
              //   </Alert>
              // </div>
              <div className="pt-4">
                <Alert severity="warning">
                  마이페이지에서 <br />
                  성별을 선택해주세요!
                </Alert>
              </div>
            )}
          </div>
          <div className="pt-2 pl-14 mr-16">
            <div className="w-72 shadow mb-4 bg-white rounded-md p-3 border border-dashed border-gray-300 hover:border-gray-500">
              <span className="text-base font-bold text-purple-600 hover:text-purple-400">
                Body fat
              </span>
              <div>
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
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <span className="text-2xl font-medium">{body_fat}</span>
                          </div>
                          <div className="absolute ml-14">
                            <span className="text-sm font-bold pl-2 ml-2">%</span>
                          </div>
                          <div>
                            <button
                              className="focus:outline-none shadow-md ml-12 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded p-1 text-xs"
                              name="isOpenBodyfat"
                              onClick={this.openInputBodyPost}
                            >
                              RECORD
                            </button>
                            <button
                              className="focus:outline-none hadow-md ml-1 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded p-1 text-xs"
                              name="body_fat"
                              onClick={bodyChoiceSuccess}
                            >
                              SHOW
                            </button>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex items-center justify-between">
                          <span className="ml-2 text-2xl font-normal text-gray-700">
                            --
                          </span>
                          <button
                            className="focus:outline-none shadow-md ml-36 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded p-1 text-xs"
                            name="isOpenBodyfat"
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
            <div className="w-72 shadow mb-4 bg-white rounded-md p-3 border border-dashed border-gray-300 hover:border-gray-500">
              <span className="text-base font-bold text-purple-600 hover:text-purple-400">
                Weight
              </span>
              <div>
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
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <span className="text-2xl font-medium">{weight}</span>
                          </div>
                          <div className="absolute ml-14">
                            <button
                              className="shadow-md text-xs mt-1 focus:outline-none font-medium ml-2 rounded p-1 bg-gray-200 hover:bg-gray-300"
                              name="isWeightKG"
                              onClick={handleToggleClick}
                            >
                              {isWeightKG ? "KG" : "LN"}
                            </button>
                          </div>
                          <div>
                            <button
                              className="focus:outline-none shadow-md ml-12 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded p-1 text-xs"
                              name="isOpenWeight"
                              onClick={this.openInputBodyPost}
                            >
                              RECORD
                            </button>
                            <button
                              className="focus:outline-none shadow-md ml-1 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded p-1 text-xs"
                              name="weight"
                              onClick={bodyChoiceSuccess}
                            >
                              SHOW
                            </button>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex items-center justify-between">
                          <span className="ml-2 text-2xl font-normal text-gray-700">
                            --
                          </span>
                          <button
                            className="focus:outline-none shadow-md ml-36 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded p-1 text-xs"
                            name="isOpenWeight"
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
            <div className="w-72 shadow mb-4 bg-white rounded-md p-3 border border-dashed border-gray-300 hover:border-gray-500">
              <span className="text-base font-bold text-purple-600 hover:text-purple-400">
                Shoulder
              </span>
              <div>
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
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <span className="text-2xl font-medium">{shoulder}</span>
                          </div>
                          <div className="absolute ml-14">
                            <button
                              className="shadow-md text-xs mt-1 focus:outline-none font-medium ml-2 rounded p-1 bg-gray-200 hover:bg-gray-300"
                              name="isShoulderCM"
                              onClick={handleToggleClick}
                            >
                              {isShoulderCM ? "CM" : "IN"}
                            </button>
                          </div>
                          <div>
                            <button
                              className="focus:outline-none shadow-md ml-12 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded p-1 text-xs"
                              name="isOpenShoulder"
                              onClick={this.openInputBodyPost}
                            >
                              RECORD
                            </button>
                            <button
                              className="focus:outline-none shadow-md ml-1 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded p-1 text-xs"
                              name="shoulder"
                              onClick={bodyChoiceSuccess}
                            >
                              SHOW
                            </button>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex items-center justify-between">
                          <span className="ml-2 text-2xl font-normal text-gray-700">
                            --
                          </span>
                          <button
                            className="focus:outline-none shadow-md ml-36 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded p-1 text-xs"
                            name="isOpenShoulder"
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
            <div className="w-72 shadow mb-4 bg-white rounded-md p-3 border border-dashed border-gray-300 hover:border-gray-500">
              <span className="text-base font-bold text-purple-600 hover:text-purple-400">
                Chest
              </span>
              <div>
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
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <span className="text-2xl font-medium">{chest}</span>
                          </div>
                          <div className="absolute ml-14">
                            <button
                              className="shadow-md text-xs mt-1 focus:outline-none font-medium ml-2 rounded p-1 bg-gray-200 hover:bg-gray-300"
                              name="isChestCM"
                              onClick={handleToggleClick}
                            >
                              {isChestCM ? "CM" : "IN"}
                            </button>
                          </div>
                          <div>
                            <button
                              className="focus:outline-none shadow-md ml-12 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded p-1 text-xs"
                              name="isOpencChest"
                              onClick={this.openInputBodyPost}
                            >
                              RECORD
                            </button>
                            <button
                              className="focus:outline-none shadow-md ml-1 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded p-1 text-xs"
                              name="chest"
                              onClick={bodyChoiceSuccess}
                            >
                              SHOW
                            </button>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex items-center justify-between">
                          <span className="ml-2 text-2xl font-normal text-gray-700">
                            --
                          </span>
                          <button
                            className="focus:outline-none shadow-md ml-36 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded p-1 text-xs"
                            name="isOpencChest"
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
            <div className="w-72 shadow mb-4 bg-white rounded-md p-3 border border-dashed border-gray-300 hover:border-gray-500">
              <span className="text-base font-bold text-purple-600 hover:text-purple-400">
                Waist
              </span>
              <div>
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
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <span className="text-2xl font-medium">{waist}</span>
                          </div>
                          <div className="absolute ml-14">
                            <button
                              className="shadow-md text-xs mt-1 focus:outline-none font-medium ml-2 rounded p-1 bg-gray-200 hover:bg-gray-300"
                              name="isWaistCM"
                              onClick={handleToggleClick}
                            >
                              {isWaistCM ? "CM" : "IN"}
                            </button>
                          </div>
                          <div>
                            <button
                              className="focus:outline-none shadow-md ml-12 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded p-1 text-xs"
                              name="isOpenWaist"
                              onClick={this.openInputBodyPost}
                            >
                              RECORD
                            </button>
                            <button
                              className="focus:outline-none shadow-md ml-1 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded p-1 text-xs"
                              name="waist"
                              onClick={bodyChoiceSuccess}
                            >
                              SHOW
                            </button>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex items-center justify-between">
                          <span className="ml-2 text-2xl font-normal text-gray-700">
                            --
                          </span>
                          <button
                            className="focus:outline-none shadow-md ml-36 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded p-1 text-xs"
                            name="isOpenWaist"
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
            <div className="w-72 shadow mb-4 bg-white rounded-md p-3 border border-dashed border-gray-300 hover:border-gray-500">
              <span className="text-base font-bold text-purple-600 hover:text-purple-400">
                Hip
              </span>
              <div>
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
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <span className="text-2xl font-medium">{hip}</span>
                          </div>
                          <div className="absolute ml-14">
                            <button
                              className="shadow-md text-xs mt-1 focus:outline-none font-medium ml-2 rounded p-1 bg-gray-200 hover:bg-gray-300"
                              name="isHipCM"
                              onClick={handleToggleClick}
                            >
                              {isHipCM ? "CM" : "IN"}
                            </button>
                          </div>
                          <div>
                            <button
                              className="focus:outline-none shadow-md ml-12 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded p-1 text-xs"
                              name="isOpenHip"
                              onClick={this.openInputBodyPost}
                            >
                              RECORD
                            </button>
                            <button
                              className="focus:outline-none shadow-md ml-1 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded p-1 text-xs"
                              name="hip"
                              onClick={bodyChoiceSuccess}
                            >
                              SHOW
                            </button>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex items-center justify-between">
                          <span className="ml-2 text-2xl font-normal text-gray-700">
                            --
                          </span>
                          <button
                            className="focus:outline-none shadow-md ml-36 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded p-1 text-xs"
                            name="isOpenHip"
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
            <div className="w-72 shadow mb-4 bg-white rounded-md p-3 border border-dashed border-gray-300 hover:border-gray-500">
              <span className="text-base font-bold text-purple-600 hover:text-purple-400">
                Thigh
              </span>
              <div>
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
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <span className="text-2xl font-medium">{thigh}</span>
                          </div>
                          <div className="absolute ml-14">
                            <button
                              className="shadow-md text-xs mt-1 focus:outline-none font-medium ml-2 rounded p-1 bg-gray-200 hover:bg-gray-300"
                              name="isThighCM"
                              onClick={handleToggleClick}
                            >
                              {isThighCM ? "CM" : "IN"}
                            </button>
                          </div>
                          <div>
                            <button
                              className="focus:outline-none shadow-md ml-12 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded p-1 text-xs"
                              name="isOpenThigh"
                              onClick={this.openInputBodyPost}
                            >
                              RECORD
                            </button>
                            <button
                              className="focus:outline-none shadow-md ml-1 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded p-1 text-xs"
                              name="thigh"
                              onClick={bodyChoiceSuccess}
                            >
                              SHOW
                            </button>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex items-center justify-between">
                          <span className="shadow-md ml-2 text-2xl font-normal text-gray-700">
                            --
                          </span>
                          <button
                            className="focus:outline-none shadow-md ml-36 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded p-1 text-xs"
                            name="isOpenThigh"
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
          </div>
        </div>
      </>
    );
  }
}

export default withStyles(styles)(withRouter(BasicData));
