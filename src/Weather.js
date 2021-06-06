import React from 'react';
import './index.css';

class Weather extends React.Component{
    render (){
        return(
            <div className="state__tema">
                {this.props.city &&
                <div className="temp__city">
                <p>Метоположение: {this.props.city}, {this.props.country}</p>
                <p>Температуру: {this.props.temp}</p>
                <p>Давление: {this.props.pressure}</p>
                <p>Заход солнца: {this.props.sunset}</p>
                </div>
                }
                <p>{this.props.error}</p>
            </div>
        )
    }
}
export default Weather;