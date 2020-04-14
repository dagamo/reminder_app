import { SELECT_DAY } from './../constants/actionTypes';

export const selectDay = (date) => {
	return (dispatch) => {
		dispatch({ type: SELECT_DAY, date });
	};
};
