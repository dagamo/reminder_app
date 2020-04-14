import React from 'react';
import { connect } from 'react-redux';
import { Box } from '@material-ui/core';
import { selectDay } from './../../actions/reminder';

const Body = (props) => {
	const { days, selectDay, onClick } = props;
	return (
		<Box className="containerDays">
			{days.map((day, i) => {
				let styles = {
					backgroundColor: day.hasReminder ? '#EB848E' : 'transparent',
					color: day.hasReminder ? '#FFF' : '#8A8A8A',
				};
				return (
					<Box
						key={i}
						onClick={() => {
							if (day.month && day.year) {
								let date = `${day.year}-${day.month}-${day.dayNumber}`;
								selectDay(date);
								onClick();
							}
						}}
					>
						<Box style={styles}>{day.dayNumber}</Box>
					</Box>
				);
			})}
		</Box>
	);
};

const mapDispatchToProps = { selectDay };
export default connect(null, mapDispatchToProps)(Body);
