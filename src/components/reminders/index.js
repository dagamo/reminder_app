import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Box } from '@material-ui/core';
//styles
import './../../styles/ui/reminder.css';
//components
import Header from './header';
import ReminderModal from './reminderModal/index';
//actions
import { createReminder } from './../../actions/reminder';

const Reminders = (props) => {
	const { date, onClick, createReminder } = props;
	const [ openModal, setOpen ] = useState(false);

	const modalProps = {
		open: openModal,
		setOpen,
		date,
		createReminder
	};
	return (
		<Box>
			<ReminderModal {...modalProps} />
			
			<Header date={date} setOpen={setOpen} />
			<Box style={{backgroundColor:'red'}} onClick={()=>onClick()}>Cerrar</Box>
		</Box>
	);
};

const mapStateToProps = (state) => {
	const { calendar: { dateSelected: date } } = state;
	return {
		date
	};
};
const mapDispatchToProps = { createReminder };
export default connect(mapStateToProps, mapDispatchToProps)(Reminders);
