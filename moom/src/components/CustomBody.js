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
      isOpenCustom: false,
      body_part: "",
    };
  }

  componentDidMount() {
    this.handleCustomRecentBody();
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

  handleCustomRecentBody = () => {
    axios
      .get(`${BASEURL}/data/custom`)
      .then((res) => {
        console.log("res.data==> ", res.data);
        this.setState({
          body_part: res.data[res.data.length - 1].part_name,
        });
      })
      .catch((err) => {
        console.log(err);
        console.log(err.message);
      });
  };

  render() {
    let { isOpenCustom } = this.state;
    const { body_part } = this.state.body_part;
    return (
      <>
        <BodyNav />
        <div>
          {isOpenCustom ? (
            <CustomBodyCreate
              info={body_part}
              noInfo="특별 관리 부위 작성란"
              type="text"
              name="body_part"
              what="isOpenCustom"
              closeInput={this.closeInput}
              handleCustomRecentBody={this.handleCustomRecentBody}
            />
          ) : (
            <>
              <span>{body_part ? body_part : "특별 관리 부위 작성란"}</span>
              <button name="isOpenCustom" onClick={this.openInput}>
                수정
              </button>
            </>
          )}
        </div>
      </>
    );
  }
}
export default withRouter(CustomBody);
