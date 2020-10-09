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



// import BrowseBestPractice from './pages/Browse';
// import DashBoard from './pages/Dashboard';
// import DataOverview from './pages/Data';
// import Calendar from './pages/Calendar';

const useStyles = makeStyles({
  container: {
    display: "flex"
  }
});

function App() {
  const classes = useStyles();
  return (
    <div>
      <Drawer />
      {/* <Router>
      <Switch>
        <Route exact path='/pages/Dashboard' component = {DashBoard}/>  
        <Route exact path='/pages/Data' component = {DataOverview}/>
        <Route exact path='/pages/Calendar' component = {Calendar}/>
        <Route exact path='/pages/Browse' component = {BrowseBestPractice}/>
      </Switch>
      </Router> */}
    </div>

    /* //   <Link href='/pages/Dashboard' className = {classes.link}>
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
    // </div> */
   );
};

export default App;
