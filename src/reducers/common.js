import { FETCH_SUCCESS, FETCH_START, FETCH_ERROR } from './../constants/actionTypes';
const commonState = {
	isLoading: false,
	hasMessage: false,
	message: '',
	type: '',
	component: ''
};

export const common = (state = commonState, action) => {
	switch (action.type) {
		case FETCH_SUCCESS: {
			return {
				...state,
				isLoading: false,
				hasMessage: action.hasMessage,
				message: action.message,
				component: action.component,
				type: 'success'
			};
		}

		case FETCH_ERROR: {
			return {
				...state,
				isLoading: false,
				hasMessage: action.hasMessage,
				message: action.message,
				component: action.component ? action.component : '',
				type: 'error'
			};
		}
		case FETCH_START: {
			return {
				...state,
				isLoading: true,
				component: action.component ? action.component : ''
			};
		}
		default:
			return state;
	}
};
