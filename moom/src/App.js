import { Component } from "react";
import { Route, Switch } from "react-router-dom";

import { BASEURL } from "./helpurl";
import LoginMain from "./pages/LoginMain";
import NoLoginMain from "./pages/NoLoginMain";

import axios from "axios";
axios.defaults.withCredentials = true;

class App extends Component {
  state = {
    isLogin: false,
    userinfo: null,
  };

  // componentDidMount() {
  //   this.handleLoginSuccess();
  // }

  handleLoginSuccess = () => {
    axios
      .get(`${BASEURL}/user/edit`)
      .then((res) => {
        console.log(res.data);
        this.setState({ isLogin: true, userinfo: res.data });
        console.log(this.state.userinfo);
        this.props.history.push("/");
      })
      .catch((err) => {
        console.log(err);
        console.log(err.message);
        if (err.message === "Request failed with status code 404") {
          this.setState({ isLogin: false });
        }
      });
  };

  render() {
    const { isLogin, userinfo } = this.state;
    return (
      <div>
        <Switch>
          <Route
            path="/"
            render={() => {
              if (isLogin) {
                return <LoginMain userinfo={userinfo}></LoginMain>;
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
