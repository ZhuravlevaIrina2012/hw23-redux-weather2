import {GET_WEATHER, WEATHER_ERROR} from "../actions/WeatherAction";


function weatherReducer(state, action){
    switch (action.type){
        case GET_WEATHER:
        case WEATHER_ERROR:
            return {weatherInfo: action.payload};
        default:
            return state;
    }
}

export default weatherReducer;