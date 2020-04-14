import React from 'react';
import { Grid, Box } from '@material-ui/core';
import moment from 'moment';

const reminderHeader = (props) => {
	const { date } = props;
	const monthString = moment(date).format('MMMM d, YYYY');
	return (
		<Grid item md={12}>
			<Grid item md={12} className="calendarHeader">
				<Box component="span">{monthString}</Box>
        <Box className="button-create"> New Reminder</Box>
			</Grid>
		</Grid>
	);
};

export default reminderHeader;
