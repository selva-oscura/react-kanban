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
			lanes: this.lanes.concat(lane);
		});
	}
}

export default LaneStore;