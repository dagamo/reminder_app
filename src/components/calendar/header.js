import React from 'react';
import { Grid, Box } from '@material-ui/core';
import { days } from './../../constants/stringDays';
import moment from 'moment';

const calendarHeader = (props) => {
	const { date } = props;
	const monthString = moment(date).format('MMMM');
	return (
		<Grid item md={12}>
			<Grid item md={12} className="calendarHeader">
				<Box component="span">{monthString}</Box>
			</Grid>
			<Grid container >
				{days.map((day, i) => (
					<Box key={i} className="dayContainer">
						{day}
					</Box>
				))}
			</Grid>
		</Grid>
	);
};

export default calendarHeader;
