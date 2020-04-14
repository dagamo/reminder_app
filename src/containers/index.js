import React, { useState, useCallback } from 'react';
import { useTransition, animated } from 'react-spring';
import { Box, Container, Grid } from '@material-ui/core';
//styles
import './../styles/base/layout.css';
import Header from './../components/header/index';
import SideNav from './sideNav/index';
import Calendar from './../components/calendar/index';
import Reminder from './../components/reminders/index';

const pages = [
	({ style, onClick }) => (
		<animated.div style={{ ...style }}>
			<Calendar onClick={onClick}/>
		</animated.div>
	),
	({ style, onClick }) => (
		<animated.div style={{ ...style, background: 'lightblue' }}>
			<Reminder onClick={onClick}/>
		</animated.div>
	)
];

const Index = () => {
	const [ index, set ] = useState(0);
	const onClick = useCallback(() => set((state) => (state + 1) % 2), []);
	const transitions = useTransition(index, (p) => p, {
		from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
		enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
		leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' }
	});

	return (
		<Container maxWidth="xl">
			<Header />

			<Grid container className="layout">
				<Grid item xs={0} md={2}>
					<SideNav />
				</Grid>
				<Grid item xs={12} md={8}>
					{transitions.map(({ item, props, key }) => {
						const Page = pages[item];
						return <Page key={key} style={props} onClick={onClick} />;
					})}
				</Grid>
				<Grid item xs={12} md={2} className="remindersContainer">
					Items
				</Grid>
			</Grid>
		</Container>
	);
};

export default Index;
