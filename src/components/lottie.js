import React from 'react';
import Lottie from 'react-lottie';
import * as sunAni from '../animations/sun_burst_weather_icon.json';
import * as clearAni from '../animations/infinite_rainbow.json';
import * as rainAni from '../animations/wifi_wiper.json';
import * as snowAni from '../animations/square_drop_loader.json';
import * as cloudAni from '../animations/cloud_sync.json';



export default (props) => {	
	console.log(props);
		
    const animationSettings = {
			loop: true,
			autoplay: true, 
			rendererSettings: {
			preserveAspectRatio: 'xMidYMid' 
		}
	};


	switch(props.weather) {
		case 'Clear':
			animationSettings.animationData = sunAni;
		break;
		case 'Snow':
			animationSettings.animationData = snowAni;
		break;
		case 'Clouds':
			animationSettings.animationData = cloudAni;
	  	break; 
		case 'Rain':
			animationSettings.animationData = rainAni;
	  	break;  
		default:
			animationSettings.animationData = sunAni;
	}
   	
	return (
		<div>
	    	<Lottie options={animationSettings} />
    	</div>
	);
}