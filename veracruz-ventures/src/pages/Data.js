import React, { useState, useEffect } from 'react';
import MUIDataTable from "mui-datatables";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Popup from "../components/Popup";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      width: 930,
    }
  }));

const optionsAg = {
    filterType: 'checkbox',
    selectableRows: 'none',
    print: 'false',
    onRowClick: (rowData, rowMeta) => {
        //window.alert("farm = " + rowData[0] + "name = " + rowData[1]);
        return (
            <Popup />
        )
    }
};

const optionsWc = {
    filterType: 'checkbox',
    selectableRows: 'multiple',
    print: 'false',
};

const columns = [
    {   name: "farm", label: "Farm" },
    {   name: "field", label: "Field" },
    {   name: "activity", label: "Activity" },
    {   name: "dateDue", label: "Date Due" },
    {   name: "startTime", label: "Start Time" },
    {   name: "stopTime", label: "Stop Time" },
    {   name: "costDollars", label: "Cost Dollars" },
    {   name: "applicationRate", label: "Application Rate (gal/acre)" },
    {   name: "cumulativeArea", label: "Cumulative Area (acre)"  }
];

function DataTable(props) {
    const { value, index, myRows, myColumns, title} = props;
    return (
        <div hidden={value !== index} >
            <MUIDataTable
                title={title}
                data={myRows}
                columns={myColumns}
                options={index?optionsWc:optionsAg}
            />
        </div>
    );
}

const DataOverview = () => {
    const [rows, setRows] = useState([]);
    const classes = useStyles();
    const [tabIndex, setTabIndex] = useState(0);
    const [calendarActivities, setCalendarActivities] = useState([]);
    const [temp, setTemp] = useState("");

    const data = [{
        name: "Water the stuff",
        field: "MP1",
        startDate: "2020-01-05T12:10:00",
        endDate: "2020-01-08T16:10:00",
    },
    {
        name: "farm stuff",
        field: "MP2",
        startDate: "2020-01-06T09:30:00",
        endDate: "2020-01-07T05:30:00"
    },
    {
        name: "feed cat",
        field: "MP2",
        startDate: "2020-01-08T12:00:00",
        endDate: "2020-01-08T13:50:00"
    }];

    useEffect(() => {
        handleGetData();
       // setCalendarActivities(JSON.parse( localStorage.getItem("textTest")));
        setCalendarActivities(localStorage.getItem("textTest"));
        localStorage.setItem("activities", JSON.stringify(data));
        console.log("should be string ", data);
    }, []);

    useEffect(() => {
        //const json = JSON.stringify(notes);
        localStorage.setItem("textTest", calendarActivities);
    }, [calendarActivities]);

    const handleChange = (event, value) => {
        setTabIndex(value);
    };

    const handleGetData = async() => {
        const response = await fetch("http://localhost:5000/");
        setRows(await response.json());
        return await response.json;
    };

    return (
        <div className={classes.root}>
            <h3>Click a row to add the activity to your calendar!</h3>
            <Popup />
            <input onChange={(e) => setTemp(e.target.value)} />
            <button onClick={() => {
                setCalendarActivities([...calendarActivities, temp]);
                setTemp("");
                //localStorage.setItem("textTest", calendarActivities)
            }
            }>Submit</button>
            <AppBar position="static" color="default">
                <Tabs
                    value={tabIndex}
                    onChange={handleChange}
                    variant="fullWidth"
                >
                    <Tab label="Farm Data"/>
                    <Tab label="Irrigation Data"/>
                </Tabs>
            </AppBar>
            <DataTable value={tabIndex} index={0} title={"AgWorld"} myRows={rows} myColumns={columns}/>
            <DataTable value={tabIndex} index={1} title={"Wiseconn"} myRows={rows} myColumns={columns}/>
        </div>
    );
};


export default DataOverview;

