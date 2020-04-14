import { SELECT_DAY, UPDATE_GENERAL_PARAM, CREATE_REMINDER } from './../constants/actionTypes';
const init = {
	reminders: []
};

export const reminder = (state = init, action) => {
	switch (action.type) {
		case SELECT_DAY: {
			return {
				...state,
				openReminders: true
			};
		}
		case CREATE_REMINDER: {
			return {
				...state,
				reminders: [ ...state.reminders, action.params ]
			};
		}
		case UPDATE_GENERAL_PARAM: {
			const { key, value, red_name } = action;
			let copyState = { ...state };
			if (red_name === 'reminder') {
				copyState = {
					...copyState,
					[key]: value
				};
			}
			return copyState;
		}
		default:
			return state;
	}
};
