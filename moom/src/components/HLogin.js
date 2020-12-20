import React, { Component } from "react";
import GitHubLogin from "react-github-login";

class HLogin extends Component {
  render() {
    return (
      <div>
        <GitHubLogin
          className="githib"
          clientId="c30e06847f78a8951b9c"
          buttonText="Github"
          valid={true}
        />
      </div>
    );
  }
}

export default HLogin;
