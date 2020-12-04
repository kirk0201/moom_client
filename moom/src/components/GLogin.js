import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import { GoogleLogin } from "react-google-login";

class GLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      provider: "",
    };
  }

  responseGoogle = (res) => {
    console.log(res);
    this.setState({
      id: res.googleId,
      name: res.profileObj.name,
      provider: "google",
    });
    console.log(this.state.id);
    console.log(this.state.name);
  };

  responseFail = (err) => {
    console.error(err);
  };

  render() {
    return (
      <div>
        <GoogleLogin
          clientId={"580582710505-4pvoq5hh1sirblclblqe5ki810ac1dnn.apps.googleusercontent.com"}
          buttonText="Google"
          onSuccess={this.responseGoogle}
          onFailure={this.responseFail}
        />
      </div>
    );
  }
}

export default withRouter(GLogin);
