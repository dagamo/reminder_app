import { SELECT_DAY, UPDATE_GENERAL_PARAM, CREATE_REMINDER, REMOVE_REMINDER } from './../constants/actionTypes';
const init = {
	reminders: [],
	count: 0
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
			let copyReminders = [ ...state.reminders ];
			let { params } = action;
			let count = state.count;
			if (params.isEdit) {
				let findIndex = copyReminders.findIndex((r) => r.id === params.id);
				// delete params.isEdit
				if (findIndex !== -1) {
					console.log('y aqui');
					copyReminders[findIndex] = {
						...params
					};
				}
			} else {
				copyReminders = [
					...state.reminders,
					{
						...params,
						id: state.count
					}
				];
				count += 1;
			}
			return {
				...state,
				reminders: [ ...copyReminders ],
				count
			};
		}
		case REMOVE_REMINDER: {
			let newReminders = state.reminders.filter((r) => r.id !== action.id);
			return {
				...state,
				reminders: [ ...newReminders ]
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
