import React from 'react';

const connect = (state, actions) => {
	if(typeof state==='function' ||
		(typeof state==='object' && Object.keys(state).length)){
		return target => connects(state, actions, target);
	}
	return target => props => (
		<target {...Object.assign({}, props, actions)} />
	);
}

// Connect to Alt through context. (Not optimised as coded here)
// If Alt store changes, it will force render.
// See "AltContainer" and "connect-alt" for optimised solutions
function connects(state = () => {}, actions = {}, target){
	class Connect extends React.Component{
		componentDidMount(){
			const {flux} = this.context;
			flux.FinalStore.listen(this.handleChange);
		}
		componentWillUnmount(){
			const {flux} = this.context;
			flux.FinalStore.unlisten(this.handleChange);
		}
		handleChange = () => {
			this.forceUpdate();
		}
		render(){
			const {flux}  = this.context;
			const stores = flux.stores;
			const composedStores = composeStores(stores);
			return React.createElement(target,
			{
				...Object.assign(
					{}, this.props, state(composedStores), actions
				)
			});
		}
	}
	Connect.contextTypes = {
		flux: React.PropTypes.object.isRequired
	}
	return Connect;
}

// Transform {store: <AltStore>} to {<store>: store.getState()}
function composeStores(stores){
	let ret = {};
	Object.keys(stores).forEach(k => {
		const store = stores[k];

		// Combine store state
		ret = Object.assign({}, ret, store.getState());
	});
	return ret;
}

export default connect;