import React from 'react';
import { connect } from 'react-redux';
import { Box } from '@material-ui/core';
import moment from 'moment';
import { selectDay } from './../../actions/reminder';

let daysName = {
	sun: { day: 'sun', color: '#4254D2' },
	mon: { day: 'mon', color: '#8A8A8A' },
	tue: { day: 'tue', color: '#8A8A8A' },
	wed: { day: 'wed', color: '#8A8A8A' },
	thu: { day: 'thu', color: '#8A8A8A' },
	fri: { day: 'fri', color: '#8A8A8A' },
	sat: { day: 'sat', color: '#4254D2' }
};

const Body = (props) => {
	const { days, selectDay, onClick, date } = props;
	const month = moment(date).month() + 1;

	const handleSelectDay = (day) => {
		if (day.month && day.year) {
			let date = `${day.year}-${day.month}-${day.dayNumber}`;
			if (day.month === month) {
				selectDay(date);
				onClick();
			} else {
				selectDay(date);
			}
		}
	};
	return (
		<Box className="containerDays">
			{days.map((day, i) => {
				const color = day.hasReminder ? '#FFF' : day.month === month ? daysName[day.dayText].color : '#C2C2C2';
				let styles = {
					backgroundColor: day.hasReminder ? '#EB848E' : 'transparent',
					color
				};
				return (
					<Box
						key={i}
						onClick={() => {
							handleSelectDay(day);
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
