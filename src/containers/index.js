import React, { useState, useEffect } from 'react';
import { Box } from '@material-ui/core';
import Header from './../components/header/index';
import Drawer from './../components/drawer';

const Index = () => {
	return (
		<Box>
			<Header />
			<Drawer />
		</Box>
	);
};

export default Index;
