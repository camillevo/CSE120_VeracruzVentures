import React from 'react';
import MUIDataTable from "mui-datatables";
<<<<<<< HEAD

const rows = [
    {field: 'field 1', plan: 'plan 1', date: 'date 1', activity: 'activity 1'},
    {field: 'field 2', plan: 'plan 2', date: 'date 2', activity: 'activity 2'},
    {field: 'field 2', plan: 'plan 1', date: 'date 3', activity: 'activity 4'},
    {field: 'field 3', plan: 'plan 3', date: 'date 3', activity: 'activity 3'},
];
  
const options = {
    filterType: 'checkbox',
    selectableRows: 'none',
    print: 'false',
    //ask the industry partner about it
    //download: 'false' 
};

const columns = [
    {
     name: "field",
     label: "Field",
     options: {
      filter: true,
      sort: true,
     }
    },
    {
     name: "plan",
     label: "Plan",
     options: {
      filter: true,
      sort: false,
     }
    },
    {
     name: "date",
     label: "Date",
     options: {
      filter: true,
      sort: false,
     }
    },
    {
     name: "activity",
     label: "Activity",
     options: {
      filter: true,
      sort: false,
     }
    },
   ];

=======
  
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
    },
    {   name: "field",
        label: "Field",
    },
    {   name: "activity",
        label: "Activity",
    },
    {   name: "dateDue",
        label: "Date Due",
    },
    {   name: "startTime",
        label: "Start Time"
    },
    {   name: "stopTime",
        label: "Stop Time",
    },
    {   name: "costDollars",
        label: "Cost Dollars",
    },
    {   name: "applicationRate",
        label: "Application Rate (gal/acre)",
    },
    {   name: "cumulativeArea",
        label: "Cumulative Area (acre)",
    }
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
>>>>>>> camille

const BrowseBestPractice = () => {
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

export default BrowseBestPractice;