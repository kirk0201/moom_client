import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import BodyNav from "./BodyNav";
import CustomBodyCreate from "./CustomBodyCreate";

import { BASEURL } from "../helpurl";
import axios from "axios";
axios.defaults.withCredentials = true;

class CustomBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenCustom1: false,
      isOpenNeck: false,
      body_part1: "",
    };
  }

  componentDidMount() {
    this.handleRecentBody();
  }

  openInput = (e) => {
    let target = e.target;
    let key = target.name;
    this.setState({
      [key]: true,
    });
  };

  closeInput = (key) => {
    this.setState({
      [key]: false,
    });
  };

  //sesState로 최근 커스텀정보 저장하는 함수
  handleCustomRecentBody = () => {
    axios
      .get(`${BASEURL}/data/custom`)
      .then((res) => {
        console.log(res.data);
        this.setState({
          body_part1: res.data.body_part1,
        });
      })
      .catch((err) => {
        console.log(err);
        console.log(err.message);
      });
  };

  //setState로 최근 신체정보 저장하는 함수
  handleRecentBody = () => {
    axios
      .get(`${BASEURL}/data/recent`)
      .then((res) => {
        console.log(res.data);
        this.setState({
          neck: res.data.neck,
        });
      })
      .catch((err) => {
        console.log(err);
        console.log(err.message);
      });
  };

  render() {
    let { isOpenNeck, isOpenCustom1 } = this.state;
    const { neck, body_part1 } = this.state;
    const { handleRecentBody, handleLoginSuccess } = this.props;

    return (
      <>
        <BodyNav />
        <div>
          {isOpenCustom1 ? (
            <CustomBodyCreate
              info={body_part1}
              noInfo="부위를 입력하세요"
              type="text"
              name="body_part1"
              what="isOpenCustom1"
              closeInput={this.closeInput}
              handleRecentBody={handleRecentBody}
              handleLoginSuccess={handleLoginSuccess}
            />
          ) : (
            <>
              <span>여기다 새로 생성된 wrist 부위가 나오도록</span>
              <button name="isOpenCustom1" onClick={this.openInput}>
                생성
              </button>
            </>
          )}
        </div>
      </>
    );
  }
}
export default withRouter(CustomBody);
