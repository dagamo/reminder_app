import React from 'react';
import { Grid, Box } from '@material-ui/core';
import { days } from './../../constants/stringDays';

const calendarHeader = () => {
	return (
		<Grid item md={12}>
			<Grid item md={12} className="calendarHeader">
				<Box component="span">JANUARY</Box>
			</Grid>
			<Grid container md={12}>
				{days.map((day, i) => (
					<Box key={i} className='dayContainer'>
						{day}
					</Box>
				))}
			</Grid>
		</Grid>
	);
};

export default calendarHeader;
