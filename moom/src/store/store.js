import React, { createContext } from "react";
import { BASEURL } from "../helpurl.js";
import axios from "axios";

export const User = React.createContext({
  isLogin: false,
  userInfo: null,
});

const handleLoginSuccess = (props) => {
  axios
    .get(`${BASEURL}/user/edit`)
    .then((res) => {
      this.setState({ isLogin: true, userInfo: res.data });
    })
    .catch((err) => {
      console.log(err);
      console.log(err.message);
      if (err.message === "Request failed with status code 404") {
        this.setState({ isLogin: false, userInfo: null });
      }
    });

  return (
    <User.Provider value={handleLoginSuccess}>{props.children}</User.Provider>
  );
};

export default handleLoginSuccess;
