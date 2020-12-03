import { Component } from "react";
import { withRouter } from "react-router-dom";

import { BASEURL } from "../helpurl";

import axios from "axios";
axios.defaults.withCredentials = true;

class UserInfoEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      promise: "",
      nikname: "",
    };
  }

  handleInputUserEdit = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  };

  handleUserEdit = () => {
    const { promise, nikname } = this.state;
    console.log(promise);
    console.log(nikname);
    // this.props.close();
    axios
      .put(`${BASEURL}/user/edit`, {
        promise: promise,
        name: nikname,
      })
      .then((res) => {
        console.log(res.data);
        this.props.close();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  render() {
    const { info, noInfo, name, type } = this.props;
    return (
      <>
        <input
          name={name}
          type={type}
          placeholder={info ? info : noInfo}
          onChange={this.handleInputUserEdit}
        />
        <button onClick={this.handleUserEdit}>저장</button>
      </>
    );
  }
}

export default withRouter(UserInfoEdit);
