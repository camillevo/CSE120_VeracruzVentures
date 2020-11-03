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
// import Calendar from './pages/Calendar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  link:{
    display: 'block',
  },
}));






function App() {

  const sqlite3 = require('sqlite3').verbose()
  let db = new sqlite3.Database('./data/testdata.sqlite', (err) =>{
      if(err) {
          return console.error(err.message);
      }
      console.log('Connected to the in-memory SQlite database')
  })

  db.close((err) => {
      if (err) {
          return console.error(err.message)
      }
      console.log('Close the database connection.')
  })

  const classes = useStyles();
  return (
    // <div>
    //   <Router>
    //   <Switch>
    //     <Route path='/pages/Dashboard' component = {DashBoard}/>  
    //     <Route path='/pages/Data' component = {DataOverview}/>
    //     <Route path='/pages/Calendar' component = {Calendar}/>
    //   </Switch>
    //   </Router>

    //   <Link href='/pages/Dashboard' className = {classes.link}>
    //     <Button variant="contained">
    //       Dashboard
    //     </Button>
    //   </Link>
    //   <Link href='/pages/Data' className = {classes.link}>
    //     <Button variant="contained">
    //       Data
    //     </Button>
    //   </Link>
    //   <Link href='/pages/Calendar' className = {classes.link}>
    //     <Button variant="contained">
    //       Calendar
    //     </Button>
    //   </Link>
    // </div>
    <Drawer />
  );
};

export default App;
