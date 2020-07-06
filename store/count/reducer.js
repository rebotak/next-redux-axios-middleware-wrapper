import { countActionTypes } from './action'

const countInitialState = {
	count: 0,
}

export default function reducer(state = countInitialState, action) {
	switch (action.type) {
		case countActionTypes.ADD:
			return {
				...state,
				count: state.count + action.payload,
			}
		default:
			return state
	}
}
