import React from 'react';
import Moment from 'react-moment';
import _ from 'lodash';


function convertTime(data) {
	
}
/*		<div>{convertTime(props.data)} ({props.units})</div> */

export default (props) => {	
		
   const unixTimestamp = props.data[0];
   	
	return (
		<div>
            <Moment unix format="ddd MM/DD hh:mm a">{unixTimestamp}</Moment>
		</div>
	);
}