import React, { Component } from "react";
import GitHubLogin from "react-github-login";

class HLogin extends Component {
  render() {
    // const onSuccessGithub = (response) => {
    //   console.log(response.code);
    // };

    // const onFailureGithub = (response) => {
    //   console.log(response.code);
    // };

    // const button = document.querySelector(".githib");
    // const div = document.createElement("div");
    // div.className = "github-div";
    // const img = document.createElement("img");
    // img.className = "github-img";
    // img.src = profile_img;
    // const span = document.createElement("span");
    // span.className = "github-span";
    // span.textContent = "Github";

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
