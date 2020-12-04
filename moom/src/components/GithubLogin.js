import React, { Component } from "react";
import { createButton, createSvgIcon } from "react-social-login-buttons";
import svgIcon from "../images/github.svg";

const config = {
  text: "Github",
  icon: createSvgIcon(svgIcon),
  style: {
    height: "45px",
    width: "107px",
    background: "#ffffff",
    color: "rgba(0, 0, 0, 0.54)",
    "font-family": "Roboto",
    "font-size": "14px",
    "font-weight": "500",
    "align-items": "center",
  },
  //   mouse hovers 할때 스타일
  //   activeStyle: { background: "#293e69" },
};

const MyGithubLoginButton = createButton(config);

export default MyGithubLoginButton;
