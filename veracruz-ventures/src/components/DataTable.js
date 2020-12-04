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
      width: '100%',
    }
  }));

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

function Table(props) {
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

const DataTable = () => {
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
                name: rowData[3],
                field: rowData[1],
                isOpen: true,
            })
        }
    };
    
    const optionsWc = {
        filterType: 'checkbox',
        selectableRows: 'none',
        print: 'false',
    };

    useEffect(() => {
        handleGetData();
        if(localStorage.getItem("activities") === null) {
            //window.alert("its null");
            localStorage.setItem("activities", JSON.stringify([]));
        }
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
            <Table value={tabIndex} index={0} title={"AgWorld"} myRows={rows} myColumns={columns0} options={optionsAg}/>
            <Table value={tabIndex} index={1} title={"Wiseconn"} myRows={rows} myColumns={columns1} options={optionsWc}/>
        </div>
    );
};


export default DataTable;