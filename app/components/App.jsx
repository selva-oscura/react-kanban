import React from 'react';
import uuid from 'uuid';
import Notes from './Notes';
import connect from '../libs/connect';
import NoteActions from '../actions/NoteActions';

class App extends React.Component {
	addNote = () => {
		this.setState({
			notes: this.state.notes.concat([{
				id: uuid.v4(),
				task: 'New Task'
			}])
		});
	}
	deleteNote = (id, e) => {
		// Avoid bubbling to edit
		e.stopPropagation();
		this.setState({
			notes: this.state.notes.filter(note => note.id !==id)
		});
	}
	activateNoteEdit = (id) => {
		this.setState({
			notes: this.state.notes.map(note => {
				if(note.id===id){
					note.editing = true;
				}
				return note
			})
		});
	}
	editNote = (id, task) => {
		console.log(this.state.notes);
		this.setState({
			notes: this.state.notes.map(note => {
				if(note.id===id){
					note.editing = false;
					note.task = task;
				}
				return note;
			})
		});
	}
	render(){
		const {notes} = this.props;
		return(
			<div>
				<button 
					className="add-note"
					onClick={this.addNote}
				>
					+
				</button>
				<Notes 
					notes={notes} 
					onNoteClick={this.activateNoteEdit}
					onEdit={this.editNote}
					onDelete={this.deleteNote} 
				/>
			</div>
		)		
	}
}

// export default App;

export default connect(({notes}) => ({
	notes
}),{
	NoteActions
})(App);
