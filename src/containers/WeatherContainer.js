import {connect} from "react-redux";
import Weather from "../components/Weather";

function mapStateToProps(state) {
    return {
        weatherInfo: state.weatherInfo,
        message: state.message
    }
}

export default connect(mapStateToProps)(Weather);