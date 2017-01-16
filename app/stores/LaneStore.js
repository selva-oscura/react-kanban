import LaneActions from '../actions/LaneActions';

class LaneStore{
	constructor(){
		this.bindActions(LaneActions);
		this.lanes=[];
	}
	create(lane){
		// if notes aren't provided for some reason, default to empty array
		lane.notes = lane.notes || [];
		this.setState({
			lanes: this.lanes.concat(lane),
		});
	}
	update(updatedLane){
		this.setState({
			lanes: this.lanes.map(lane =>{
				if(lane.id===updatedLane.id){
					return Object.assign({}, lane, updatedLane);
				}
				return lane;
			})
		});
	}
	delete(id){
		this.setState({
			lanes: this.lanes.filter(lane => lane.id!==id)
		});
	}
	attachToLane({laneId, noteId}){
		this.setState({
			lanes: this.lanes.map(lane => {
				if(lane.notes.includes(noteId)){
					lane.notes = lane.notes.filter(note => note!==noteId);
				}
				if(lane.id===laneId){
					lane.notes = lane.notes.concat([noteId]);
				}
				return lane;
			})
		});
	}
	detachFromLane({laneId, noteId}){
		this.setState({
			lanes: this.lanes.map(lane => {
				if(lane.id === laneId){
					lane.notes = lane.notes.filter(note => note!==noteId);
				}
				return lane;
			})
		});
	}
	move({sourceId, targetId}){
		console.log(`source: ${sourceId}, target: ${targetId}`);
	}
}

export default LaneStore;