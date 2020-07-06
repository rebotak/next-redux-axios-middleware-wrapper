export const countActionTypes = {
	ADD: 'ADD',
}

export const addCount = (val) => (dispatch) => dispatch(
	{
		type: countActionTypes.ADD,
		payload: val
	})