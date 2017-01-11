import React from 'react';
import uuid from 'uuid';
import Notes from './Notes';

const notes = [
  {
    id: uuid.v4(),
    task: 'Learn React'
  },
  {
    id: uuid.v4(),
    task: 'Do laundry'
  }
];

const App = () => (
	<div>
		<button onClick={() =>  console.log('add note')}>+</button>
		<Notes notes={notes} />
	</div>
)


export default App;