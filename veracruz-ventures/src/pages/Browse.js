import React from 'react';
import MUIDataTable from "mui-datatables";
  
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


const Browse = () => {
    const [rows, setRows] = React.useState([]);

    const handleGetData = async() => {
        const response = await fetch("http://localhost:5000/");
        setRows(await response.json());
        return await response.json;
    };

    const myRows = handleGetData();

    return (
        <MUIDataTable
        title={"AgWorld"}
        data={rows}
        columns={columns}
        options={options}
        
        />    
    );
};

export default Browse;