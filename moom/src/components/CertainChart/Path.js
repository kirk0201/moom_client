import React, { Component } from 'react';

class Path extends Component {
  constructor(props){
    super(props);
    this.state = {
      hover: false
    };

    this.toggleHover = this.toggleHover.bind(this);
  }

  toggleHover(){
    this.setState({
      hover: !this.state.hover
    });
  }

  render(){
    const {d, stroke, fill} = this.props;
    return (
      <path
        d={d}
        stroke={stroke}
        strokeWidth={this.state.hover ? 3 : 1}
        fill={fill}
        onMouseOver={this.toggleHover}
        onMouseOut={this.toggleHover}>
      </path>
    );
  }
}

export default Path;
