import { SELECT_DAY, FETCH_ERROR, FETCH_START, CREATE_REMINDER, REMOVE_REMINDER } from './../constants/actionTypes';
import axios from './../util/WatherApi';
import {f_to_c} from './../util/convertions'
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
				let celcius = f_to_c(data.main.humidity)
				params = {
					...params,
					city: data.name,
					temp: `${celcius} °C`,
					weather:data.weather && data.weather[0] ? data.weather[0].main : ''
				};
				dispatch({ type: CREATE_REMINDER, params });
			})
			.catch(function(error) {
				dispatch({ type: FETCH_ERROR, hasMessage: true, message: error });
			});
	};
};

export const removeReminder = (id) => {
	return (dispatch) => {
		dispatch({ type: REMOVE_REMINDER, id });
		
	};
};
