import React from 'react';
import MUIDataTable from "mui-datatables";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      width: 930,
    }
  }));

const options = {
    filterType: 'checkbox',
    selectableRows: 'none',
    print: 'false'
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
                options={options}
            />
        </div>
    );
}

const DataOverview = () => {
    const [rows, setRows] = React.useState([]);
    const classes = useStyles();
    const [tabIndex, setTabIndex] = React.useState(0);

    const handleChange = (event, value) => {
        setTabIndex(value);
    };

    const handleGetData = async() => {
        const response = await fetch("http://localhost:5000/");
        setRows(await response.json());
        return await response.json;
    };
    // this line is improper. I'm only doing it so that handleGetData gets called
    // handleGetData() fills the "rows" - not "myRows" - variable using "setRows"
    const myRows = handleGetData();

    return (
        <div className={classes.root}>
            <h3>Click a row to add the activity to your calendar!</h3>
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

