import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import BasicInputPost from "./BasicInputPost";
import male from "../images/maleimg.png";
import female from "../images/femaleimg.png";

import { withStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";

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
        <div class="pt-7 pl-7 tracking-tight text-2xl font-bold ">
          <span class="text-gray-900">Recent</span>
          <span class=" pl-1 text-purple-400">Basic body</span>
        </div>
        <div class="md:flex pt-7 pl-7">
          <div class="w-48 h-auto">
            {sex ? (
              <img
                class="pt-10"
                src={isMale ? male : female}
                alt="전신 일러스트"
              ></img>
            ) : (
              // <div class="pt-4">
              //   <Alert className={classes.errSex} severity="warning">
              //     마이페이지에서 <br />
              //     성별을 선택해주세요!
              //   </Alert>
              // </div>
              <div class="pt-4">
                <Alert severity="warning">
                  마이페이지에서 <br />
                  성별을 선택해주세요!
                </Alert>
              </div>
            )}
          </div>
          <div class="pt-3 pl-14">
            <div class="shadow mb-2 bg-white rounded-md p-2 border border-dashed border-gray-300 hover:border-gray-500">
              <span class="text-base font-bold text-purple-600 hover:text-purple-400">
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
                        <div class="flex items-center justify-between">
                          <div class="flex items-center">
                            <span class="text-2xl font-medium">{body_fat}</span>
                            <span class="text-sm font-bold pl-2">%</span>
                          </div>
                          <div>
                            <button
                              class="focus:outline-none shadow-md ml-24 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded p-1 text-xs"
                              name="isOpenBodyfat"
                              onClick={this.openInputBodyPost}
                            >
                              RECORD
                            </button>
                            <button
                              class="focus:outline-none hadow-md ml-1 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded p-1 text-xs"
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
                        <div class="flex items-center justify-between">
                          <span class="ml-2 text-2xl font-normal text-gray-700">
                            --
                          </span>
                          <button
                            class="focus:outline-none shadow-md ml-36 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded p-1 text-xs"
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
            <div class="shadow mb-2 bg-white rounded-md p-2 border border-dashed border-gray-300 hover:border-gray-500">
              <span class="text-base font-bold text-purple-600 hover:text-purple-400">
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
                        <div class="flex items-center justify-between">
                          <div class="flex items-center">
                            <span class="text-2xl font-medium">{weight}</span>
                          </div>
                          <div class="absolute ml-14">
                            <button
                              class="shadow-md text-xs mt-1 focus:outline-none font-medium ml-2 rounded p-1 bg-gray-200 hover:bg-gray-300"
                              name="isWeightKG"
                              onClick={handleToggleClick}
                            >
                              {isWeightKG ? "KG" : "LN"}
                            </button>
                          </div>
                          <div>
                            <button
                              class="focus:outline-none shadow-md ml-12 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded p-1 text-xs"
                              name="isOpenWeight"
                              onClick={this.openInputBodyPost}
                            >
                              RECORD
                            </button>
                            <button
                              class="focus:outline-none shadow-md ml-1 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded p-1 text-xs"
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
                        <div class="flex items-center justify-between">
                          <span class="ml-2 text-2xl font-normal text-gray-700">
                            --
                          </span>
                          <button
                            class="focus:outline-none shadow-md ml-36 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded p-1 text-xs"
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
            <div class="shadow mb-2 bg-white rounded-md p-2 border border-dashed border-gray-300 hover:border-gray-500">
              <span class="text-base font-bold text-purple-600 hover:text-purple-400">
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
                        <div class="flex items-center justify-between">
                          <div class="flex items-center">
                            <span class="text-2xl font-medium">{shoulder}</span>
                          </div>
                          <div class="absolute ml-14">
                            <button
                              class="shadow-md text-xs mt-1 focus:outline-none font-medium ml-2 rounded p-1 bg-gray-200 hover:bg-gray-300"
                              name="isShoulderCM"
                              onClick={handleToggleClick}
                            >
                              {isShoulderCM ? "CM" : "IN"}
                            </button>
                          </div>
                          <div>
                            <button
                              class="focus:outline-none shadow-md ml-12 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded p-1 text-xs"
                              name="isOpenShoulder"
                              onClick={this.openInputBodyPost}
                            >
                              RECORD
                            </button>
                            <button
                              class="focus:outline-none shadow-md ml-1 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded p-1 text-xs"
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
                        <div class="flex items-center justify-between">
                          <span class="ml-2 text-2xl font-normal text-gray-700">
                            --
                          </span>
                          <button
                            class="focus:outline-none shadow-md ml-36 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded p-1 text-xs"
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
            <div class="shadow mb-2 bg-white rounded-md p-2 border border-dashed border-gray-300 hover:border-gray-500">
              <span class="text-base font-bold text-purple-600 hover:text-purple-400">
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
                        <div class="flex items-center justify-between">
                          <div class="flex items-center">
                            <span class="text-2xl font-medium">{chest}</span>
                          </div>
                          <div class="absolute ml-14">
                            <button
                              class="shadow-md text-xs mt-1 focus:outline-none font-medium ml-2 rounded p-1 bg-gray-200 hover:bg-gray-300"
                              name="isChestCM"
                              onClick={handleToggleClick}
                            >
                              {isChestCM ? "CM" : "IN"}
                            </button>
                          </div>
                          <div>
                            <button
                              class="focus:outline-none shadow-md ml-12 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded p-1 text-xs"
                              name="isOpencChest"
                              onClick={this.openInputBodyPost}
                            >
                              RECORD
                            </button>
                            <button
                              class="focus:outline-none shadow-md ml-1 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded p-1 text-xs"
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
                        <div class="flex items-center justify-between">
                          <span class="ml-2 text-2xl font-normal text-gray-700">
                            --
                          </span>
                          <button
                            class="focus:outline-none shadow-md ml-36 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded p-1 text-xs"
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
            <div class="shadow mb-2 bg-white rounded-md p-2 border border-dashed border-gray-300 hover:border-gray-500">
              <span class="text-base font-bold text-purple-600 hover:text-purple-400">
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
                        <div class="flex items-center justify-between">
                          <div class="flex items-center">
                            <span class="text-2xl font-medium">{waist}</span>
                          </div>
                          <div class="absolute ml-14">
                            <button
                              class="shadow-md text-xs mt-1 focus:outline-none font-medium ml-2 rounded p-1 bg-gray-200 hover:bg-gray-300"
                              name="isWaistCM"
                              onClick={handleToggleClick}
                            >
                              {isWaistCM ? "CM" : "IN"}
                            </button>
                          </div>
                          <div>
                            <button
                              class="focus:outline-none shadow-md ml-12 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded p-1 text-xs"
                              name="isOpenWaist"
                              onClick={this.openInputBodyPost}
                            >
                              RECORD
                            </button>
                            <button
                              class="focus:outline-none shadow-md ml-1 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded p-1 text-xs"
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
                        <div class="flex items-center justify-between">
                          <span class="ml-2 text-2xl font-normal text-gray-700">
                            --
                          </span>
                          <button
                            class="focus:outline-none shadow-md ml-36 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded p-1 text-xs"
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
            <div class="shadow mb-2 bg-white rounded-md p-2 border border-dashed border-gray-300 hover:border-gray-500">
              <span class="text-base font-bold text-purple-600 hover:text-purple-400">
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
                        <div class="flex items-center justify-between">
                          <div class="flex items-center">
                            <span class="text-2xl font-medium">{hip}</span>
                          </div>
                          <div class="absolute ml-14">
                            <button
                              class="shadow-md text-xs mt-1 focus:outline-none font-medium ml-2 rounded p-1 bg-gray-200 hover:bg-gray-300"
                              name="isHipCM"
                              onClick={handleToggleClick}
                            >
                              {isHipCM ? "CM" : "IN"}
                            </button>
                          </div>
                          <div>
                            <button
                              class="focus:outline-none shadow-md ml-12 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded p-1 text-xs"
                              name="isOpenHip"
                              onClick={this.openInputBodyPost}
                            >
                              RECORD
                            </button>
                            <button
                              class="focus:outline-none shadow-md ml-1 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded p-1 text-xs"
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
                        <div class="flex items-center justify-between">
                          <span class="ml-2 text-2xl font-normal text-gray-700">
                            --
                          </span>
                          <button
                            class="focus:outline-none shadow-md ml-36 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded p-1 text-xs"
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
            <div class="shadow mb-2 bg-white rounded-md p-2 border border-dashed border-gray-300 hover:border-gray-500">
              <span class="text-base font-bold text-purple-600 hover:text-purple-400">
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
                        <div class="flex items-center justify-between">
                          <div class="flex items-center">
                            <span class="text-2xl font-medium">{thigh}</span>
                          </div>
                          <div class="absolute ml-14">
                            <button
                              class="shadow-md text-xs mt-1 focus:outline-none font-medium ml-2 rounded p-1 bg-gray-200 hover:bg-gray-300"
                              name="isThighCM"
                              onClick={handleToggleClick}
                            >
                              {isThighCM ? "CM" : "IN"}
                            </button>
                          </div>
                          <div>
                            <button
                              class="focus:outline-none shadow-md ml-12 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded p-1 text-xs"
                              name="isOpenThigh"
                              onClick={this.openInputBodyPost}
                            >
                              RECORD
                            </button>
                            <button
                              class="focus:outline-none shadow-md ml-1 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded p-1 text-xs"
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
                        <div class="flex items-center justify-between">
                          <span class="shadow-md ml-2 text-2xl font-normal text-gray-700">
                            --
                          </span>
                          <button
                            class="focus:outline-none shadow-md ml-36 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded p-1 text-xs"
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
