import React from 'react';
import { Box } from '@material-ui/core';
import Drawer from './../../components/drawer/index';
import moment from 'moment';
//utils
import { months } from './../../util/monthsList';
//images
import leftIcon from './../../assets/images/left@2x.png';
import rightIcon from './../../assets/images/right@2x.png';
//styles
import './../../styles/ui/sideNav.css';

/*
  HeaderContent component for the drawer.
*/
const HeaderContent = () => {
	//Get the current year of type string
	const yearString = moment().format('YYYY');
	return (
		<div className="drawerHeader">
			<Box component="span">
				<img src={leftIcon} width={'35px'} alt="left" />
			</Box>
			<Box component="span" className="yearText">
				{yearString}
			</Box>
			<Box component="span">
				<img src={rightIcon} width={'35px'} alt="right" />
			</Box>
		</div>
	);
};

export default (props) => {
	return <Drawer items={months} headerContent={HeaderContent} />;
};
