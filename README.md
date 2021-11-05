# time-series-project
A project with random time-series data

Initially when we run the project, charts with static data will be rendered. Random time signal will be added at the end and first signal will be removed for every 5 secs. This way I am dynamically rendering incoming time-series on intervals.

I have used 'react-chartjs-2' node module for the charts representation. Overall it took me 7 to 8 hours for the implementation. I have used class components and redux. We can implement this using hooks as well. In real-time scenario we will be implementing this using an API which gives us the time series data.

## Setup Instructions
Clone down this repository. You will need `node` and `npm` installed globally on your machine.

Installation:

`npm install`

To start the server:

`npm start`

To visit App:

`localhost:3000`

## Project Screenshots

![image](https://user-images.githubusercontent.com/47202610/140485379-da935550-1d45-4870-93a7-364cdcb1ed65.png)
