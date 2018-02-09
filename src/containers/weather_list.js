import React, {Component} from 'react';
import {connect} from 'react-redux';
import FiveDay from '../components/fiveday';


class WeatherList extends Component {
	
	renderWeather(cityData) {
		const temps = cityData.list.map(weather => weather.main.temp);
		const {lon,lat} = cityData.city.coord;
		const  weather = cityData.list.map(forcast => forcast);
		
		if(cityData) {
			return (
				<div key={cityData.city.name} className="city">
					<h2>{cityData.city.name}</h2>
					<FiveDay data={weather} />
				</div>
			);
		} else {
			console.log('erroe');
		}
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
