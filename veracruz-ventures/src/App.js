import React from 'react';
import './App.css';
import Toolbar from '@material-ui/core/Toolbar';
import PermanentDrawerLeft from './components/Drawer';
import NavBar from './components/NavBar';
import { onClick } from '@material-ui/system';
import Dashboard from './pages/Dashboard';
import DataOverview from './pages/Data';
import Calendar from './pages/Calendar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexGrow: 1
  },
  content: {
    padding: "20px"
  }
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Router>
        <NavBar />
        <PermanentDrawerLeft />
        <div className={classes.content}> 
          <Toolbar />
          <Route exact path="/dashboard" exact component={() => <Dashboard />} />
          <Route path="/data" component={DataOverview} />
          <Route exact path="/calendar" component={Calendar} />
        </div>
      </Router>
    </div>
  );
};

export default App;
