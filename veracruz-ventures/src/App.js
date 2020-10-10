import React from 'react';
import './App.css';
import PermanentDrawerLeft from './components/Drawer';
import AppBar from '@material-ui/core/AppBar';
import NavBar from './components/NavBar';
import { onClick } from '@material-ui/system';
import Dashboard from './pages/Dashboard';
import DataOverview from './pages/Data';
import Calendar from './pages/Calendar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  }
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Router>
        <NavBar />
        <PermanentDrawerLeft />
        <Switch>
          <div className={{display: "flex"}}>
          <Route exact path="/dashboard" exact component={() => <Dashboard />} />
          <Route path="/data" component={DataOverview} />
          <Route exact path="/calendar" component={Calendar} />
          </div>
        </Switch>
      </Router>
      <PermanentDrawerLeft />
    </div>
  );
};

export default App;
