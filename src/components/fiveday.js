import React from 'react';
import Moment from 'react-moment';
import _ from 'lodash';

function toFahrenheit(temp) {
	return _.round(temp* 9/5 - 459.67);
}

function toCelsius(temp) {
	return _.round(temp - 273.15);
}


export default (props) => {
	console.log(props);
	
	/*
	const listItems = props.data.map(forcast =>
		
		<ul key={forcast.dt}>
			<li>
				<Moment unix format="ddd MM/DD hh:mm a">{forcast.dt}</Moment>
			</li>
			<li>Min: {toFahrenheit(forcast.main.temp_min)}</li>
			<li>Max: {toFahrenheit(forcast.main.temp_max)}</li>
	  		<li key={forcast.dt}>{forcast.weather[0].main}</li>
		
		</ul>
	);
	*/
	
	const listItems = props.data.map(function(forcast, i) {
	    if (i % 8 === 0) {
			return (
				<ul key={i}>
					<li>
						<Moment unix format="ddd MM/DD hh:mm a">{forcast.dt}</Moment>
					</li>
					<li>Fahrenheit: {toFahrenheit(forcast.main.temp)}</li>
					<li>Celsius: {toCelsius(forcast.main.temp)}</li>
					<li>Min: {toFahrenheit(forcast.main.temp_min)}</li>
					<li>Max: {toFahrenheit(forcast.main.temp_max)}</li>
			  		<li key={forcast.dt}>{forcast.weather[0].main}</li>
				</ul>
			);
		}
	});
	
	
		
   const unixTimestamp = props.data[0];
   	
	return (
		<ul key={props.dt}>
			{listItems}
		</ul>
	);
}