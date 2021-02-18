const ADD = 'count/ADD'

const initialState = {
	count: 1,
}

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case ADD:
			return {
				...state,
				count: state.count + action.payload,
			}
		default:
			return state
	}
}

export const addCount = (val) => (dispatch) => dispatch(
	{
		type: ADD,
		payload: val
	})