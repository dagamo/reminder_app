import React, { useEffect, useState } from 'react';
import { Container, Grid, Box } from '@material-ui/core';
import './../../styles/ui/calendar.css';
import moment from 'moment';
//components
import Header from './header';
import Body from './body';

const Calendar = (props) => {
	const [ date, setDate ] = useState(moment('2020-01-01').format('YYYY-MM-DD'));
	const [ days, setDay ] = useState([]);

	useEffect(() => {
		let days = [];
		let daysNumber = moment(date).daysInMonth();
		let monthStartDay = moment(date).startOf('month').format('d');
		let monthOfDay = moment(date).endOf('month').format('d');
		let previusMonth = moment(date).month();
		let currentYear = moment(date).year();
		monthStartDay = Number(monthStartDay) - 1;
		monthOfDay = Number(monthOfDay) + 1;
		previusMonth = Number(previusMonth);
		previusMonth = previusMonth === 0 ? 12 : previusMonth;
		currentYear = previusMonth === 12 ? Number(currentYear) - 1 : currentYear;

		let previusMonthDays = moment(`${currentYear}-${previusMonth}-01`).daysInMonth();

		if (monthStartDay > 0) {
			for (let p = monthStartDay; p >= 0; p--) {
				// console.log('aqui entro', monthStartDay + 1);
				days = [ ...days, previusMonthDays - p ];
			}
		}
		for (let i = 1; i <= Number(daysNumber); i++) {
			days = [ ...days, i ];
		}

		if (monthOfDay !== 6) {
			for (let n = monthOfDay, o = 1; n <= 6; n++, o++) {
				days = [ ...days, o ];
			}
		}
		setDay(days);
	}, []);

	const bodyProps = {
		daysNumber: moment().daysInMonth(),
		startOfWeek: moment().startOf('month').format('ddd'),
		days: days
	};

	return (
		<Container maxWidth="xl" className="calendarContainer">
			<Grid container>
				<Header />
				<Body {...bodyProps} />
			</Grid>
		</Container>
	);
};

export default Calendar;
