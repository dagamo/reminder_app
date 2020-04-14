import React, { useState, forwardRef } from 'react';
import {
	Button,
	Dialog,
	DialogActions,
	TextField,
	DialogContent,
	DialogTitle,
	Slide,
	TextareaAutosize
} from '@material-ui/core';
import moment from 'moment';
import MomentUtils from '@date-io/moment';
import { KeyboardTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { NotificationManager } from 'react-notifications';

const Transition = forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide(props) {
	const { open, setOpen, date } = props;
	const [ selectedDate, setSelectedDate ] = useState(new Date(moment(date).format('YYYY-MM-DDTHH:mm:ss')));
	const [ reminder, setReminder ] = useState('');
	const [ city, setCity ] = useState('');

	const handleDateChange = (date) => {
		console.log('date', date);
		setSelectedDate(date);
	};

	const handleReminerChange = (text) => {
		if (text.length < 31) {
			return setReminder(text);
		}
		return NotificationManager.warning('The limit of characteres is 30');
	};

	return (
		<div>
			<Dialog
				open={open}
				TransitionComponent={Transition}
				keepMounted
				onClose={() => setOpen(false)}
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
						fullWidth
						onChange={({ target: { value } }) => setCity(value)}
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={() => setOpen(false)} color="primary">
						Save
					</Button>
					<Button onClick={() => setOpen(false)} color="primary">
						Cancel
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}
