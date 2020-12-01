import { Component } from "react";
import { Route, Switch } from "react-router-dom";

import { BASEURL } from "./helpurl";
import LoginMain from "./pages/LoginMain";
import NoLoginMain from "./pages/NoLoginMain";

import axios from "axios";
axios.defaults.withCredentials = true;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      userInfo: null,
    };
  }

  componentDidMount() {
    this.handleLoginSuccess();
  }

  handleLoginSuccess = () => {
    axios
      .get(`${BASEURL}/user/edit`)
      .then((res) => {
        this.setState({ isLogin: true, userInfo: res.data });
        // 페이지 전환 확인
        this.props.history.push("/");
        // window.location = "/";
      })
      .catch((err) => {
        console.log(err);
        console.log(err.message);
        if (err.message === "Request failed with status code 404") {
          this.setState({ isLogin: false });
          // 페이지 전환 확인
          // this.props.history.push("/login");
        }
      });
  };

  render() {
    const { isLogin, userInfo } = this.state;
    return (
      <div>
        <Switch>
          <Route
            path="/"
            render={() => {
              if (isLogin) {
                return (
                  <LoginMain userInfo={userInfo} isLogin={isLogin}></LoginMain>
                );
              } else {
                return (
                  <NoLoginMain
                    handleLoginSuccess={this.handleLoginSuccess.bind(this)}
                  ></NoLoginMain>
                );
              }
            }}
          ></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
