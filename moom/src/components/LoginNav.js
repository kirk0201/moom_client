import React from "react";
import { Menu, MenuItem, Toolbar, AppBar, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link, withRouter } from "react-router-dom";
import { BASEURL } from "../helpurl";
import profile_img from "../images/profile.jpg";
import "../css/LoginNav.css";
import axios from "axios";
import logoimg from "../images/moomlogo.png";

function LoginNav(props) {
  // props 받아오기
  const { promise, profile, name } = props.userInfo;
  // 로그아웃 버튼 클릭시 axios요청 함수
  const handleLogout = () => {
    handleClose();
    axios.get(`${BASEURL}/user/logout`).then(() => {
      console.log(props.history);
      // TODO : 페이지 전환 확인 redirect
      // TODO: 다른 상태코드에 따른 분기가 필요
      props.handleLoginFail();
      props.history.push("/");
    });
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  //매뉴 열림
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  //매뉴 닫침
  const handleClose = () => {
    setAnchorEl(null);
  };

  //TODO: 고정 nav바 css style
  const useStyles = makeStyles({
    nav: {
      display: "block",
      height: "60px",
      minHeight: "auto",
    },
  });

  const classes = useStyles();

  return (
    <div
      style={{
        width: "100%",
        display: "block",
        minHeight: "auto",
        padding: "0px",
        margin: "0px",
      }}
    >
      <AppBar position="static">
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
          <div
            style={{
              color: "white",
              position: "fixed",
              textAlign: "center",
              top: "20px",
              left: "25%",
              width: "50%",
            }}
          >
            {promise ? `나의 다짐: ${promise}` : "등록된 나의 다짐이 없습니다."}
          </div>
          <div style={{ float: "right" }}>
            <img
              alt="사진이 어디있을까요?"
              src={profile ? profile : profile_img}
              style={{
                width: "50px",
                height: "auto",
                marginTop: "5px",
                borderRadius: "50%",
              }}
              onClick={handleMenu}
            />
            <span>{name}</span>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>
                <Link to="/mypage">마이페이지</Link>
              </MenuItem>
              <MenuItem onClick={handleLogout}>로그아웃</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
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
}

export default withRouter(LoginNav);
