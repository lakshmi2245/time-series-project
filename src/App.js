import React, { Component } from 'react';
import { connect } from 'react-redux';
import Charts from './Components/Charts';
import firstChartDataPoints from './Components/TimeSeriesData/firstChartDataPoints.json';
import secondChartDataPoints from './Components/TimeSeriesData/secondChartDataPoints.json';
import thirdChartDataPoints from './Components/TimeSeriesData/thirdChartDataPoints.json';
import './App.css';

const Threshold = 5;
class App extends Component {
  constructor() {
    super();
    this.state = {
    }
    this.updateInitialdata = this.updateInitialdata.bind(this);
    this.updateChart = this.updateChart.bind(this);
  }
  componentDidMount() {
    this.updateInitialdata(firstChartDataPoints, 'firstChart');
    this.updateInitialdata(secondChartDataPoints, 'secondChart');
    this.updateInitialdata(thirdChartDataPoints, 'thirdChart');
  }
  updateInitialdata(dataPoints, chart) {
    var labels = [];
    var data = [];
    var signals = [];
    dataPoints.map(element => {
      labels.push(element.x);
      data.push(element.y);
      if (element.y > Threshold) {
        signals.push(1);
      }
      else {
        signals.push(0)
      }
    })
    this.props.addInitialData({ labels, data, signals, chart })
    setInterval(() => {
      this.updateChart(chart)
    }, 5000);
  }

  updateChart(chart) {
    const { chartData, updateChartDataForInterval } = this.props;
    const yVal = Math.floor((Math.random() * 10) + 1);
    const xVal = chartData[chart]?.labels[chartData[chart].labels.length - 1] + 1;
    updateChartDataForInterval({ label: xVal, data: yVal, signal: yVal > Threshold ? 1 : 0, chart });
  }

  render() {
    const { chartData } = this.props;
    return (
      <div>
        <h2>Time Series Data</h2>
        <Charts
          chartdata={chartData.firstChart}
          boarderColor={'#0080FF'}
          series={'Series-1'}
        />
        <Charts
          chartdata={chartData.secondChart}
          boarderColor={'#FF0000'}
          series={'Series-2'}
        />
        <Charts
          chartdata={chartData.thirdChart}
          boarderColor={'#FF8000'}
          series={'Series-3'}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    chartData: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addInitialData: (payload) => dispatch({ type: 'ADD_INITIAL_DATA', payload }),
    updateChartDataForInterval: (payload) => dispatch({ type: 'UPDATE_CHART_DATA', payload })
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
