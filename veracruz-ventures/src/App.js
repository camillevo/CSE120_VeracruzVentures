import React from 'react';
import './App.css';
import Toolbar from '@material-ui/core/Toolbar';
import PermanentDrawerLeft from './components/Drawer';
import NavBar from './components/NavBar';
import Dashboard from './pages/Dashboard';
import DataOverview from './pages/Data';
import Calendar from './pages/Calendar';
import Browse from './pages/Browse';
import BrowsePerson from './pages/BrowsePerson'
import { BrowserRouter as Router, Route } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';


import Axios from "axios";

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

  Axios({
    method: "GET",
    url: "http://localhost:5000/",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => {
    console.log(res.data.message);
  });

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Router>
        <NavBar />
        <PermanentDrawerLeft />
        <div className={classes.content}> 
          <Toolbar />
          <Route exact path="/" component={() => <Dashboard />} />
          <Route path="/data" exact component={() => <DataOverview />} />
          <Route exact path="/calendar" component={() => <Calendar />} />
          <Route exact path="/browse" component={Browse} />
          <Route path="/browse/:name" component={BrowsePerson} />
        </div>
      </Router>
    </div>
  );
};

export default App;