import React from 'react';
import MUIDataTable from "mui-datatables";

const rows = [
    {field: 'field 1', plan: 'plan 1', date: 'date 1', activity: 'activity 1'},
    {field: 'field 2', plan: 'plan 2', date: 'date 2', activity: 'activity 2'},
    {field: 'field 2', plan: 'plan 1', date: 'date 3', activity: 'activity 4'},
    {field: 'field 3', plan: 'plan 3', date: 'date 3', activity: 'activity 3'},
];


let getData = () => {
    console.log("getting data");
    //let data = fetch("http://localhost:5000/pp").then(res => res.json);
    const data = fetch("http://localhost:5000").then(res => res.json()).then(function(result) {
        console.log("result: " + result);
        console.log("result[0]: " + result[0].field);
        return result;
    });

    return data;
}
  
const options = {
    filterType: 'checkbox',
    selectableRows: 'none',
    print: 'false',
    //ask the industry partner about it
    //download: 'false' 
};

const columns = [
    {   name: "field",
        label: "Field",
        options: {
            filter: true,
            sort: true,
        }
    },
    {   name: "plan",
        label: "Plan",
        options: {
            filter: true,
            sort: false,
        }
    },
    {   name: "date",
        label: "Date",
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
];


const BrowseBestPractice = () => {
    getData();
    return (
        <MUIDataTable
        title={"Browse List"}
        data={getData}
        columns={columns}
        options={options}
        
        />    
    );
};


export default BrowseBestPractice;

