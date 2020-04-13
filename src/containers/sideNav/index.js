import React from 'react';
import { connect } from 'react-redux';
import { Box } from '@material-ui/core';
import Drawer from './../../components/drawer/index';
import moment from 'moment';
//styles
import './../../styles/ui/sideNav.css';
//utils
import { months } from './../../util/monthsList';
//images
import leftIcon from './../../assets/images/left@2x.png';
import rightIcon from './../../assets/images/right@2x.png';
//actions
import { updateGeneralParam } from './../../actions/common';

const SideNav = (props) => {
	const { date, updateGeneralParam } = props;

	const changeYear = (year) => {
		const month = moment(date).month() + 1;
		updateGeneralParam('dateSelected', `${year}-${month}-01`, 'calendar');
	};

	const changeMonth = (month)=>{
		const year = moment(date).year();
		updateGeneralParam('dateSelected', `${year}-0${month.id}-01`, 'calendar');
	}
	/*
  HeaderContent component for the drawer.
*/
	const HeaderContent = () => {
		//Get the current year of type string
		let year = moment(date).format('YYYY');
		year = Number(year);
		return (
			<div className="drawerHeader">
				<Box
					component="span"
					onClick={() => {
						changeYear(year - 1);
					}}
				>
					<img src={leftIcon} width={'35px'} alt="left" />
				</Box>
				<Box component="span" className="yearText">
					{year}
				</Box>
				<Box
					component="span"
					onClick={() => {
						console.log('onclick')
						changeYear(year + 1);
					}}
				>
					<img src={rightIcon} width={'35px'} alt="right" />
				</Box>
			</div>
		);
	};

	return <Drawer items={months} headerContent={HeaderContent} actionItem={changeMonth} />;
};

const mapStateToProps = (state) => {
	const { calendar: { dateSelected: date } } = state;
	return {
		date
	};
};

const mapDispatchToProps = { updateGeneralParam };

export default connect(mapStateToProps, mapDispatchToProps)(SideNav);
