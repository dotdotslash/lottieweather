import React from 'react';
import ReactBodymovin from 'react-bodymovin';
import animation from '../animations/cloud_sync.json';


export default (props) => {	
		
    const bodymovinOptions = {
       loop: true,
       autoplay: true,
       prerender: true,
       animationData: animation
     }
   	
	return (
		<div>
      		<ReactBodymovin options={bodymovinOptions} />
    	</div>
	);
}