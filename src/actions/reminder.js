import { SELECT_DAY, FETCH_ERROR, FETCH_START, CREATE_REMINDER } from './../constants/actionTypes';
import axios from './../util/WatherApi';
import { WEATHER_KEY } from './../constants/wheater';

export const selectDay = (date) => {
	return (dispatch) => {
		dispatch({ type: SELECT_DAY, date });
	};
};

export const createReminder = (params) => {
	return (dispatch) => {
		dispatch({ type: FETCH_START });
		axios
			.get(`weather?q=${params.city}&appid=${WEATHER_KEY}`)
			.then(({ data }) => {
				params = {
					...params,
					city: data.name,
					temp: data.main.temp
				};
				dispatch({ type: CREATE_REMINDER, params });
			})
			.catch(function(error) {
				dispatch({ type: FETCH_ERROR, hasMessage: true, message: error });
			});
	};
};
