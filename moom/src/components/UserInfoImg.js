import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { imgbbUploader } from "imgbb-uploader";

import { BASEURL } from "../helpurl";

import axios from "axios";
axios.defaults.withCredentials = true;

// TODO: 수정할 수 있는 데이터 형식에 따른 에러 메세지 확인
class UserInfoImg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: this.props.info,
      url: "",
    };
  }

  handleImgUserEdit = (event) => {
    let uploadImage = (img) => {
      let body = new FormData();
      body.set("key", "8989f183adfcc1a2b136eaa831104b0a");
      body.append("image", img);
      return axios({
        method: "POST",
        url: "https://api.imgbb.com/1/upload",
        data: body,
        crossDomain: true,
        withCredentials: true,
      });
    };
    uploadImage(event.target.files[0]).then((res) => {
      console.log(res.data.data);
    });
  };

  handleImgUserEditt = (event) => {
    let key = "8989f183adfcc1a2b136eaa831104b0a";
    let img = event.target.files[0];
    var form = new FormData();
    form.append("image", img);
    imgbbUploader(key);
  };

  handleUserEditImg = (e) => {
    let key = e.target.name;
    const { url } = this.state;
    axios
      .put(`${BASEURL}/user/edit`, {
        profile: url,
      })
      .then((res) => {
        console.log(res.data);
        // 수정 성공하면 인풋창 사라짐
        this.props.closeInput(key);
        // 수정 성공하면 그 유저정보를 다시 가지고 오는 함수
        this.props.handleLoginSuccess();
      })
      // TODO: 다른 상태코드에 따른 분기가 필요
      .catch((err) => {
        console.log(err.message);
      });
  };

  render() {
    const { noInfo, what } = this.props;
    const { profile, url } = this.state;
    return (
      <div>
        {profile ? <img src={profile} /> : <div>{noInfo}</div>}
        <input
          type="file"
          accept="image/*"
          onChange={this.handleImgUserEdit}
        ></input>
        <button
          name={what}
          disabled={url ? false : "disabled"}
          onClick={this.handleUserEditImg}
        >
          저장
        </button>
      </div>
    );
  }
}
export default withRouter(UserInfoImg);
