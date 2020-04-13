import { SET_MONTH_DAYS } from './../constants/actionTypes';

export const setMonthDay = (date) => {
	return (dispatch) => {
		dispatch({ type: SET_MONTH_DAYS, date });
	};
};
