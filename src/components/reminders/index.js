import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Box } from '@material-ui/core';
import moment from 'moment';
//styles
import './../../styles/ui/reminder.css';
//components
import Header from './header';
import ReminderModal from './reminderModal/index';
//actions
import { createReminder } from './../../actions/reminder';

const Reminders = (props) => {
	const { date, onClick, createReminder, reminders } = props;
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
			<Box style={{ backgroundColor: 'red' }} onClick={() => onClick()}>
				Cerrar
			</Box>
			<Box className="reminContainer">
				{reminders.map((rem) => {
					let time = moment(rem.date).format('HH:mm a');
					time = time == '00:00 am' ? '12:00 am' : time;
					return (
						<Box className="reminderCard" style={{ backgroundColor: rem.color }}>
							<Box className="reminderTitle">{time}</Box>
							<Box className="reminderText">{rem.reminder}</Box>
							<Box className="cityContainer">
								<Box className="reminderCity">{rem.city}</Box>
								<Box>{rem.temp}</Box>
							</Box>
						</Box>
					);
				})}
			</Box>
		</Box>
	);
};

const mapStateToProps = (state) => {
	const { calendar: { dateSelected: date }, reminder: { reminders } } = state;
	return {
		date,
		reminders
	};
};
const mapDispatchToProps = { createReminder };
export default connect(mapStateToProps, mapDispatchToProps)(Reminders);
