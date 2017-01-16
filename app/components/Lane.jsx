import React from 'react';
import {compose} from 'redux';
import {DropTarget} from 'react-dnd';
import ItemTypes from '../constants/itemTypes';
import connect from '../libs/connect';
import NoteActions from '../actions/NoteActions';
import LaneActions from '../actions/LaneActions';
import Notes from './Notes';
import LaneHeader from './LaneHeader';

const Lane = ({
	connectDropTarget, lane, notes, LaneActions, NoteActions, ...props
}) => {
	const activateNoteEdit = (id) => {
		console.log('click?', id)
		NoteActions.update({id, editing: true});
	}
	const editNote = (id, task) => {
		NoteActions.update({id, task, editing: false});
	}
	const deleteNote = (noteId, e) => {
		// Avoid bubbling to edit
		e.stopPropagation();
		LaneActions.detachFromLane({
			laneId: lane.id,
			noteId
		});
		NoteActions.delete(noteId);
	}

	return connectDropTarget(
		<div {...props}>
			<LaneHeader lane={lane} />
			<Notes 
				notes={selectNotesByIds(notes, lane.notes)} 
				onNoteClick={activateNoteEdit}
				onEdit={editNote}
				onDelete={deleteNote} 
			/>
		</div>
	);
};

const noteTarget = {
	hover(targetProps, monitor){
		const sourceProps = monitor.getItem();
		const sourceId = sourceProps.id;
		// If target lane doesn't have notes, attach note
		if(!targetProps.lane.notes.length){
			LaneActions.attachToLane({
				laneId: targetProps.lane.id,
				noteId: sourceId
			});
		}
	}
};

function selectNotesByIds(allNotes, noteIds=[]){
	return noteIds.reduce((notes, id) => 
		notes.concat(
			allNotes.filter(note => note.id===id)
		)
	, []);
}

export default compose(
	DropTarget(ItemTypes.NOTE, noteTarget, connect => ({
		connectDropTarget: connect.dropTarget()
	})),
	connect(
		({notes}) => ({
			notes
		}), {
			NoteActions,
			LaneActions
		})
)(Lane);