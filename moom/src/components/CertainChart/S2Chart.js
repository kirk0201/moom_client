import React, { Component } from 'react';
import LineChart from './LineChart';

class S2Chart extends Component {
  constructor(props){
    super(props);

    const {
      graphData : {
        control : {
          movable : movableVal,
          resizable : resizableVal,
        }
      }
    } = this.props;

    this.state = {
      measureFinished : false,
      isMovable : false,
      isResizable : false,
      posX : movableVal ? (movableVal.defaultX ? movableVal.defaultX : 0) : 0,
      posY : movableVal ? (movableVal.defaultY ? movableVal.defaultY : 0) : 0,
      gWidth : 0,
      gHeight : 0
    };

    if(resizableVal) {
      this.onMouseDownResizable = this.onMouseDownResizable.bind(this);
    }

    if(movableVal) {
      this.onMouseDownMovable = this.onMouseDownMovable.bind(this);
    }

    if(resizableVal || movableVal) {
      this.onMouseMove = this.onMouseMove.bind(this);
      this.onMouseUp = this.onMouseUp.bind(this);
    }
  }

  refCallback = element => {
    if (element) {
      this.setState({
        gWidth : element.getBoundingClientRect().width,
        gHeight : element.getBoundingClientRect().height,
        measureFinished : true
      });
    }
  }

  onMouseDownResizable(evt) {
    this.setState({
      isResizable : true,
      prevX : evt.pageX,
      prevY : evt.pageY
    });
  }

  onMouseDownMovable(evt) {
    this.setState({
      isMovable : true,
      prevX : evt.pageX,
      prevY : evt.pageY
    });
  }

  onMouseMove(evt) {
    if(this.state.isResizable){
      this.setState({
        gWidth : this.state.gWidth + (evt.pageX - this.state.prevX),
        gHeight : this.state.gHeight + (evt.pageY - this.state.prevY),
        prevX : evt.pageX,
        prevY : evt.pageY
      });
    } else if(this.state.isMovable) {
      this.setState({
        posX : this.state.posX + (evt.pageX - this.state.prevX),
        posY : this.state.posY + (evt.pageY - this.state.prevY),
        prevX : evt.pageX,
        prevY : evt.pageY
      });
    }
  }

  onMouseUp(evt) {
    this.setState({
      isResizable : false,
      isMovable : false,
    });
  }

  render(){
    if(!this.state.measureFinished) {
      const { width, height } = this.props;
      const dummyStyle = {
        position: 'absolute',
        width : width,
        height : height
      };

      return (
          <div
            style={dummyStyle}
            ref={this.refCallback}
            />
        );
    } else {
      const {
        graphData,
        graphData : {
          control : {
            movable : movableVal,
            resizable : resizableVal,
          }
        }
      } = this.props;

      const { posX, posY, gWidth, gHeight } = this.state;
      const style = {
        width: gWidth,
        left: posX,
        top: posY
      };

      if(movableVal) {
        style.position = 'absolute';
      }

      return (
        <div style={style}>
          <LineChart
            width={gWidth}
            height={gHeight}
            graphData={graphData}/>
          <div style={{float:'right'}}>
            {
              (() => {
                if(movableVal){
                  return (
                      <button
                        onMouseDown={this.onMouseDownMovable}
                        onMouseMove={this.onMouseMove}
                        onMouseUp={this.onMouseUp}
                        onMouseLeave={this.onMouseUp}
                        style={{display:'inline-block', background:'#ff00ff', width:40, height:40}}>
                        이동
                      </button>
                  );
                }
              })()
            }

            {
              (() => {
                if(resizableVal){
                  return (
                      <button
                        onMouseDown={this.onMouseDownResizable}
                        onMouseMove={this.onMouseMove}
                        onMouseUp={this.onMouseUp}
                        onMouseLeave={this.onMouseUp}
                        style={{display:'inline-block', background:'#ffff00', width:40, height:40}}>
                        크기
                      </button>
                  );
                }
              })()
            }

          </div>
        </div>
      );
    }

  }
}
export default S2Chart;