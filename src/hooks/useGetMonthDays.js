import { useEffect, useState } from 'react';
import moment from 'moment';

//utils
import { verifyMonth } from './../util/verifyMonth';

export const useGetMonthDays = (props) => {
	const [ days, setDay ] = useState([]);
	const { date, years, _setMonthDays } = props;
	const year = moment(date).year();
	const month = moment(date).month() + 1;
	useEffect(
		() => {
			if (!verifyMonth(years, year, month)) {
				_setMonthDays(date);
			} else {
				console.log('ya existe');
				setDay(years[year][month].days);
			}
		},
		[ date ]
	);
	return {
		year,
		month,
		days
	};
};
