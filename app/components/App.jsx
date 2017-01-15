import React from 'react';
import uuid from 'uuid';
// import Notes from './Notes';
import connect from '../libs/connect';
// import NoteActions from '../actions/NoteActions';
import Lanes from './Lanes';
import LaneActions from '../actions/LaneActions';

const App = ({LaneActions, lanes}) => {
	const addLane = () => {
		LaneActions.create({
			id: uuid.v4(),
			name: 'New lane'
		});
	};
	return(
		<div>
			<button 
				className="add-lane"
				onClick={addLane}
			>
				+
			</button>
			<Lanes lanes={lanes} />
		</div>
	);

	// addNote = () => {
	// 	this.props.NoteActions.create({
	// 		id: uuid.v4(),
	// 		task: 'New Task',
	// 	})
	// }
	// deleteNote = (id, e) => {
	// 	// Avoid bubbling to edit
	// 	e.stopPropagation();
	// 	this.props.NoteActions.delete(id);
	// }
	// activateNoteEdit = (id) => {
	// 	this.props.NoteActions.update({id, editing: true});
	// }
	// editNote = (id, task) => {
	// 	// this.props.NoteActions.update(({
	// 	// 	id, 
	// 	// 	editing: false, 
	// 	// 	task: task
	// 	// }));
	// 	const {NoteActions} = this.props;
	// 	NoteActions.update({id, task, editing: false});
	// }
	// render(){
	// 	const {notes} = this.props;
	// 	return(
	// 		<div>
	// 			<button 
	// 				className="add-note"
	// 				onClick={this.addNote}
	// 			>
	// 				+
	// 			</button>
	// 			<Notes 
	// 				notes={notes} 
	// 				onNoteClick={this.activateNoteEdit}
	// 				onEdit={this.editNote}
	// 				onDelete={this.deleteNote} 
	// 			/>
	// 		</div>
	// 	)		
	// }
}

// export default App;

// export default connect(({notes}) => ({
// 	notes
// }),{
// 	NoteActions
// })(App);

export default connect(({lanes}) => ({
	lanes
}),{
	LaneActions
})(App);