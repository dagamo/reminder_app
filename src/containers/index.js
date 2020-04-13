import React, { useState, useEffect } from 'react';
import { Box, Container, Grid } from '@material-ui/core';
//styles
import './../styles/base/layout.css';
import Header from './../components/header/index';
import SideNav from './sideNav/index';
import Calendar from './../components/calendar/index';

const Index = () => {
	return (
		<Container maxWidth="xl">
			<Header />
			
			<Grid container className="layout">
				<Grid item xs={0} md={2} >
				<SideNav />
				</Grid>
				<Grid item xs={12} md={8} >
					<Calendar />
				</Grid>
				<Grid item xs={12} md={2} className="remindersContainer">
					Items
				</Grid>
			</Grid>
		</Container>
	);
};

export default Index;
