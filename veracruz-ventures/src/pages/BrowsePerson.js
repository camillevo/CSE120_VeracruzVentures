import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import BrowseComponent from "../components/BrowseComponent";
import BrowsePopup from "../components/BrowsePopup";
import {testData} from "./testData";
import DataTable from "../components/DataTable.js";

const useStyles = makeStyles((theme) => ({
	root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      width: '100%',
    },
	button: {
        float: "right",
        display: "inline-block",
		height: "50px",
		//width: "100px",
        padding: '10px',
        marginRight: '40px',
        background: "#A4C639",
		color: "white",
		border: "none",
	    cursor: "pointer",
    },
    text: {
        display: "inline-block",
        float: "left"
    },
    text2: {
        margin: "10px 0px 20px 0px",
        width: "800px"
    }
}));
    
const BrowsePerson = ({match}) => {
    const {params} = match;

    const classes = useStyles();
    console.log(params);
    
    return (
     <div>
		<Typography variant="h4" className={classes.text}>{params.name + "'s Best Practice"}</Typography>
        <button onClick={() => {window.location.href = "/browse"}} className={classes.button}>
            <Typography variant="button">Go back to all Best Practices</Typography>
        </button>
        <Typography variant="body2" className={classes.text + " " + classes.text2}>
                <br /><br /><br />Click a row to add the activity to your calendar. You can also sort, filter, and export your
                data to CSV.
        </Typography>
        < DataTable />
    </div>
    );
};

export default BrowsePerson;