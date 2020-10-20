import React from 'react';
import logo from './logo.svg';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { positions } from '@material-ui/system';
import './App.css';
import Drawer from './pages/Drawer'
import { onClick } from '@material-ui/system';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';



import Browse from './pages/Browse';
import DashBoard from './pages/Dashboard';
import Data from './pages/Data';
import Calendar from './pages/Calendar';
import AppBar from './pages/Appbar';


const useStyles = makeStyles({
  container: {
    display: "flex",
  }
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Router>
      <AppBar />
      <Drawer />
      <Switch>
        <Route exact from="/pages/Dashboard" render={props => <DashBoard {...props} />} />
        <Route exact path="/pages/Browse" render={props => <Browse {...props} />} />
        <Route exact path="/pages/Calendar" render={props => <Calendar {...props} />} />
        <Route exact path="/pages/Data" render={props => <Data {...props} />} />
      </Switch>
      </Router> 
    </div>
   );
};

export default App;
