import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Box, Checkbox} from '@material-ui/core';
import moment from 'moment';
import { NotificationManager } from 'react-notifications';
//styles
import './../../styles/ui/reminder.css';
//components
import Header from './header';
import ReminderModal from './reminderModal/index';
//actions
import { createReminder, removeReminder } from './../../actions/reminder';

const Reminders = (props) => {
	const { date, onClick, createReminder, reminders, removeReminder } = props;
	const [ openModal, setOpen ] = useState(false);
	const [ isEdit, setIsEdit ] = useState(false);
	const [ checked, setChecked ] = useState({});

	const modalProps = {
		open: openModal,
		setOpen,
		checked,
		date,
		createReminder,
		setIsEdit,
		isEdit
	};

	const _removeReminder = () => {
		if (Object.keys(checked).length !== 0) {
			removeReminder(checked.id);
		} else {
			NotificationManager.warning('Select a reminder');
		}
	};

	const checkDay = (day)=>{
 if(day.id === checked.id){
	setChecked({})
 }else{
	setChecked(day)
 }
	}

	return (
		<Box>
			<ReminderModal {...modalProps} />
			<Header
				date={date}
				setOpen={setOpen}
				setIsEdit={setIsEdit}
				setChecked={setChecked}
				remove={_removeReminder}
				onClick={onClick}
			/>
			<Box className="reminContainer">
				{reminders.map((rem, i) => {
					let time = moment(rem.date).format('HH:mm a');
					time = time === '00:00 am' ? '12:00 am' : time;
					return (
						<Box className="reminderCard" key={i} style={{ backgroundColor: rem.color }}>
							<Checkbox
								checked={checked.id === rem.id ? true : false}
								color="primary"
								inputProps={{ 'aria-label': 'secondary checkbox' }}
								onClick={()=>checkDay(rem)}
							/>
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
const mapDispatchToProps = { createReminder, removeReminder };
export default connect(mapStateToProps, mapDispatchToProps)(Reminders);
