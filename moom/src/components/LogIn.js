import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Alert from "@material-ui/lab/Alert";

import { BASEURL } from "../helpurl";
import GLogin from "./GLogin";
import githublogo from "../images/github.svg";
import logoimg from "../images/logo700700.png";
import "../css/Login.css";

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
    marginTop: "13px",
    width: "230px",
    "&:focus": {
      outline: 0,
    },
  },
  errmsg: {
    marginTop: "20px",
    width: "290px",
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

// TODO : react-github-login을 이용한 버튼 컴포넌트 HLogin 수정
// import HLogin from "./HLogin";
class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errorMessage: "",
    };
    this.handleInputLogin = this.handleInputLogin.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  // input 이벤트시 서버에게 보낼 정보 저장하는 함수
  handleInputLogin = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  };

  // 로그인 버튼 클릭시 axios요청 함수
  handleLogin = () => {
    const { email, password } = this.state;
    let regexp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if (!email && !password) {
      return this.setState({
        errorMessage: "Email과  Password를 입력해주세요",
      });
    } else if (!email) {
      return this.setState({ errorMessage: "Email을 입력해주세요" });
    } else if (!regexp.test(email)) {
      return this.setState({ errorMessage: "올바른 Email 형식이 아닙니다" });
    } else if (!password) {
      return this.setState({ errorMessage: "Password를 입력해주세요" });
    } else {
      this.setState({ errorMessage: "" });
    }
    axios
      .post(
        `${BASEURL}/user/login`,
        {
          email: email,
          password: password,
        },
        { withCredentials: true }
      )
      .then((res) => {
        localStorage.removeItem("basicPartName");
        localStorage.removeItem("customPartName");
        this.props.handleLoginSuccess();
        this.props.history.push("/");
        // TODO : 페이지 전환 확인 redirect
        // TODO: 다른 상태코드에 따른 분기가 필요
      })
      .catch((err) => {
        console.log(err);
        console.log(err.message);
        if (err.message === "Request failed with status code 404") {
          this.setState({
            errorMessage: "회원 정보를 찾을 수 없습니다.",
          });
        }
      });
  };

  render() {
    const { classes } = this.props;
    return (
      <>
        <center style={{ paddingTop: "170px" }}>
          <img
          alt="이미지 어디감?"
            src={logoimg}
            style={{
              width: "250px",
              height: "auto",
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
                // autoComplete="email"
                // autoFocus
                onChange={this.handleInputLogin}
              />
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
                onChange={this.handleInputLogin}
              />
            </div>
            <div>
              <Button className={classes.root} onClick={this.handleLogin}>
                LogIn
              </Button>
            </div>
            {/* TODO : 에러메세지 재확인 */}
            <div>
              {this.state.errorMessage ? (
                <Alert className={classes.errmsg} severity="error">
                  {this.state.errorMessage}
                </Alert>
              ) : null}
            </div>
            {/* <Grid container>
              <Grid item xs>
                <Link to="/signup" variant="body2">
                  Forgot password?
                </Link>
                <Link to="/" variant="body2">
                  {"Don't have an account?"}
                </Link>
              </Grid>
            </Grid> */}
          </form>
          <div className="container">
            {/* 구글 : 현재페이지에서 연결하려면 location.href='address'를 이용한다. */}
            <div style={{ marginTop: 20 }}>
              <GLogin handleLoginSuccess={this.props.handleLoginSuccess} />
            </div>
            <div style={{ marginTop: 20, marginLeft: 10 }}>
              <button className="github-btn">
                <a href="https://github.com/login/oauth/authorize?client_id=c30e06847f78a8951b9c&redirect_uri=https://m00m.cf/user/gitoauth&scope=user">
                  <div className="github-div">
                    <img
                      className="github-img"
                      src={githublogo}
                      alt="github"
                    ></img>
                  </div>
                  <span className="github-span">Github</span>
                </a>
              </button>
            </div>
          </div>
          <Box mt={8}>
            <Copyright />
          </Box>
        </center>
      </>
    );
  }
}

export default withStyles(styles)(withRouter(LogIn));
