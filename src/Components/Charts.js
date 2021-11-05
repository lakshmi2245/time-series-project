import React from 'react';
import { Line, Bar } from "react-chartjs-2";
import './Charts.css'

const opacity = '30'
const Charts = (props) => {
    const { series, chartdata, boarderColor } = props;
    return (
        <div className="chartsMainDiv">
            <div className="chartsDiv">
                <h4>{series} Original Data:</h4>
                <Line
                    data={{
                        labels: chartdata.labels,
                        datasets: [
                            {
                                data: chartdata.data,
                                backgroundColor: boarderColor+opacity,
                                borderColor: boarderColor,
                                borderWidth: 0.7,
                            },
                        ],
                    }}
                    options={{
                        maintainAspectRatio: false,
                        scales: {
                            x: {
                                grid: {
                                    display: false
                                },
                                ticks: {
                                    display: false
                                }
                            },
                        },
                        plugins: {
                            legend: {
                              display: false
                            }
                        },
                        elements: {
                            point:{
                                radius: 0
                            }
                        }
                    }}
                />
            </div>
            <div className="chartsDiv">
            <h4>{props.series} Areas of Intrest:</h4>
                <Bar
                    data={{
                        labels: chartdata.labels,
                        datasets: [
                            {
                                data: chartdata.signals,
                                backgroundColor: boarderColor+opacity,
                                borderColor: boarderColor,
                                borderWidth: 0.7,
                            },
                        ],
                    }}
                    options={{
                        maintainAspectRatio: false,
                        scales: {
                            x: {
                                grid: {
                                    display: false
                                },
                                ticks: {
                                    display: false
                                }
                            },
                        },
                        plugins: {
                            legend: {
                              display: false
                            }
                          }
                    }}
                />
            </div>
        </div>
    );
}

export default Charts;