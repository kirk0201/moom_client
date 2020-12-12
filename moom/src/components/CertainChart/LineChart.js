import React, { Component } from 'react';
import SvgRender from './SvgRender';

class LineChart extends Component {
  transformationSvgTagList(width, height, graphData) {
    const axisX = graphData.axisX;
    const axisY = graphData.axisY;
    const sizeInfo = {
      left : parseInt(width * 0.1),
      right : parseInt(width * 0.1),
      top : parseInt(height * 0.05),
      bottom : parseInt(height * 0.1),
      body : {
        width : parseInt(width * 0.8),
        height : parseInt(height * 0.85)
      }
    };

    const dataLines = this.createDataLines(axisX, axisY, sizeInfo, graphData.dataList);
    const axisXLines =  this.createAxisXLines(axisX, sizeInfo);
    const axisYLines =  this.createAxisYLines(axisY, sizeInfo);

    return [...dataLines, ...axisXLines, ...axisYLines];
  }

  createDataLines(axisX, axisY, sizeInfo, dataList){
    const axisYSize = sizeInfo.body.height / (axisY.max - axisY.min);
    let tags = [];

    for(let idx in dataList) {
      const data = dataList[idx];
      const axisXSize = sizeInfo.body.width/(data.values.length-1);
      let path = '';
      let posX;
      let posY;

      for(let idx in data.values) {
        posX = axisXSize * idx + sizeInfo.left;
        posY = sizeInfo.body.height - (data.values[idx] * axisYSize) + sizeInfo.top;

        path += (idx === '0') ? "M" : "L";
        path += [posX, ",", posY].join(" ");
      }

      tags.push({
        type : 'path',
        d : path,
        color : data.color ? data.color : this.getRandomColor(),
      });

      tags.push({
        type : 'text',
        x : posX,
        y : posY,
        text : data.name,
        color : data.color ? data.color : this.getRandomColor(),
        fontSize : this.getFontSize(data, axisXSize)
      });
    }
    return tags;
  }

  createAxisXLines(axisX, sizeInfo){
      let tags = [];

      tags.push({
        type : 'path',
        d : `M ${sizeInfo.left}, ${sizeInfo.body.height + sizeInfo.top} h ${sizeInfo.body.width}`,
        color : '#000000'
      });

      const length = axisX.tags.length;
      const increaseWidth = sizeInfo.body.width / length;
      for(let i=1; i<=length; i++) {
        let x = i * increaseWidth + sizeInfo.left;
        let y = sizeInfo.body.height * 1.08 + sizeInfo.top;
        tags.push({
          type : 'text',
          x : x,
          y : y,
          text : axisX.tags[i-1],
          color : '#000000',
          fontSize : this.getFontSize(axisX, increaseWidth),
          textAnchor : 'middle'
        });

        tags.push({
          type : 'line',
          x1 : i * increaseWidth + sizeInfo.left,
          y1 : sizeInfo.body.height + sizeInfo.top,
          x2 : 0,
          y2 : 5,
          max : sizeInfo.body.height,
          mode : 'vertical',
          color : '#000000'
        });
      }
      return tags;
  }

  createAxisYLines(axisY, sizeInfo){
      let tags = [];

      tags.push({
        type : 'path',
        d : `M ${sizeInfo.left}, ${sizeInfo.top} v ${sizeInfo.body.height}`,
        color : '#000000'
      });

      const increaseHeight = sizeInfo.body.height / axisY.max;
      let increaseLoop = parseInt(axisY.max / axisY.divide);
      increaseLoop = increaseLoop <= 0 ? 1 : increaseLoop;

      for(let i=axisY.min; i<=axisY.max; i+=increaseLoop) {
        tags.push({
          type : 'text',
          x : sizeInfo.left * 0.9,
          y : sizeInfo.body.height - i * increaseHeight + sizeInfo.top + 1,
          text : i + axisY.min,
          color : '#000000',
          textAnchor : 'end',
          fontSize : this.getFontSize(axisY, sizeInfo.left * 0.7),
        });

        tags.push({
          type : 'line',
          x1 : sizeInfo.left,
          y1 : sizeInfo.body.height - i * increaseHeight + sizeInfo.top,
          x2 : 5,
          y2 : 0,
          max : sizeInfo.body.width,
          mode : 'horizontal',
          color : '#000000'
        });
      }

      return tags;
  }

  getRandomColor(){
    return '#' + Math.random().toString(16).slice(-6);
  }

  getFontSize(target, width) {
    if(target.fontSize) {
      if(typeof(target.fontSize) == 'number') {
        return target.fontSize;
      } else { //auto size
        return width * 0.35;
      }
    }
    return 15; //default
  }


  render() {
    const { width, height, graphData } = this.props;
    const mainStyle = {
      background: graphData.background ? graphData.background : '#eeeeee',
      width: width,
      height: height
    };

    const svgTagList = this.transformationSvgTagList(width, height, graphData);

    return (
        <div style={mainStyle}>
          <SvgRender
            svgTagList={svgTagList}
            width={width}
            height={height}/>
        </div>
    );
  }
}

export default LineChart;