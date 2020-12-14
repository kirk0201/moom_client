import React, { Component } from "react";
// import { Resizable } from "re-resizable"; // 리사이즈 시도 실패
import Highcharts from "highcharts";
import {
  HighchartsChart,
  Chart,
  withHighcharts,
  XAxis,
  YAxis,
  Title,
  Subtitle,
  Legend,
  SplineSeries,
  Tooltip,
} from "react-jsx-highcharts";
import "../css/chart.css";

class CertainChart extends Component {
  // 리사이즈 시도 및 실패
  // handleResize = () => {
  //   this.chart.reflow();
  // };

  // getChart = (chart) => {
  //   this.chart = chart;
  // };

  render() {
    const plotOptions = {
      spline: {
        lineWidth: 3,
        states: {
          hover: {
            lineWidth: 5,
          },
        },
        // 데이터 점 표시 삭제시 사용
        // marker: {
        //   enabled: false,
        // },
      },
      series: {
        point: {
          events: {
            click: (e) => {
              let date = allDataSchedule[e.point.x];
              let value = e.point.y;
              let id = allDataId[e.point.x];
              this.props.handlePointClick(date, value, id);
            },
          },
        },
      },
    };

    const { partName } = this.props;
    let allBodyData = this.props.allBodyData;
    let isAllData = this.props.isAllData;

    // 특정 부위의 총 데이터 만들기
    let allDataValue = allBodyData.map((val) => {
      return val.value;
    });
    let allDataSchedule = allBodyData.map((val) => {
      return val.schedule.split("-").slice(1).join("-");
    });
    let allDataId = allBodyData.map((val) => {
      return val.id;
    });

    // 특정 부위에 알맞는 제목 및 단위 만들기
    let unit;
    let tip;
    if (partName === "weight") {
      unit = "(KG)";
      tip = " KG";
    } else if (partName === "body_fat") {
      unit = "(%)";
      tip = " %";
    } else {
      unit = "(CM)";
      tip = " CM";
    }
    let ytitle = `${partName} ${unit}`;
    let title;
    let subtitle;

    // 모든 데이터이거나 마지막 일곱게 데이터일때 조건에 맞는 제목과 데이터만들기
    if (isAllData) {
      title = `All data recorded about ${partName}`;
      subtitle = `${partName}에 대해 기록된 모든 데이터입니다.`;
    } else {
      allDataValue = allDataValue.slice().reverse().slice(0, 7).reverse();
      allDataSchedule = allDataSchedule.slice().reverse().slice(0, 7).reverse();
      allDataId = allDataId.slice().reverse().slice(0, 7).reverse();
      title = `The last seven data recorded about ${partName}`;
      subtitle = `${partName}에 대해 기록된 마지막 일곱개의 데이터입니다.`;
    }

    return (
      <div className="app">
        {/* 리사이즈 시도 및 실패  */}
        {/* <Resizable
          className="box"
          defaultSize={{ width: 615, height: 400 }}
          handleClasses={{ bottomRight: "handle-se" }}
          maxWidth={750}
          maxHeight={500}
          onResizeStop={this.handleResize}
          lockAspectRatio
        > */}
        <div className="chart-container">
          <HighchartsChart plotOptions={plotOptions}>
            {/* 다크 스타일 모드 */}
            {/* <HighchartsChart styledMode> */}
            <Chart type="spline" />
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
            <Legend />
            <Tooltip valueSuffix={tip} />
            <XAxis categories={allDataSchedule}>
              <XAxis.Title>Date</XAxis.Title>
            </XAxis>
            <YAxis
              minorGridLineWidth={0}
              gridLineWidth={0}
              alternateGridColor={null}
            >
              <YAxis.Title>{ytitle}</YAxis.Title>
              <SplineSeries name={partName} data={allDataValue} />
            </YAxis>
          </HighchartsChart>
        </div>
        {/* 리사이즈 시도 및 실패  */}
        {/* </Resizable> */}
      </div>
    );
  }
}

export default withHighcharts(CertainChart, Highcharts);
