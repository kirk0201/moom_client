import React, { Component } from 'react';
import Path from './Path';
import Line from './Line';

class SvgRender extends Component {
  render(){
    const { svgTagList, width, height } = this.props;

    return (
      <svg width={width} height={height}>
        {
          svgTagList.map((svgTag, idx) => {
            if(svgTag.type === 'path'){
              return (
                <Path
                  key={idx}
                  d={svgTag.d}
                  stroke={svgTag.color}
                  fill="transparent"
                  />
              );
            } else if(svgTag.type === 'text'){
              return (
                <text
                  key={idx}
                  x={svgTag.x}
                  y={svgTag.y}
                  fill={svgTag.color}
                  textAnchor={svgTag.textAnchor ? svgTag.textAnchor : 'start'}
                  fontSize={svgTag.fontSize}
                  transform={svgTag.transform}>
                  {svgTag.text}
                </text>
              );
            } else if(svgTag.type === 'rect'){
              return (
                <rect
                  key={idx}
                  x={svgTag.x}
                  y={svgTag.y}
                  width={svgTag.width}
                  height={svgTag.height}
                  fill={svgTag.color} />
              );
            } else if(svgTag.type === 'line'){
              return (
                <Line
                  key={idx}
                  x1={svgTag.x1}
                  y1={svgTag.y1}
                  x2={svgTag.x2}
                  y2={svgTag.y2}
                  max={svgTag.max}
                  mode={svgTag.mode}
                  stroke={svgTag.color} />
              );
            }

            return '';
          })
        }
      </svg>
    );
  }
}

export default SvgRender;