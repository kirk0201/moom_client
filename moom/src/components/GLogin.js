import React, { Component } from "react";
import { GoogleLogin } from "react-google-login";
import { Container } from "reactstrap";

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
    this.setState({
      id: res.googleId,
      name: res.profileObj.name,
      provider: "google",
    });
  };

  responseFail = (err) => {
    console.error(err);
  };

  render() {
    return (
      <div>
          <GoogleLogin
            clientId={"AIzaSyCMBQ-yYjSX19a9XwiW7QEzkwurFnNdgag"}
            buttonText="Google"
            onSuccess={this.responseGoogle}
            onFailure={this.responseFail}
          />
      </div>
    );
  }
}

export default GLogin;
