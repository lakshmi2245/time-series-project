import { createStore } from 'redux';
import { chartsReducer } from './Reducers/chartsReducer'

let store = createStore(chartsReducer);

export default store;