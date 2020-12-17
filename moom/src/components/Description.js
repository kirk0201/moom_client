import { Hidden } from "@material-ui/core";
import React, { Component } from "react";
import "tailwindcss/tailwind.css";
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
        <div
          style={{
            width: "100%",
            padding: "0px",
            borderRadius: "10px",
            overflow: "Hidden",
            margin: "0px 0px 25px 0px",
            backgroundColor: "rgb(240,240,255)",
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
                width: "100%",
                height: "100px",
                borderBottom: "5px solid black",
                display: "flex",
                justifyContent: "space-around",
                fontSize: "60px",
                fontWeight: "bold",
                paddingRight: "80%",
              }}
            >
              feat
            </div>
            <div
              style={{
                width: "100%",
                height: "300px",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <div
                className="feat1"
                style={{
                  width: "20%",
                  height: "250px",
                  marginTop: "auto",
                  marginBottom: "auto",
                  marginLeft: "12%",
                  borderRadius: "30px",
                  backgroundColor: "rgb(255,255,255)",
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
                ></img>
                <div
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    textAlign: "center",
                    marginTop: "2%",
                  }}
                >
                  신체 데이터 관리
                </div>
                <div
                  style={{
                    width: "80%",
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginTop: "2%",
                    fontSize: "18px",
                    textAlign: "center",
                  }}
                >
                  일일 수치를 기반으로 신체 변화
                  <br />
                  정보를 제공해드립니다.
                </div>
              </div>
              <div
                className="feat2"
                style={{
                  width: "20%",
                  height: "250px",
                  marginTop: "auto",
                  marginBottom: "auto",
                  borderRadius: "30px",
                  backgroundColor: "rgb(255,255,255)",
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
                ></img>
                <div
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    textAlign: "center",
                    marginTop: "2%",
                  }}
                >
                  신체 데이터 관리
                </div>
                <div
                  style={{
                    width: "80%",
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginTop: "2%",
                    fontSize: "18px",
                    textAlign: "center",
                  }}
                >
                  신체 변화량을 한눈에 수 있어
                  <br />
                  전문적인 관리가 가능합니다.
                </div>
              </div>
              <div
                className="feat3"
                style={{
                  width: "20%",
                  height: "250px",
                  marginTop: "auto",
                  marginBottom: "auto",
                  marginRight: "12%",
                  borderRadius: "30px",
                  backgroundColor: "rgb(255,255,255)",
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
                ></img>
                <div
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    textAlign: "center",
                    marginTop: "2%",
                  }}
                >
                  신체 데이터 관리
                </div>
                <div
                  style={{
                    width: "80%",
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginTop: "2%",
                    fontSize: "18px",
                    textAlign: "center",
                  }}
                >
                  다짐을 상기시켜주어 꾸준한 운동의
                  <br />
                  원동력을 제공합니다.
                </div>
              </div>
            </div>
            <div
              style={{
                width: "100%",
                height: "300px",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <div
                className="feat4"
                style={{
                  width: "20%",
                  height: "250px",
                  marginTop: "auto",
                  marginBottom: "auto",
                  marginLeft: "25%",
                  borderRadius: "30px",
                  backgroundColor: "rgb(255,255,255)",
                }}
              >
                <img
                  style={{
                    width: "30%",
                    marginTop: "8%",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                  src={feat4}
                ></img>
                <div
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    textAlign: "center",
                    marginTop: "2%",
                  }}
                >
                  신체 데이터 관리
                </div>
                <div
                  style={{
                    width: "80%",
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginTop: "2%",
                    fontSize: "18px",
                    textAlign: "center",
                  }}
                >
                  모든 부위에 원하는 목표를 설정하고
                  <br />
                  관리가 가능합니다.
                </div>
              </div>
              <div
                className="feat5"
                style={{
                  width: "20%",
                  height: "250px",
                  marginTop: "auto",
                  marginBottom: "auto",
                  marginRight: "25%",
                  borderRadius: "30px",
                  backgroundColor: "rgb(255,255,255)",
                }}
              >
                <img
                  style={{
                    width: "30%",
                    marginTop: "8%",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                  src={feat5}
                ></img>
                <div
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    textAlign: "center",
                    marginTop: "2%",
                  }}
                >
                  신체 데이터 관리
                </div>
                <div
                  style={{
                    width: "80%",
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginTop: "2%",
                    fontSize: "18px",
                    textAlign: "center",
                  }}
                >
                  여러분이 원하는 어떤 부위도
                  <br />
                  지정, 관리 가능합니다.
                </div>
              </div>
            </div>
          </div>

          <div
            className="review"
            style={{
              width: "100%",
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
                width: "25%",
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
                ></img>
                <div
                  style={{
                    fontSize: "25px",
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
                  height: "180px",
                  padding: "0px",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "42%",
                    paddingTop: "4%",
                    backgroundColor: "white",
                    fontSize: "20px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  " 뭄과 함께한지 1년 꿈꾸던 신체를 가지게 되었습니다 "
                </div>
                <div
                  style={{
                    width: "100%",
                    height: "40%",
                    display: "flex",
                    justifyContent: "space-around",
                  }}
                >
                  <img
                    style={{ width: "10%", height: "60%", marginLeft: "10%" }}
                    src={star}
                  ></img>
                  <img style={{ width: "10%", height: "60%" }} src={star}></img>
                  <img style={{ width: "10%", height: "60%" }} src={star}></img>
                  <img style={{ width: "10%", height: "60%" }} src={star}></img>
                  <img
                    style={{ width: "10%", height: "60%", marginRight: "10%" }}
                    src={star}
                  ></img>
                </div>
              </div>
            </div>
            <div
              className="review1"
              style={{
                width: "25%",
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
                ></img>
                <div
                  style={{
                    fontSize: "25px",
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
                  height: "180px",
                  padding: "0px",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "42%",
                    paddingTop: "4%",
                    backgroundColor: "white",
                    fontSize: "20px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  "건강해짐과 동시에 <br /> 생활에 활력이 생겼어요 "
                </div>
                <div
                  style={{
                    width: "100%",
                    height: "40%",
                    display: "flex",
                    justifyContent: "space-around",
                  }}
                >
                  <img
                    style={{ width: "10%", height: "60%", marginLeft: "10%" }}
                    src={star}
                  ></img>
                  <img style={{ width: "10%", height: "60%" }} src={star}></img>
                  <img style={{ width: "10%", height: "60%" }} src={star}></img>
                  <img style={{ width: "10%", height: "60%" }} src={star}></img>
                  <img
                    style={{ width: "10%", height: "60%", marginRight: "10%" }}
                    src={star}
                  ></img>
                </div>
              </div>
            </div>
            <div
              className="review1"
              style={{
                width: "25%",
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
                  src={reviewer3}
                ></img>
                <div
                  style={{
                    fontSize: "25px",
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
                  height: "180px",
                  padding: "0px",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "42%",
                    paddingTop: "4%",
                    backgroundColor: "white",
                    fontSize: "20px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  " 체계적인 건강관리에는
                  <br />
                  뭄이 최고 "
                </div>
                <div
                  style={{
                    width: "100%",
                    height: "40%",
                    display: "flex",
                    justifyContent: "space-around",
                  }}
                >
                  <img
                    style={{ width: "10%", height: "60%", marginLeft: "10%" }}
                    src={star}
                  ></img>
                  <img style={{ width: "10%", height: "60%" }} src={star}></img>
                  <img style={{ width: "10%", height: "60%" }} src={star}></img>
                  <img style={{ width: "10%", height: "60%" }} src={star}></img>
                  <img
                    style={{ width: "10%", height: "60%", marginRight: "10%" }}
                    src={star}
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
