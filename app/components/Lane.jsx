import React from 'react';

const Lane = ({lane, ...props}) => (
	<div className="lane">
		{lane.name}
	</div>
);

export default Lane