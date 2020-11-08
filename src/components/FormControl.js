import React, {useState} from 'react';

const FormControl = props =>  {
    const [city, setCity] = useState('');

    return (
        <div>
            <input
                value={city}
                onChange={event => setCity(event.target.value)}
                type='text'
                placeholder='city'/>
            <button onClick={() => {
                props.getWeather(city);
                setCity({city: ''});
            }}>Get Weather</button>
        </div>
    );
}

export default FormControl;