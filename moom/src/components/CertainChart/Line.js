import React, { Component } from 'react';

class Line extends Component {
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
    const {x1, y1, x2, y2, max, stroke, mode} = this.props;

    let toX;
    let toY;
    if(mode === 'horizontal') {
      toX = x1 + (this.state.hover ? max : x2);
      toY = y1 + y2;
    } else {
      toX = x1 + x2;
      toY = y1 - (this.state.hover ? max : y2);
    }

    return (
      <line
        x1={x1}
        y1={y1}
        x2={toX}
        y2={toY}
        stroke={stroke}
        strokeWidth={1}
        strokeDasharray={this.state.hover ? "5, 5" : "0, 0"}
        fillOpacity={this.state.hover ? 0.2 : 1}
        onMouseOver={this.toggleHover}
        onMouseOut={this.toggleHover}>
      </line>
    );
  }
}

export default Line;