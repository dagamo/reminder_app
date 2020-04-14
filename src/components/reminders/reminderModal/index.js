import React, { useState, forwardRef, useEffect } from 'react';
import {
	Button,
	Dialog,
	DialogActions,
	TextField,
	DialogContent,
	DialogTitle,
	Slide,
	TextareaAutosize,
	Box
} from '@material-ui/core';
import moment from 'moment';
import MomentUtils from '@date-io/moment';
import { KeyboardTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { NotificationManager } from 'react-notifications';

const Transition = forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});
const colors = [ '#FFF1A3', '#EB848E', '#89E8CC', '#C278FF' ];

export default function AlertDialogSlide(props) {
	const { open, setOpen, date, createReminder, checked, isEdit, setIsEdit } = props;
	const [ selectedDate, setSelectedDate ] = useState(new Date(moment(date).format('YYYY-MM-DDTHH:mm:ss')));
	const [ reminder, setReminder ] = useState('');
	const [ city, setCity ] = useState('');
	const [ color, setColor ] = useState('#FFF1A3');

	useEffect(
		() => {
			if (isEdit) {
				setReminder(checked.reminder);
				setSelectedDate(new Date(moment(checked.date).format('YYYY-MM-DDTHH:mm:ss')));
				setCity(checked.city);
				setColor(checked.color);
			} else {
				setReminder('');
				setCity('');
				setColor('#FFF1A3');
			}
		},
		[ open ]
	);

	const handleDateChange = (date) => {
		console.log('date', date);
		setSelectedDate(date._d);
	};

	const handleReminerChange = (text) => {
		if (text.length < 31) {
			return setReminder(text);
		}
		return NotificationManager.warning('The limit of characteres is 30');
	};

	const handleCloseModal = () => {
		if (isEdit) {
			setIsEdit(false);
		}
		setOpen(false);
	};

	const handleCreateReminder = () => {
		const params = {
			id: isEdit ? checked.id: null,
			date: moment(selectedDate).format('YYYY-MM-DDTHH:mm:ss'),
			city,
			reminder,
			color,
			isEdit
		};
		if (reminder.trim() === '' || city.trim() === '') {
			return NotificationManager.warning('Fill the fields');
		}
		if (isEdit) {
			setIsEdit(false);
		}
		createReminder(params);
		setOpen(false);
	};

	return (
		<div>
			<Dialog
				open={open}
				TransitionComponent={Transition}
				keepMounted
				onClose={() => handleCloseModal()}
				aria-labelledby="alert-dialog-slide-title"
				aria-describedby="alert-dialog-slide-description"
			>
				<DialogTitle id="alert-dialog-slide-title">{'Create a Reminer'}</DialogTitle>
				<DialogContent>
					<MuiPickersUtilsProvider utils={MomentUtils}>
						<KeyboardTimePicker
							margin="normal"
							id="time-picker"
							label="Add the reminder time"
							value={selectedDate}
							onChange={handleDateChange}
							KeyboardButtonProps={{
								'aria-label': 'change time'
							}}
						/>
					</MuiPickersUtilsProvider>
					<TextareaAutosize
						aria-label="maximum height"
						style={{ width: '100%', height: 200 }}
						placeholder="Enter your reminder"
						value={reminder}
						onChange={({ target: { value } }) => {
							handleReminerChange(value);
						}}
					/>
					<TextField
						autoFocus
						margin="dense"
						id="name"
						label="City"
						type="text"
						value={city}
						fullWidth
						onChange={({ target: { value } }) => setCity(value)}
					/>
					<Box>
						Select any color
						<Box className="badgesContainer">
							{colors.map((c) => (
								<Box
									onClick={() => setColor(c)}
									className={`badges ${color === c && 'selectedBadge'}`}
									style={{ backgroundColor: c }}
								/>
							))}
						</Box>
					</Box>
				</DialogContent>
				<DialogActions>
					<Button onClick={() => handleCreateReminder()} color="primary">
						Save
					</Button>
					<Button onClick={() => handleCloseModal()} color="primary">
						Cancel
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}
