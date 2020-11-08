import React from 'react';

const Weather = props => {
    if (props.weatherInfo.city) {
        return (
            <div className='infoWeath'>
                <div>
                    <p>Location: {props.weatherInfo.city}, {props.weatherInfo.country}</p>
                    <p>Temp: {props.weatherInfo.temp}</p>
                    <p>Pressure: {props.weatherInfo.pressure}</p>
                    <p>Sunset: {new Date(props.weatherInfo.sunset * 1000).toTimeString()}</p>
                </div>
            </div>
        );
    } else {
        return (
            <div className='infoWeath'>
                <p>{props.weatherInfo}</p>
            </div>
        );
    }
}



export default Weather;