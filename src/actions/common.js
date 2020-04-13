import { UPDATE_GENERAL_PARAM } from './../constants/actionTypes';

export const updateGeneralParam = (key, value, red_name) => {
	return (dispatch) => {
		dispatch({ type: UPDATE_GENERAL_PARAM, key, value, red_name });
	};
};
