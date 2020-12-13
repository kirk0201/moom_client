import React, { Component } from "react";
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
  LineSeries,
  Tooltip,
} from "react-jsx-highcharts";
import "../css/chart.css";

class BasicAllChart extends Component {
  render() {
    const plotOptions = {
      spline: {
        lineWidth: 3,
        states: {
          hover: {
            lineWidth: 4,
          },
        },
      },
    };

    let isAllData = this.props.isAllData;
    let allBodyFatData = this.props.allBasicData.body_fat;
    let allWeightData = this.props.allBasicData.weight;
    let allShoulderData = this.props.allBasicData.shoulder;
    let allChestData = this.props.allBasicData.chest;
    let allWaistData = this.props.allBasicData.waist;
    let allHipData = this.props.allBasicData.hip;
    let allThighData = this.props.allBasicData.thigh;
    let allDataSchedule = this.props.allBasicData.schedule;

    // 모든 데이터이거나 마지막 일곱게 데이터일때 조건에 맞는 제목과 데이터만들기
    let title;
    let subtitle;
    if (isAllData) {
      title = `All data recorded about basic body`;
      subtitle = `기본 부위에 대해 기록된 모든 데이터입니다.`;
    } else {
      allBodyFatData = allBodyFatData.slice().reverse().slice(0, 7).reverse();
      allWeightData = allWeightData.slice().reverse().slice(0, 7).reverse();
      allShoulderData = allShoulderData.slice().reverse().slice(0, 7).reverse();
      allChestData = allChestData.slice().reverse().slice(0, 7).reverse();
      allWaistData = allWaistData.slice().reverse().slice(0, 7).reverse();
      allHipData = allHipData.slice().reverse().slice(0, 7).reverse();
      allThighData = allThighData.slice().reverse().slice(0, 7).reverse();
      allDataSchedule = allDataSchedule.slice().reverse().slice(0, 7).reverse();
      title = `The last seven data recorded about basic body`;
      subtitle = `기본 부위에 대해 기록된 마지막 일곱개의 데이터입니다.`;
    }

    return (
      <div className="app">
        <div className="chart-container">
          <HighchartsChart plotOptions={plotOptions}>
            {/* 다크 스타일 모드 */}
            {/* <HighchartsChart styledMode> */}
            <Chart />
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
            <Legend
              layout="vertical"
              align="right"
              verticalAlign="middle"
              borderWidth={0}
            />
            <Tooltip shared />
            <XAxis categories={allDataSchedule}>
              <XAxis.Title>Date</XAxis.Title>
            </XAxis>
            <YAxis
              minorGridLineWidth={0}
              gridLineWidth={0}
              alternateGridColor={null}
            >
              <YAxis.Title>Basic Body</YAxis.Title>
              <LineSeries name="BodyFat(%)" data={allBodyFatData} />
              <LineSeries name="Weight(kg)" data={allWeightData} />
              <LineSeries name="Shoulder(cm)" data={allShoulderData} />
              <LineSeries name="Chest(cm)" data={allChestData} />
              <LineSeries name="Waist(cm)" data={allWaistData} />
              <LineSeries name="Hip(cm)" data={allHipData} />
              <LineSeries name="Thigh(cm)" data={allThighData} />
            </YAxis>
          </HighchartsChart>
        </div>
      </div>
    );
  }
}

export default withHighcharts(BasicAllChart, Highcharts);
