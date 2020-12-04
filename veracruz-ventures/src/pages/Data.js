import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DataTable from "../components/DataTable";
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
	root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      width: '100%',
    },
}));

const DataOverview = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant="h4">Data Overview</Typography>
            <Typography variant="body2" style={{margin: "10px 0px 20px 0px"}}>
                Click a row to add the activity to your calendar. You can also sort, filter, and export your
                data to CSV.
            </Typography>
            < DataTable />
        </div>
    );
};


export default DataOverview;

