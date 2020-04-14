import React from 'react';
import { connect } from 'react-redux';
import { Box } from '@material-ui/core';
import { selectDay } from './../../actions/reminder';

const Body = (props) => {
	const { days, selectDay, onClick } = props;
	return (
		<Box className="containerDays">
			{days.map((day, i) => (
				<Box
					key={i}
					onClick={() => {
						if (day.month && day.year) {
							let date = `${day.year}-${day.month}-${day.dayNumber}`;
							selectDay(date);
							onClick()
						}
					}}
				>
					<Box component="span">{day.dayNumber}</Box>
				</Box>
			))}
		</Box>
	);
};

const mapDispatchToProps = { selectDay };
export default connect(null, mapDispatchToProps)(Body);
