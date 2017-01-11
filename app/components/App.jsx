import React from 'react';
import Notes from './Notes';

const App = () => (
	<div>
		<button onClick={() =>  console.log('add note')}>+</button>
		<Notes />
	</div>
)


export default App;