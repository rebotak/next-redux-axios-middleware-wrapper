import { createStore, applyMiddleware, combineReducers } from 'redux'
import { HYDRATE, createWrapper } from 'next-redux-wrapper'
import thunkMiddleware from 'redux-thunk'
import count from './count/reducer'
import tick from './tick/reducer'
import starwars from './starwars/reducer'
import axiosMiddleware from 'redux-axios-middleware';
import axios from 'axios'

const client = axios.create({
	baseURL: `https://swapi.dev/api`,
	responseType: 'json'
});

const bindMiddleware = (middleware) => {
	if (process.env.NODE_ENV !== 'production') {
		const { composeWithDevTools } = require('redux-devtools-extension')
		return composeWithDevTools(applyMiddleware(
			...middleware, axiosMiddleware(client)))
	}
	return applyMiddleware(...middleware)
}

const combinedReducer = combineReducers({
	starwars,
	count,
	tick,
})

const reducer = (state, action) => {
	if (action.type === HYDRATE) {
		const nextState = {
			...state, // use previous state
			...action.payload, // apply delta from hydration
		}
		if (state.count) nextState.count = state.count // preserve count value on client side navigation
		return nextState
	} else {
		return combinedReducer(state, action)
	}
}

const initStore = () => {
	return createStore(reducer, bindMiddleware([thunkMiddleware]))
}

export const wrapper = createWrapper(initStore)
