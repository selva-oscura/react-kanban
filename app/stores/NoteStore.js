import uuid from 'uuid';
import NoteActions from '../actions/NoteActions';

class NoteStore{
	constructor(){
		this.bindActions(NoteActions);
		this.notes = [
			{
				id: uuid.v4(),
				task: 'Learn React'
			},
			{
				id: uuid.v4(),
				task: 'Do laundry'
			}
		];
	}
	create(note){
		this.setState({
			notes: this.notes.concat(note)
		});
	}
	update(updatedNote){
		console.log('update note', updatedNote);
	}
	delete(id){
		console.log('delete note', id)
		this.setState({
			notes: this.notes.filter(note => note.id !== id)
		});
	}
}

export default NoteStore;