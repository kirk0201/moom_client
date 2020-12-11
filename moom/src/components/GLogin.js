import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { GoogleLogin } from "react-google-login";

import { BASEURL } from "../helpurl";

import axios from "axios";
axios.defaults.withCredentials = true;

class GLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      email: "",
      profile: "",
    };
  }

  responseGoogle = (res) => {
    this.setState({
      id: res.googleId,
      name: res.profileObj.name,
      email: res.profileObj.email,
      profile: res.profileObj.imageUrl,
    });
    const { id, name, email, profile } = this.state;
    axios
      .post(`${BASEURL}/user/googleoauth`, {
        id: id,
        name: name,
        email: email,
        profile: profile,
      })
      .then((res) => {
        // TODO : 페이지 전환 확인 redirect
        // TODO: 다른 상태코드에 따른 분기가 필요
        console.log(res.data);
        this.props.handleLoginSuccess();
        this.props.history.push("/");
      })
      .catch((err) => {
        console.log(err);
        console.log(err.message);
      });
  };

  responseFail = (err) => {
    console.error(err);
  };

  render() {
    return (
      <div>
        <GoogleLogin
          clientId={
            "580582710505-4pvoq5hh1sirblclblqe5ki810ac1dnn.apps.googleusercontent.com"
          }
          buttonText="Google"
          onSuccess={this.responseGoogle}
          onFailure={this.responseFail}
        />
      </div>
    );
  }
}

export default withRouter(GLogin);
