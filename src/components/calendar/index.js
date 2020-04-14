import React from 'react';
import { connect } from 'react-redux';
import { Container, Grid } from '@material-ui/core';
import './../../styles/ui/calendar.css';
//components
import Header from './header';
import Body from './body';
//actions
import { setMonthDay } from './../../actions/calendar';
//hooks
import { useGetMonthDays } from './../../hooks/useGetMonthDays';

const Calendar = (props) => {
	const { years, _setMonthDays, date } = props;
	let payloadMonth = useGetMonthDays({ date, years, _setMonthDays });

	payloadMonth = {
		...payloadMonth,
		...props
	};

	return (
		<Container maxWidth="xl" className="calendarContainer">
			<Grid container>
				<Grid item xs={12} md={12}>
					<Header date={date} />
				</Grid>
				<Grid item xs={12} md={12}>
					<Body {...payloadMonth} date={date}/>
				</Grid>
			</Grid>
		</Container>
	);
};

const mapStateToProps = (state) => {
	let { calendar: { years, dateSelected: date } } = state;
	return {
		years,
		date
	};
};

const mapDispatchToProps = (dispatch) => ({
	_setMonthDays: (date) => {
		dispatch(setMonthDay(date));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
