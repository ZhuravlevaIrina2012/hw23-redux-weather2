import {getWeatherAction} from "../actions/WeatherAction";
import {connect} from "react-redux";
import FormControl from "../components/FormControl";


function mapDispatchToProps(dispatch){
    return{
        getWeather: city => dispatch(getWeatherAction(city))
    }
}

export default connect(null, mapDispatchToProps)(FormControl);