import React from 'react';
import { Grid, Box } from '@material-ui/core';
import moment from 'moment';

const reminderHeader = (props) => {
	const { date, setOpen } = props;
  const monthString = moment(date, 'YYYY-MM-DD').format('MMMM DD, YYYY');
  
	return (
		<Grid item md={12}>
			<Grid item md={12} className="calendarHeader">
				<Box component="span">{monthString}</Box>
        <Box className="button-create" onClick={()=>setOpen(true)}> New Reminder</Box>
			</Grid>
		</Grid>
	);
};

export default reminderHeader;
