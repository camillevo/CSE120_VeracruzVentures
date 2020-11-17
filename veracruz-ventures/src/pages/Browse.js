import React from 'react';
import MUIDataTable from "mui-datatables";

const rows = [
    {field: 'field 1', plan: 'plan 1', date: 'date 1', activity: 'activity 1'},
    {field: 'field 2', plan: 'plan 2', date: 'date 2', activity: 'activity 2'},
    {field: 'field 2', plan: 'plan 1', date: 'date 3', activity: 'activity 4'},
    {field: 'field 3', plan: 'plan 3', date: 'date 3', activity: 'activity 3'},
];


const getData = () => {
    console.log("getting data");
    let data = [];

    return fetch("http://localhost:5000").then(res => res.json()).then(function(result) {
        console.log("result: " + result);
        data = {...result};
        return data;
    });

    //return data;
}
  
const options = {
    filterType: 'checkbox',
    selectableRows: 'none',
    print: 'false',
    //ask the industry partner about it
    //download: 'false' 
};

const columns = [
    {   name: "farm",
        label: "Farm",
        options: {
            filter: true,
            sort: true,
        }
    },
    {   name: "field",
        label: "Field",
        options: {
            filter: true,
            sort: false,
        }
    },
    {   name: "activity",
        label: "Activity",
        options: {
            filter: true,
            sort: false,
        }
    },
    {   name: "dateDue",
        label: "Date Due",
        options: {
            filter: true,
            sort: false,
        }
    },
];


const BrowseBestPractice = () => {
    const [rows, setRows] = React.useState([]);

    const handleGetData = async() => {
        const response = await fetch("http://localhost:5000/");
        setRows(await response.json());
        return await response.json;
    };

    const myRows = handleGetData();

    return (
        <MUIDataTable
        title={"Browse List"}
        data={rows}
        columns={columns}
        options={options}
        
        />    
    );
};


export default BrowseBestPractice;

