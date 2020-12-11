import React, { Component } from 'react';
import S2Chart from './S2Chart'

class Chart extends Component {
  render() {
    const graphData = {
        background : '#ffeeee',
        axisX : {
          fontSize : 'auto', //or number -> fontSize : 15
          tags : ["1월", "2월", "3월", "4월", "5월", "6월",
            "7월", "8월", "9월", "10월", "11월", "12월"]
        },
        axisY : {
          fontSize : 'auto',
          min : 0,
          max : 70,
          divide : 7
        },
        dataList : [
          {
            name : "테스트 1",
            values : [0,5,23,1,4,64,16,7,12,2,4,5,1],
            color : "#ff0000",
            fontSize : 20
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