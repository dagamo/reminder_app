import { useEffect, useState } from 'react';
import moment from 'moment';

//utils
import { verifyMonth } from './../util/verifyMonth';

export const useGetMonthDays = (props) => {
	const [ days, setDay ] = useState([]);
	const { date, years, _setMonthDays } = props;
	const year = moment(date).year();
	const month = moment(date).month() + 1;
/*
	Create the hook personalized.
	1) Verify if the month exists in the reducer.
	2) if its not exists, it calls to the actio for generate the days.
	3) if exists call the month and return the days of the month
*/
	useEffect(
		() => {
			if (!verifyMonth(years, year, month)) {
				_setMonthDays(date);
			} else {
				setDay(years[year][month].days);
			}
		},
		[ date, years ]
	);

	return {
		year,
		month,
		days
	};
};
