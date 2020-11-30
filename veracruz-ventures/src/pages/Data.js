import React, { useState, useEffect } from 'react';
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
    print: 'false',
    //resizableColumns: true,
    rowsPerPageOptions: [5,10,20],
    tableBodyMaxHeight: '600px',
    // Goal: click on row, popup comes up with start and stop input.
};

const columns0 = [
    {   name: "farm", label: "Farm" },
    {   name: "field", label: "Field" },
    {   name: "crop", label: "Crop" },
    {   name: "activity", label: "Activity" },
    {   name: "dateDue", label: "Date Due" },
    {   name: "startTime", label: "Start Time" },
    {   name: "stopTime", label: "Stop Time" },
    {   name: "activeIngredient", label: "Active Ingredient" },
    {   name: "cumulativeArea", label: "Cumulative Area (acre)" },
    {   name: "totalApplicationRate", label: "Total Application Rate (gal/acre)" },
    {   name: "volumnRate", label: "Volumn Rate (gal/acre)" },
    {   name: "harvestedWeight", label: "Harvested Weight (ton)" },
];

const columns1 = [
  {   name: "time", label: "Time" },
  {   name: "canal", label: "Canal Level PSI" },
  {   name: "flow", label: "Flow Meter" },
  {   name: "rain", label: "Rain Meter" },
  {   name: "sentek", label: "Sentek 1 sensor depth" },
  {   name: "solar", label: "Solar Radiation" },
  {   name: "temp", label: "Temp" },
  {   name: "wind", label: "Wind Direction" }
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
    const [rows, setRows] = useState([]);
    const classes = useStyles();
    const [tabIndex, setTabIndex] = useState(0);

    useEffect(() => {
        handleGetData();
      }, []);

    const handleChange = (event, value) => {
        setTabIndex(value);
        handleGetData(value);
    };

    const handleGetData = async(value) => {
        let response;
        if (value == 1){
            response = await fetch("http://localhost:5000/wiseconn");
        } else {
            response = await fetch("http://localhost:5000/agworld");
        }
        setRows(await response.json());
        return await response.json;
    };

    return (
        <div className={classes.root}>
            <h3>Click a row to add the activity to your calendar!</h3>
            <AppBar position="static" color="default">
                <Tabs
                    value={tabIndex}
                    onChange={handleChange}
                    variant="500px"
                >
                    <Tab label="Farm Data"/>
                    <Tab label="Irrigation Data"/>
                </Tabs>
            </AppBar>
            <DataTable value={tabIndex} index={0} title={"AgWorld"} myRows={rows} myColumns={columns0}/>
            <DataTable value={tabIndex} index={1} title={"Wiseconn"} myRows={rows} myColumns={columns1}/>
        </div>
    );
};


export default DataOverview;