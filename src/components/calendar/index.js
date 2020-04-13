import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Container, Grid, Box } from '@material-ui/core';
import './../../styles/ui/calendar.css';
import moment from 'moment';
//components
import Header from './header';
import Body from './body';
//actions
import { setMonthDay } from './../../actions/calendar';
//hooks
import { useGetMonthDays } from './../../hooks/useGetMonthDays';

const Calendar = (props) => {
	const { years, _setMonthDays } = props;
	const [ date, setDate ] = useState(moment('2020-01-01').format('YYYY-MM-DD'));
	const payloadMonth = useGetMonthDays({ date, years, _setMonthDays });

	return (
		<Container maxWidth="xl" className="calendarContainer">
			<Grid container>
				<Header />
				<Body {...payloadMonth} />
			</Grid>
		</Container>
	);
};

const mapStateToProps = (state) => {
	let { calendar: { years } } = state;
	return {
		years
	};
};

const mapDispatchToProps = (dispatch) => ({
	_setMonthDays: (date) => {
		dispatch(setMonthDay(date));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
