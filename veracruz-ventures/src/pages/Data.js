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
    const { value, index, myRows, myColumns, title, options} = props;
    return (
        <div hidden={value !== index} >
            <MUIDataTable
                title={title}
                data={myRows}
                columns={myColumns}
                options={options}
            />
        </div>
    );
}

const DataOverview = () => {
    const [rows, setRows] = useState([]);
    const classes = useStyles();
    const [tabIndex, setTabIndex] = useState(0);
    const [calendarActivities, setCalendarActivities] = useState([]);
    const [popupProps, setPopupProps] = useState({
        isOpen: false,
        onSubmit: (name, start, end, field) => {
            if(start == '' || end == '') {
                window.alert("Please enter start and end date");
                return;
            }
            let oldData = JSON.parse( localStorage.getItem("activities"));
            oldData.push({
                name: name,
                field: field,
                startDate: start,
                endDate: end,
            })
            localStorage.setItem("activities", JSON.stringify(oldData));
            popupProps.myHandleClose();
        },
        name: '',
        field: '',
        myHandleClose: () => setPopupProps({
            ...popupProps,
            isOpen: false,
        }),
    });

    const optionsAg = {
        filterType: 'checkbox',
        selectableRows: 'none',
        print: 'false',
        onRowClick: (rowData, rowMeta) => {
            setPopupProps({
                ...popupProps,
                name: rowData[2],
                field: rowData[1],
                isOpen: true,
            })
        }
    };
    
    const optionsWc = {
        filterType: 'checkbox',
        selectableRows: 'multiple',
        print: 'false',
    };

    useEffect(() => {
        handleGetData();
        if(localStorage.getItem("activities") === null) {
            //window.alert("its null");
            localStorage.setItem("activities", JSON.stringify([]));
        }
    }, []);

    // useEffect(() => {
    //     //const json = JSON.stringify(notes);
    //     localStorage.setItem("textTest", calendarActivities);
    // }, [calendarActivities]);

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
            <Popup {...popupProps}/>

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
            <DataTable value={tabIndex} index={0} title={"AgWorld"} myRows={rows} myColumns={columns} options={optionsAg}/>
            <DataTable value={tabIndex} index={1} title={"Wiseconn"} myRows={rows} myColumns={columns} options={optionsWc}/>
        </div>
    );
};


export default DataOverview;

