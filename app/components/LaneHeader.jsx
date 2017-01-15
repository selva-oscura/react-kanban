import React from 'react';
import uuid from 'uuid';
import connect from '../libs/connect';
import NoteActions from '../actions/NoteActions';
import LaneActions from '../actions/LaneActions';

const LaneHeader = ({
	lane, notes, LaneActions, NoteActions, ...props
}) => {
	const addNote = (e) => {
		e.stopPropagation();
		const noteId = uuid.v4();
		NoteActions.create({
			id: noteId,
			task: 'New Task',
		});
		LaneActions.attachToLane({
			laneId: lane.id,
			noteId
		})
	};
	return (
		<div className="lane-header">
			<div className="lane-add-note">
				<button onClick={addNote}>
					+
				</button>
			</div>
			<div className="lane-name">{lane.name}</div>
		</div>
	);
};

export default connect(
	({notes}) => ({
		notes
	}), {
		NoteActions,
		LaneActions
	}
)(LaneHeader);