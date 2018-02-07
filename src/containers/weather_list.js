import React, {Component} from 'react';
import {connect} from 'react-redux';
import FiveDay from '../components/fiveday';
//import Forcast from '../components/forcast';


class WeatherList extends Component {
	
	renderWeather(cityData) {
		const temps = cityData.list.map(weather => weather.main.temp);
		const {lon,lat} = cityData.city.coord;
		const  weather = cityData.list.map(forcast => forcast);
				
		return (
			<div key={cityData.city.name} className="city">
				<h1>{cityData.city.name}</h1>
				<FiveDay data={weather} />
			</div>
		);
	}
	
	
	render() {
		return (
			<div className="weather">
				{this.props.weather.map(this.renderWeather)}
			</div>			
		);
	}
}

function mapStateToProps({weather}) {
	return {weather};
}

export default connect(mapStateToProps)(WeatherList);
