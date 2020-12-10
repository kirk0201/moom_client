import { Component } from "react";
import { withRouter } from "react-router-dom";

import { BASEURL } from "../helpurl";

import axios from "axios";
axios.defaults.withCredentials = true;

class CustomBodyCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body_part: this.body_part,
    };
  }

  handleInputCreate = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  };

  handleCreateBodypart = (e) => {
    let key = e.target.name;
    const { body_part } = this.state;
    axios
      .post(`${BASEURL}/data/custom`, {
        part_name: body_part,
      })
      .then((res) => {
        console.log(res.data);
        this.props.closeInput(key);
        this.props.handleCustomRecentBody();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  render() {
    const { name, what, type, info, noInfo } = this.props;
    return (
      <>
        <input
          name={name}
          type={type}
          paleceholder={info ? info : noInfo}
          onChange={this.handleInputCreate}
        />
        <button name={what} onClick={this.handleCreateBodypart}>
          저장
        </button>
      </>
    );
  }
}

export default withRouter(CustomBodyCreate);
