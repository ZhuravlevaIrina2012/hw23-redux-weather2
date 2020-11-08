import {api_key, base_url} from "../utils/Constants";

export const GET_WEATHER = 'GET_WEATHER';
export const WEATHER_ERROR = 'WEATHER_ERROR';

export const putWeatherAction = info => (
    {
        type: GET_WEATHER,
        payload: info
    }
);

export const errorWeatherAction = () => (
    {
        type: WEATHER_ERROR,
        payload: 'Enter correct city name'
    }
);

export const getWeatherAction = (city) => {
    let weatherInfo = {};
    return dispatch => {
        fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('' + response.status);
                }
            })
            .then(data => {
                weatherInfo = {
                    city: data.name,
                    country: data.sys.country,
                    temp: data.main.temp,
                    pressure: data.main.pressure,
                    sunset: data.sys.sunset
                };
            })
            .then(() => dispatch(putWeatherAction(weatherInfo)))
            .catch(e => dispatch(errorWeatherAction()));
    }
}