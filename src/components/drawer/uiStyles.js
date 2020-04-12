import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;
/*
  Edit the styles of the material ui Drawer component.
  It's necesary for a drawer responsive.
*/

export const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex'
	},
	drawer: {
		[theme.breakpoints.up('sm')]: {
			width: drawerWidth,
			flexShrink: 0
		}
	},
	// necessary for content to be below app bar
	toolbar: {
		...theme.mixins.toolbar,
		fontSize: '1.7rem',
		display: 'flex',
		alignItems: 'center',
    justifyContent: 'space-around',
    fontFamily:'Quicksand',
    fontWeight:'bold'
	},
	drawerPaper: {
		marginTop: 120,
		width: drawerWidth,
		backgroundColor: '#96BCFF',
    color: '#FFF'
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3)
	},
	list: {
		marginBottom: 150
	},
	item: {
    fontSize: '1.2rem',
    fontFamily:'Quicksand',
  },
  year:{
    paddingLeft:'20px',
    paddingRight:'20px',
    backgroundColor:'#C278FF',
    borderRadius:'80px'
  }
}));
