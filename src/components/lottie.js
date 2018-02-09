import React from 'react';
import Lottie from 'react-lottie';
import * as sunAni from '../animations/sun.json';
import * as clearAni from '../animations/sun.json';
import * as rainAni from '../animations/rain.json';
import * as snowAni from '../animations/snow.json';
import * as cloudAni from '../animations/cloud.json';



export default (props) => {	
			
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
		<div className="forecast-art">
	    	<Lottie options={animationSettings} />
    	</div>
	);
}