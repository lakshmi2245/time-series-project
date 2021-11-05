export const initialState = {
  firstChart: [],
  secondChart: [],
  thirdChart: []
}

export const chartsReducer = function (state = initialState, action) {
  const { type, payload } = action;
    switch (action.type) {
      case "ADD_INITIAL_DATA":
        return {
          ...state,
          [payload.chart]: payload
        };
      case "UPDATE_CHART_DATA":
        return {
          ...state,
          [payload.chart]: {
            labels: [...state[payload.chart].labels.slice(1), payload.label],
            data: [...state[payload.chart].data.slice(1), payload.data],
            signals: [...state[payload.chart].signals.slice(1), payload.signal]
          }
        };
      default:
        return state;
    }
  };