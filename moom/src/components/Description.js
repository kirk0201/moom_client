import { Hidden } from "@material-ui/core";
import React, { Component } from "react";
import "tailwindcss/tailwind.css";
import "../css/Description.css";
import feat1 from "../images/feat1.svg";
import feat2 from "../images/feat2.svg";
import feat3 from "../images/feat3.svg";
import feat4 from "../images/feat4.svg";
import feat5 from "../images/feat5.svg";
import reviewer1 from "../images/reviewer1.svg";
import reviewer2 from "../images/reviewer2.svg";
import reviewer3 from "../images/reviewer3.svg";
import star from "../images/star.svg";

export class Description extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div className="border-gray-100 border-solid border-2 shadow-xl"
          style={{
            width: "90%",
            paddingTop: "20px",
            maxHeight: "2000px",
            borderRadius: "10px",
            overflow: "Hidden",
            marginTop: "25px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <div
            className="feat"
            style={{
              width: "100%",
              padding: "0px",
              margin: "0px",              
            }}
          >
            <div
              style={{
                height: "100px",
                margin: "auto",
                borderBottom: "5px solid black",
                display: "flex",
                justifyContent: "space-around",
                fontSize: "60px",
                fontWeight: "bold",
                margin:"0 50px"
              }}
            >
              Feat
            </div>
            <div className="content_wrap"
              style={{
                // width: "100%",
                // height: "300px",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-around",
              }}
            >
              <div
                className="feat feat1 border-gray-100 border-2 border-solid shadow-xl hover:bg-purple-100"
                style={{
                  // width: "30%",
                  // height: "250px",
                  // marginTop: "auto",
                  // marginBottom: "auto",
                  // marginLeft: "12%",
                  // borderRadius: "30px",
                  
                }}
              >
                <img
                  style={{
                    width: "30%",
                    marginTop: "8%",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                  src={feat1}
                  alt="기능설명1"
                ></img>
                <div className="feat_title"
                  style={{
                    // fontSize: "20px",
                    fontWeight: "bold",
                    textAlign: "center",
                    marginTop: "2%",
                  }}
                >
                  신체 데이터 관리
                </div>
                <div className="feat_content"
                  style={{
                    width: "80%",
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginTop: "2%",
                    // fontSize: "18px",
                    textAlign: "center",
                  }}
                >
                  일일 수치를 기반으로 신체 변화
                  <br />
                  정보를 제공해드립니다.
                </div>
              </div>
              <div
                className="feat feat2 border-gray-100 border-2 border-solid shadow-xl hover:bg-purple-100"
                style={{
                  // width: "30%",
                //   height: "250px",
                //   marginTop: "auto",
                //   marginBottom: "auto",
                //   borderRadius: "30px",
                }}
              >
                <img
                  style={{
                    width: "30%",
                    marginTop: "8%",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                  src={feat2}
                  alt="기능설명2"
                ></img>
                <div className="feat_title"
                  style={{
                    // fontSize: "20px",
                    fontWeight: "bold",
                    textAlign: "center",
                    marginTop: "2%",
                  }}
                >
                  신체 데이터 관리
                </div>
                <div className="feat_content"
                  style={{
                    width: "80%",
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginTop: "2%",
                    // fontSize: "18px",
                    textAlign: "center",
                  }}
                >
                  신체 변화량을 한눈에 수 있어
                  <br />
                  전문적인 관리가 가능합니다.
                </div>
              </div>
              <div
                className="feat feat3 border-gray-100 border-2 border-solid shadow-xl hover:bg-purple-100"
                style={{
                  // width: "30%",
                //   height: "250px",
                //   marginTop: "auto",
                //   marginBottom: "auto",
                //   marginRight: "12%",
                //   borderRadius: "30px",
                }}
              >
                <img
                  style={{
                    width: "30%",
                    marginTop: "8%",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                  src={feat3}
                  alt="기능설명3"
                ></img>
                <div className="feat_title"
                  style={{
                    // fontSize: "20px",
                    fontWeight: "bold",
                    textAlign: "center",
                    marginTop: "2%",
                  }}
                >
                  신체 데이터 관리
                </div>
                <div className="feat_content"
                  style={{
                    width: "80%",
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginTop: "2%",
                    // fontSize: "18px",
                    textAlign: "center",
                  }}
                >
                  다짐을 상기시켜주어 꾸준한 운동의
                  <br />
                  원동력을 제공합니다.
                </div>
              </div>
            
            {/* <div
              style={{
                width: "100%",
                height: "300px",
                display: "flex",
                justifyContent: "space-around",
              }}
            > */}
              <div
                className="feat feat4 border-gray-100 border-2 border-solid shadow-xl hover:bg-purple-100"
                style={{
                  // width: "20%",
                  // height: "250px",
                  // marginTop: "auto",
                  // marginBottom: "auto",
                  // marginLeft: "25%",
                  // borderRadius: "30px",
                }}
              >
                <img
                  style={{
                    width: "30%",
                    marginTop: "8%",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                  alt="기능설명4"
                  src={feat4}
                ></img>
                <div className="feat_title"
                  style={{
                    // fontSize: "20px",
                    fontWeight: "bold",
                    textAlign: "center",
                    marginTop: "2%",
                  }}
                >
                  신체 데이터 관리
                </div>
                <div className="feat_content"
                  style={{
                    width: "80%",
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginTop: "2%",
                    // fontSize: "18px",
                    textAlign: "center",
                  }}
                >
                  모든 부위에 원하는 목표를 설정하고
                  <br />
                  관리가 가능합니다.
                </div>
              </div>
              <div
                className="feat feat5 border-gray-100 border-2 border-solid shadow-xl hover:bg-purple-100"
                // style={{
                //   width: "20%",
                //   height: "250px",
                //   marginTop: "auto",
                //   marginBottom: "auto",
                //   marginRight: "25%",
                //   borderRadius: "30px",
                  
                // }}
              >
                <img
                  style={{
                    width: "30%",
                    marginTop: "8%",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                  alt="기능설명5"
                  src={feat5}
                ></img>
                <div className="feat_title"
                  style={{
                    // fontSize: "20px",
                    fontWeight: "bold",
                    textAlign: "center",
                    marginTop: "2%",
                  }}
                >
                  신체 데이터 관리
                </div>
                <div className="feat_content"
                  style={{
                    width: "80%",
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginTop: "2%",
                    // fontSize: "18px",
                    textAlign: "center",
                  }}
                >
                  여러분이 원하는 어떤 부위도
                  <br />
                  지정, 관리 가능합니다.
                </div>
              </div>
            {/* </div> */}
            </div>
          </div>

          <div
            className="review"
            style={{
              // width: "100%",
              height: "180px",
              padding: "0px",
              margin: "0px",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <div
              className="review1"
              style={{
                // width: "30%",
                height: "130px",
                padding: "0px",
                marginTop: "auto",
                marginBottom: "auto",
                border: "5px solid black",
                borderRadius: "10px",
                overflow: "Hidden",
                backgroundColor: "rgb(255,255,255)",
                display: "flex",
              }}
            >
              <div
                style={{
                  width: "25%",
                  height: "100%",
                  padding: "0px",
                  borderRight: "5px solid black",
                  backgroundColor: "white",
                }}
              >
                <img
                  style={{
                    height: "40%",
                    margin: "auto",
                    marginTop: "25%",
                  }}
                  src={reviewer1}
                  alt="평점1"
                ></img>
                <div
                  style={{
                    fontSize: "1em",
                    fontWeight: "bold",
                    textAlign: "center",
                    marginTop: "7%",
                  }}
                >
                  손찬호
                </div>
              </div>
              <div
                style={{
                  width: "75%",
                  height: "190px",
                  padding: "0px",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "42%",
                    paddingTop: "4%",
                    backgroundColor: "white",
                    fontSize: "1em",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  " 뭄과 함께한지 1년 꿈꾸던 신체를 가지게 되었습니다 "
                </div>
                <div className="star"
                  style={{
                    width: "100%",
                    // height: "55%",
                    display: "flex",
                    justifyContent: "space-around",
                  }}
                >
                  <img
                    style={{ width: "10%", height: "60%", marginLeft: "10%" }}
                    src={star}
                    alt="별1"
                  ></img>
                  <img
                    style={{ width: "10%", height: "60%" }}
                    src={star}
                    alt="별2"
                  ></img>
                  <img
                    style={{ width: "10%", height: "60%" }}
                    src={star}
                    alt="별3"
                  ></img>
                  <img
                    style={{ width: "10%", height: "60%" }}
                    src={star}
                    alt="별4"
                  ></img>
                  <img
                    alt="별5"
                    style={{ width: "10%", height: "60%", marginRight: "10%" }}
                    src={star}
                  ></img>
                </div>
              </div>
            </div>
            <div
              className="review2"
              style={{
                // width: "25%",
                height: "130px",
                padding: "0px",
                marginTop: "auto",
                marginBottom: "auto",
                border: "5px solid black",
                borderRadius: "10px",
                overflow: "Hidden",
                backgroundColor: "rgb(255,255,255)",
                display: "flex",
              }}
            >
              <div
                style={{
                  width: "25%",
                  height: "100%",
                  padding: "0px",
                  borderRight: "5px solid black",
                  backgroundColor: "white",
                }}
              >
                <img
                  style={{
                    height: "40%",
                    margin: "auto",
                    marginTop: "25%",
                  }}
                  src={reviewer2}
                  alt="평점2"
                ></img>
                <div
                  style={{
                    fontSize: "1em",
                    fontWeight: "bold",
                    textAlign: "center",
                    marginTop: "7%",
                  }}
                >
                  김인욱
                </div>
              </div>
              <div
                style={{
                  width: "75%",
                  height: "190px",
                  padding: "0px",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "42%",
                    paddingTop: "4%",
                    backgroundColor: "white",
                    fontSize: "1em",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  "건강해짐과 동시에 <br /> 생활에 활력이 생겼어요 "
                </div>
                <div className="star"
                  style={{
                    width: "100%",
                    // height: "55%",
                    display: "flex",
                    justifyContent: "space-around",
                  }}
                >
                  <img
                    style={{ width: "10%", height: "60%", marginLeft: "10%" }}
                    src={star}
                    alt="별1"
                  ></img>
                  <img
                    style={{ width: "10%", height: "60%" }}
                    alt="별2"
                    src={star}
                  ></img>
                  <img
                    style={{ width: "10%", height: "60%" }}
                    alt="별3"
                    src={star}
                  ></img>
                  <img
                    style={{ width: "10%", height: "60%" }}
                    alt="별4"
                    src={star}
                  ></img>
                  <img
                    style={{ width: "10%", height: "60%", marginRight: "10%" }}
                    src={star}
                    alt="별5"
                  ></img>
                </div>
              </div>
            </div>
            <div
              className="review3"
              style={{
                // width: "25%",
                height: "130px",
                padding: "0px",
                marginTop: "auto",
                marginBottom: "auto",
                border: "5px solid black",
                borderRadius: "10px",
                overflow: "Hidden",
                backgroundColor: "rgb(255,255,255)",
                display: "flex",
              }}
            >
              <div
                style={{
                  width: "25%",
                  height: "100%",
                  padding: "0px",
                  borderRight: "5px solid black",
                  backgroundColor: "white",
                }}
              >
                <img
                  style={{
                    height: "40%",
                    margin: "auto",
                    marginTop: "25%",
                  }}
                  alt="평점3"
                  src={reviewer3}
                ></img>
                <div
                  style={{
                    fontSize: "1em",
                    fontWeight: "bold",
                    textAlign: "center",
                    marginTop: "7%",
                  }}
                >
                  이석재
                </div>
              </div>
              <div
                style={{
                  width: "75%",
                  height: "190px",
                  padding: "0px",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "42%",
                    paddingTop: "4%",
                    backgroundColor: "white",
                    fontSize: "1em",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  " 체계적인 건강관리에는
                  <br />
                  뭄이 최고 "
                </div>
                <div className="star"
                  style={{
                    width: "100%",
                    // height: "55%",
                    display: "flex",
                    justifyContent: "space-around",
                  }}
                >
                  <img
                    style={{ width: "10%", height: "60%", marginLeft: "10%" }}
                    src={star}
                    alt="별1"
                  ></img>
                  <img
                    style={{ width: "10%", height: "60%" }}
                    alt="별2"
                    src={star}
                  ></img>
                  <img
                    style={{ width: "10%", height: "60%" }}
                    alt="별3"
                    src={star}
                  ></img>
                  <img
                    style={{ width: "10%", height: "60%" }}
                    alt="별4"
                    src={star}
                  ></img>
                  <img
                    style={{ width: "10%", height: "60%", marginRight: "10%" }}
                    src={star}
                    alt="별5"
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Description;
