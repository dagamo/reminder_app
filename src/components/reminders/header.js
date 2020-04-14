import React from 'react';
import { Grid, Box } from '@material-ui/core';
import moment from 'moment';

const reminderHeader = (props) => {
	const { date, setOpen, setIsEdit, setChecked, remove, onClick } = props;
	const monthString = moment(date, 'YYYY-MM-DD').format('MMMM DD, YYYY');

	return (
		<Grid item md={12}>
			<Grid item md={12} className="reminderHeader">
				<Box
					className="button-close"
					onClick={() => {
						onClick();
					}}
				>
					Close
				</Box>
				<Box
					className="button-remove"
					onClick={() => {
						remove();
					}}
				>
					Remove
				</Box>
				<Box component="span">{monthString}</Box>
				<Box
					className="button-create"
					onClick={() => {
						setOpen(true);
						setChecked({});
					}}
				>
					New
				</Box>
				<Box
					className="button-edit"
					onClick={() => {
						setOpen(true);
						setIsEdit(true);
					}}
				>
					Edit
				</Box>
				
			</Grid>
		</Grid>
	);
};

export default reminderHeader;
