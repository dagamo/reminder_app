import React from 'react';
import { connect } from 'react-redux';
import { Box } from '@material-ui/core';
//styles
import './../../styles/ui/reminder.css';
import Header from './header';

const Reminders = (props) => {
	const { date } = props;
	return (
		<Box onClick={() => props.onClick()}>
			<Header date={date} />
		</Box>
	);
};

const mapStateToProps = (state) => {
	const { calendar: { dateSelected: date } } = state;
	return {
		date
	};
};
export default connect(mapStateToProps)(Reminders);
