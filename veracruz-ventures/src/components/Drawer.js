import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SearchIcon from '@material-ui/icons/Search';
import EventIcon from '@material-ui/icons/Event';
import DataUsageIcon from '@material-ui/icons/DataUsage';
//import { Link, withRouter } from "react-router-dom";

import { Link } from '@material-ui/core';


const drawerWidth = 260;
const itemsList = [
    {
      text: "Dashboard",
      icon: <DashboardIcon />,
      url: "/dashboard",
    },
    {
      text: "Data Overview",
      icon: <DataUsageIcon />,
      url: "/data",
      //onClick: () => history.push("/data")
    },
    {
      text: "Calendar",
      icon: <EventIcon />,
      url: "/calendar",
      //onClick: () => history.push("/calendar")
    },
    {
      text: "Browse Best Practices",
      icon: <SearchIcon />,
      url: "/",
      //onClick: () => history.push("/contact")
    },
  ]

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerContainer: {
    overflow: "auto"
  }
}));

function PermanentDrawerLeft() {
  const classes = useStyles();

  return (
    <div class="container">
    <Drawer
    className={classes.drawer}
    variant="permanent"
    classes={{
      paper: classes.drawerPaper,
    }}
  >
    <Toolbar />
    <div className={classes.drawerContainer}>
      <List>
        {itemsList.map((item, index) => {
          const {text, icon, url} = item;
          return (
            <Link href={item.url}>
            <ListItem button key={text}>
                {icon && <ListItemIcon>{icon}</ListItemIcon>}
                <ListItemText primary={text} />
            </ListItem>
            </Link>
          );  
        })}
      </List>
    </div>
  </Drawer>
  
  </div>
  );
}

export default PermanentDrawerLeft;
