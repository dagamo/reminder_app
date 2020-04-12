import React from 'react';
import { Grid, Box } from '@material-ui/core';
import moment from 'moment';
//assets
import './../../styles/ui/header.css';
import weatherIcon from './../../assets/images/lluvia.png';

/*
This component is the header of the app and it is using a css style file
*/
const Header = () => {
	const currentDay = moment().format('dddd');

	return (
		<Grid container>
			<Grid item xs={12} className="headerContainer">
				<Box className="myWeather">
					<Box component="span">
						12° C
						<img src={weatherIcon} />
					</Box>
					<Box component="span" className="city">
						Guatemala
					</Box>
				</Box>
				<Box className="currentDay">Today, {currentDay}</Box>
			</Grid>
		</Grid>
	);
};

export default Header;
