import axios from 'axios';

const API_KEY = 'b0b3369be4094fd8a22ce7e00e20739a';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},us`;
	
	 return axios.get(url)
		.then(function(response){
	        return {
				type: FETCH_WEATHER,
				payload: response
	        }
	    })
		.catch(function(response){
	      //  console.log(response);
	    });
}

