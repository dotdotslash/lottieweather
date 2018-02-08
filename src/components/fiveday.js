import React from 'react';
import Moment from 'react-moment';
import _ from 'lodash';
import Animation from '../components/lottie';


function toFahrenheit(temp) {
	return _.round(temp* 9/5 - 459.67);
}

function toCelsius(temp) {
	return _.round(temp - 273.15);
}


export default (props) => {
	console.log(props);

	const listItems = props.data.map(function(forcast, i) {
	    if (i % 8 === 0) {
			return (
				<div key={i} className="weather-day col col-sm-2">
					<Animation weather={forcast.weather[0].main} />
				
					<h3 className="">
						<Moment unix format="ddd ">{forcast.dt}</Moment>
					</h3>
			  		<div className="" key={forcast.dt}>{forcast.weather[0].main}</div>
					<div className="">
						{toFahrenheit(forcast.main.temp)}&#176;F <span>{toCelsius(forcast.main.temp)}&#176;C</span>
					</div>
				</div>
			);
		}
	});
	   	
	return (
		<div key={props.dt} className="weather-info row ten-columns">
			{listItems}
		</div>
	);
}