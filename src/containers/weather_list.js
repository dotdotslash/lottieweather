import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import FiveDay from '../components/fiveday';

class WeatherList extends Component {
	
	renderWeather(cityData) {
		const temps = cityData.list.map(weather => weather.main.temp);
		const pressure = cityData.list.map(weather => weather.main.pressure);
		const humidity = cityData.list.map(weather => weather.main.humidity);
		const {lon,lat} = cityData.city.coord;
		
		const maxTemp = cityData.list.map(weather => weather.main.temp_max);
		const minTemp = cityData.list.map(weather => weather.main.temp_min);
		
		const dateTime = cityData.list.map(forcast => forcast.dt);
		
		const  weather = cityData.list.map(forcast => forcast);
		
		
		const listItems = cityData.list.map(forcast =>
			<ul key={forcast.dt}>
				<li>Min: {forcast.main.temp_min* 9/5 - 459.67 }</li>
				<li>Max: {forcast.main.temp_max}</li>
		  		<li key={forcast.dt}>{forcast.weather[0].main}</li>
			</ul>
		);
				
		return (
			<tr key={cityData.city.name}>
				<td>
					{cityData.city.name}
					<FiveDay data={weather} />		
				</td>
				<td>
					<Chart data={temps} color="green" units="k" />
				</td>
				<td>
					<Chart data={pressure} color="blue" units="hpa" />
				</td>
				<td>
					<Chart data={humidity} color="red" units="%" />
				</td>
			</tr>
		);
	}
	
	
	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (k)</th>
						<th>Pressure (hpa)</th>
						<th>Humidity (%)</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		);
	}
}

function mapStateToProps({weather}) {
	return {weather};
}

export default connect(mapStateToProps)(WeatherList);
