import React from 'react';
import PropTypes from 'prop-types';
import { Box, Divider, Drawer, Hidden, List, ListItem, ListItemText } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import moment from 'moment';
//styles
import { useStyles } from './styles';
//utils
import { months } from './../../util/monthsList';
//images
import leftIcon from './../../assets/images/left@2x.png';
import rightIcon from './../../assets/images/right@2x.png';

function ResponsiveDrawer(props) {
	const { container } = props;
	const classes = useStyles();
	const theme = useTheme();
	const [ mobileOpen, setMobileOpen ] = React.useState(false);

  //This function hide the drawer months when the screen is mobile size.
	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
  };
  
  //Get the current year of type string
  const yearString = moment().format('YYYY');
  
	const drawer = (
		<div>
			<Divider />
			<Box className={classes.toolbar}>
				<Box component="span">
					<img src={leftIcon} width={'35px'} alt="left" />
				</Box>
				<Box component="span">{yearString}</Box>
				<Box component="span">
					<img src={rightIcon} width={'35px'} alt="right" />
				</Box>
			</Box>
			<List className={classes.list}>
				{months.map((month, index) => (
					<ListItem button key={index}>
						<ListItemText>
							<Box component="span" className={classes.item}>
								{month.name}
							</Box>
						</ListItemText>
					</ListItem>
				))}
			</List>
		</div>
	);

	return (
		<div>
			<nav className={classes.drawer} aria-label="mailbox folders">
				{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
				<Hidden smUp implementation="css">
					<Drawer
						container={container}
						variant="temporary"
						anchor={theme.direction === 'rtl' ? 'right' : 'left'}
						open={mobileOpen}
						onClose={handleDrawerToggle}
						classes={{
							paper: classes.drawerPaper
						}}
						ModalProps={{
							keepMounted: true // Better open performance on mobile.
						}}
					>
						{drawer}
					</Drawer>
				</Hidden>
				<Hidden xsDown implementation="css">
					<Drawer
						classes={{
							paper: classes.drawerPaper
						}}
						variant="permanent"
						open
					>
						{drawer}
					</Drawer>
				</Hidden>
			</nav>
		</div>
	);
}

ResponsiveDrawer.propTypes = {
	/**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
	container: PropTypes.any
};

export default ResponsiveDrawer;
