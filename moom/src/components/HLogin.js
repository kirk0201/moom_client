import React, { Component } from "react";
import GitHubLogin from "react-github-login";

class HLogin extends Component {
  render() {
    const onSuccessGithub = (response) => {
      console.log(response.code);
    };

    const onFailureGithub = (response) => {
      console.log(response.code);
    };

    return (
      <div>
        <GitHubLogin
          className="githib"
          clientId="c30e06847f78a8951b9c"
          onSuccess={onSuccessGithub}
          onFailure={onFailureGithub}
          buttonText="Github"
          valid={true}
        />
      </div>
    );
  }
}

export default HLogin;
