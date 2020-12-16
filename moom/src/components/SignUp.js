import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import { BASEURL } from "../helpurl";
import logoimg from "../images/logo700700.png";

import axios from "axios";
axios.defaults.withCredentials = true;

const styles = {
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
    margin: "10px",
  },
};

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO: 이메일 중복 버튼, 서버 요청, 에러 메세지 확인
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      password: "",
      sex: "",
      errorMessage: "",
      errorEmail: "",
    };
    this.handleInputSignup = this.handleInputSignup.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
  }

  // input 이벤트시 서버에게 보낼 정보 저장하는 함수
  handleInputSignup = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  };

  // 회원가입 버튼 클릭시 axios요청 함수
  handleSignup = () => {
    const { email, name, password, sex } = this.state;
    if (!email) {
      return this.setState({ errorMessage: "Email을 입력해주세요" });
    } else if (!name) {
      return this.setState({ errorMessage: "닉네임을 입력해주세요" });
    } else if (!password) {
      return this.setState({ errorMessage: "Password를 입력해주세요" });
    } else if (!sex) {
      return this.setState({ errorMessage: "성별을 선택해주세요" });
    } else {
      this.setState({ errorMessage: "" });
    }
    axios
      .post(`${BASEURL}/user/signup`, {
        email: email,
        name: name,
        password: password,
        sex: sex,
      })
      .then((res) => {
        console.log(res);
        // TODO : 페이지 전환 확인 redirect
        // TODO: 다른 상태코드에 따른 분기가 필요
        this.props.history.push("/login");
      })
      .catch((err) => {
        console.log(err);
        console.log(err.message);
        if (err.message === "Request failed with status code 409") {
          this.setState({
            errorEmail: "이미 존재하는 이메일입니다.",
          });
        }
      });
  };

  render() {
    const { classes } = this.props;
    return (
      <>
        <center style={{ paddingTop: "125px" }}>
          <img
            src={logoimg}
            style={{
              width: "300px",
              height: "auto",
              marginTop: "5px",
            }}
          />
          <form onSubmit={(e) => e.preventDefault()}>
            <div>
              <TextField
                variant="outlined"
                margin="normal"
                required
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                type="email"
                onChange={this.handleInputSignup}
              ></TextField>
            </div>
            {/* TODO : 에러메세지 재확인 */}
            <div>{this.state.errorEmail}</div>
            <div>
              <TextField
                variant="outlined"
                margin="normal"
                required
                id="email"
                label="Your NickName"
                autoFocus
                name="name"
                type="text"
                onChange={this.handleInputSignup}
              ></TextField>
            </div>
            <div>
              <TextField
                variant="outlined"
                margin="normal"
                required
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={this.handleInputSignup}
              ></TextField>
            </div>
            <select
              name="sex"
              value={this.state.sex}
              onChange={this.handleInputSignup}
            >
              <option value="">성별</option>
              <option value="female">여성</option>
              <option value="male">남성</option>
            </select>
            <div>
              <Button className={classes.root} onClick={this.handleSignup}>
                SignUp
              </Button>
            </div>
            {/* TODO : 에러메세지 재확인 */}
            <div>{this.state.errorMessage}</div>
          </form>
          <Box mt={8}>
            <Copyright />
          </Box>
        </center>
      </>
    );
  }
}

export default withStyles(styles)(withRouter(SignUp));
