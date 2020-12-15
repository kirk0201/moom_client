import React from "react";
import { Link } from "react-router-dom";
import "../css/NologinNav.css";
import {
  AppBar,
  Toolbar,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import logoimg from "../images/moomlogo.png";

const NoLoginNav = () => {
  // 비로그인시 네비 바

  //TODO: 고정 nav바 css style
  const useStyles = makeStyles({
    nav: {
      display: "block",
      height: "60px",
      minHeight: "auto",
    },
    login: {
      color: "white",
    },
    logout: {
      color: "white",
    },
  });

  const classes = useStyles();

  return (
    <div>
      <header style={{ width: "100%", display: "block", minHeight: "auto" }}>
        <AppBar>
          <Toolbar
            classes={{
              root: classes.nav,
            }}
          >
            <Link to="/">
              <img
                src={logoimg}
                style={{
                  width: "50px",
                  height: "auto",
                  marginTop: "5px",
                }}
              />
            </Link>
            <Link to="/signup" style={{ float: "right", marginTop: "12px" }}>
              <Button
                color="inherit"
                classes={{
                  root: classes.login,
                }}
              >
                회원가입
              </Button>
            </Link>
            <Link to="/login" style={{ float: "right", marginTop: "12px" }}>
              <Button
                color="inherit"
                classes={{
                  root: classes.logout,
                }}
              >
                로그인
              </Button>
            </Link>
          </Toolbar>
        </AppBar>
      </header>

      <div className="topbutton">
        <Button
          variant="contained"
          color="primary"
          onClick={() => window.scrollTo(0, 0)}
        >
          TOP
        </Button>
      </div>
    </div>
  );
};

export default NoLoginNav;
