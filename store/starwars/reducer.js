export const FETCH = 'starwars/FETCH';
export const FETCH_SUCCESS = 'starwars/FETCH_SUCCESS';
export const FETCH_FAIL = 'starwars/FETCH_FAIL';

const initialState = {
	fetched: false,
	data: null,
	error: null,
	fetching: false
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case FETCH:
			return {
				...state,
				fetching: true
			};
		case FETCH_SUCCESS:
			console.log(action.payload.data)
			return {
				...state,
				fetching: false,
				fetched: true,
				data: action.payload.data,
				error: null
			};
		case FETCH_FAIL:
			return {
				...state,
				fetching: false,
				fetched: false,
				data: null,
				error: action.payload
			};
		default:
			return state;
	}
};

export function fetchData() {
	return {
		types: [FETCH, FETCH_SUCCESS, FETCH_FAIL],
		payload: {
			request: {
				url: '/people/1',
				method: 'get'
			}
		}
	};
}