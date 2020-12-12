import React, { Component } from 'react';
import S2Chart from './S2Chart'

class Chart extends Component {
  render() {
    const  allBodyData = this.props.allBodyData
    console.log("allBodyData => " , allBodyData)
    let DateValue = [allBodyData[0].schedule, allBodyData[1].schedule, allBodyData[2].schedule, allBodyData[3].schedule, allBodyData[4].schedule]
    let BodyValue = [allBodyData[0].value,allBodyData[1].value,allBodyData[2].value,allBodyData[3].value,allBodyData[4].value]
    const graphData = {
        background : '#ffeeee',
        axisX : {
          fontSize : 15, //or number -> fontSize : 15
          tags : DateValue
        },
        axisY : {
          fontSize : 'auto',
          min : 0,
          // min : Math.floor(allBodyData[0].value),
          // max : 50, 
          max : Math.ceil(allBodyData[4].value)+5,          
          divide : 10
        },
        dataList : [
          {
            name : "테스트 1",
            values : BodyValue,
            color : "#ff0000",
            fontSize : 10
          }
        ],
        control : {
          movable : {
            defaultX : 0,
            defaultY : 100
          }, //or movable : true
          resizable : true
        }
    };

    return (
      <div>
          <S2Chart
            graphData={graphData}
            width='50%'
            height='35%'
            />
      </div>
    );
  }
}

export default Chart;