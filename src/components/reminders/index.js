import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Box } from '@material-ui/core';
//styles
import './../../styles/ui/reminder.css';
//components
import Header from './header';
import ReminderModal from './reminderModal/index';

const Reminders = (props) => {
	const { date, onClick } = props;
	const [ openModal, setOpen ] = useState(false);
	return (
		<Box>
			<ReminderModal open={openModal} setOpen={setOpen} date={date} />
			<Header date={date} setOpen={setOpen} />
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
