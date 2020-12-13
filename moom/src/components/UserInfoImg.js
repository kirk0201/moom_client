import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { BASEURL } from "../helpurl";

import axios from "axios";
axios.defaults.withCredentials = true;

// TODO: 수정할 수 있는 데이터 형식에 따른 에러 메세지 확인
class UserInfoImg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: this.props.info,
      fileurl: "",
    };
  }

  handleImgUserEdit = async (event) => {
    let img = event.target.files[0];
    let formData = new FormData();
    formData.append("imgFile", img);
    // 서버에게 업로드 url 생성하는 api 호출
    const res = await axios.post(`${BASEURL}/user/img`, formData);
    console.log(res.data.location);

    this.setState({
      profile: res.data.location,
      fileurl: res.data.location,
    });
  };

  handleUserEditImg = (e) => {
    let key = e.target.name;
    const { fileurl } = this.state;
    axios
      .put(`${BASEURL}/user/edit`, {
        profile: fileurl,
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
    const { profile, fileurl } = this.state;
    return (
      <div>
        {profile ? (
          <img className="circle" src={profile} alt ="프로필사진"/>
        ) : (
          <div>{noInfo}</div>
        )}
        <input
          type="file"
          name="imgFile"
          onChange={this.handleImgUserEdit}
        ></input>
        <button
          name={what}
          disabled={fileurl ? false : "disabled"}
          onClick={this.handleUserEditImg}
        >
          저장
        </button>
      </div>
    );
  }
}
export default withRouter(UserInfoImg);
