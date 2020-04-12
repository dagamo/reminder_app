import React from 'react';
import PropTypes from 'prop-types';
import { Box, Divider, Drawer, Hidden, List, ListItem, ListItemText } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
//styles
import { useStyles } from './uiStyles';

/*
This component is using a material ui object for styles
*/
function ResponsiveDrawer(props) {
	const { container, items, headerContent } = props;
	const classes = useStyles();
	const theme = useTheme();
	const [ mobileOpen, setMobileOpen ] = React.useState(false);

	//This function hide the drawer months when the screen is mobile size.
	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const drawer = (
		<div>
			<Divider />
			<Box className={classes.toolbar}>
        {
          headerContent && headerContent()
        }
			</Box>
			<List className={classes.list}>
				{Array.isArray(items) &&
					items.map((item, index) => (
						<ListItem button key={index}>
							<ListItemText>
								<Box component="span" className={classes.item}>
									{item.name}
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
   * It's need items for render inside the drawer with a structure {id:number, name: string}
   * It's need a headerContent it is a function returns a component.
   */
  headerContent: PropTypes.any,
	items: PropTypes.array,
	container: PropTypes.any
};

export default ResponsiveDrawer;
