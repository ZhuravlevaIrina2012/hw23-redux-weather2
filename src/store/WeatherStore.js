import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import weatherReducer from "../reducer/WeatherReducer";

const initialState = {weatherInfo: 'Enter city name'};

const store = createStore(weatherReducer, initialState, applyMiddleware(thunk));

export default store;