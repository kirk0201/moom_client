import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import Alert from "@material-ui/lab/Alert";

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
    marginTop: "7px",
    width: "230px",
    "&:focus": {
      outline: 0,
    },
  },
  select: {
    width: "230px",
    margin: "15px",
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
    let regexp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if (!regexp.test(email)) {
      return this.setState({ errorMessage: "올바른 Email 형식이 아닙니다" });
    }
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
        // console.log(res);
        // TODO : 페이지 전환 확인 redirect
        // TODO: 다른 상태코드에 따른 분기가 필요
        this.props.history.push("/login");
      })
      .catch((err) => {
        console.log(err);
        console.log(err.message);
        if (err.message === "Request failed with status code 409") {
          this.setState({
            errorMessage: "이미 존재하는 이메일입니다.",
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
            src={logoimg}
            style={{
              width: "250px",
              height: "auto",
            }}
            art={"로고 이미지"}
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
                type="email"
                onChange={this.handleInputSignup}
              ></TextField>
            </div>
            <div>
              <TextField
                variant="outlined"
                margin="normal"
                required
                id="email"
                label="Your NickName"
                name="name"
                type="email"
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
                onChange={this.handleInputSignup}
              ></TextField>
            </div>
            <FormControl className={classes.select} variant="outlined">
              <InputLabel htmlFor="outlined-age-native-simple">
                Gender
              </InputLabel>
              <Select
                native
                name="sex"
                value={this.state.sex}
                onChange={this.handleInputSignup}
                label="Gender"
              >
                <option aria-label="None" value="" />
                <option value="female">여성</option>
                <option value="male">남성</option>
              </Select>
            </FormControl>
            <div>
              <Button className={classes.root} onClick={this.handleSignup}>
                SignUp
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
