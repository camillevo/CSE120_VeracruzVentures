import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SearchIcon from '@material-ui/icons/Search';
import EventIcon from '@material-ui/icons/Event';
import DataUsageIcon from '@material-ui/icons/DataUsage';
import { Link } from '@material-ui/core';
import Dashboard from './Dashboard';

//import Home from './Home';

const drawerWidth = 260;
const itemsList = [
    {
      text: "Dashboard",
      icon: <DashboardIcon />,
      url: "./pages/Dashboard",
    },
    {
      text: "Data Overview",
      icon: <DataUsageIcon />,
      url: "./pages/Data",
      //onClick: () => history.push("/data")
    },
    {
      text: "Calendar",
      icon: <EventIcon />,
      url: "./pages/Calendar",
      //onClick: () => history.push("/calendar")
    },
    {
      text: "Browse Best Practices",
      icon: <SearchIcon />,
      url: "./pages/Browse",
      //onClick: () => history.push("/contact")
    },
  ]

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    //backgroundColor: '#8bc34a',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    //backgroundColor: '#8bc34a',
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    //backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

export default function PermanentDrawerLeft() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Permanent Drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Divider />
        <List>
            {itemsList.map((item, index) => {
            const {text, icon, url} = item;
            return (
                <Link to={item.url}>
                <ListItem button key={text}>
                    {icon && <ListItemIcon>{icon}</ListItemIcon>}
                    <ListItemText primary={text} />
                </ListItem>
                </Link>
            );
            })}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
	    <Dashboard />
        <Typography paragraph>
        </Typography>
        
        <Typography paragraph>
        </Typography>
      </main>
    </div>
  );
}
