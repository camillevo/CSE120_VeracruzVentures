import React from 'react';
import logo from './logo.svg';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { positions } from '@material-ui/system';
import './App.css';
import Drawer from './pages/Drawer'
import { onClick } from '@material-ui/system';
import DashBoard from './pages/Dashboard';
import DataOverview from './pages/Data';
import Calendar from './pages/Calendar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";




function App() {
  return (
    <Router>
      <Switch>
        <Route path='/pages/Dashboard' component = {DashBoard}/>  
        <Route path='/pages/DataOverview' component = {DataOverview}/>
        <Route path='/pages/Calendar' component = {Calendar}/>
      </Switch>
    </Router>
  );
};

export default App;
