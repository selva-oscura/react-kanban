import React from 'react';
import Lane from './Lane';

const Lanes = ({lanes}) => {
	<div className="lanes">
		{lanes.map(lane => 
			<Land className="lane" key={lane.id} lane={lane} />
		)}
	</div>
}

export default Lanes;