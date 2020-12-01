import React, {useState} from 'react';
import MUIDataTable from "mui-datatables";
import { makeStyles } from "@material-ui/core/styles";
  import { Chart } from "frappe-charts";

const useStyles = makeStyles((theme) => ({
	root: {
	  flexGrow: 1,
	  backgroundColor: theme.palette.background.paper,
	  width: '100%',
	  position: 'relative'
	}
}));

const options = {
    filterType: 'checkbox',
    selectableRows: 'none',
    print: 'false',
    tableBodyHeight: '20%',
    tableBodyMaxHeight: '20%',
    //ask the industry partner about it
    //download: 'false' 
};

const columns = [
    {   name: "date",
        label: "Date Due",
    },
    {   name: "farm",
        label: "Farm",
    },
    {   name: "field",
        label: "Field",
    },
    {
		name: "crop",
		label: "Crop",
	},
    {   name: "activity",
        label: "Activity",
    }
];

const fieldColumns = [
    {   name: "farm",
        label: "Farm",
    },
    {
		name: "crop",
		label: "Crop",
	}
];


const Dashboard = () => {
    const [rows, setRows] = React.useState([]);
    //const [fRows, setFRows] = React.useState([]);
    const [agRows, setAgRows] = React.useState([]);
    const [tabIndex, setTabIndex] = useState(0);
    const classes = useStyles();

    const handleGetAgData = async() => {
        const responseAg = await fetch("http://localhost:5000/agworld");
        setAgRows(await responseAg.json());
        return await responseAg.json;
    };
    const handleGetData = async() => {
        const response = await fetch("http://localhost:5000/schedule");
        setRows(await response.json());
        return await response.json;
    };
    /*const handleFieldData = async() => {
        const responseF = await fetch("http://localhost:5000/fields");
        setFRows(await responseF.json());
        return await responseF.json;
	};*/

    const myRows = handleGetData();
    //const myFRows = handleFieldData();
    const myAgRows = handleGetAgData();
    const scheduleData = (value) => {
		
	}
    
    //const dataAg = JSON.parse(myAgRows);
    
	/*const dataToUse = {
		labels: "field",
		datasets: [
        {
            name: "Some Data", type: "bar",
            values: [25, 40, 30, 35, 8, 52, 17, -4]
        }]
	}
	const chart = new Chart("#chart", {  // or a DOM element,
		// new Chart() in case of ES6 module with above usage
		title: "My Awesome Chart",
		data: dataToUse,
		type: 'axis-mixed', // or 'bar', 'line', 'scatter', 'pie', 'percentage'
		height: 250,
		colors: ['#7cd6fd', '#743ee2']
	});*/
    
/*<MUIDataTable
        title={"Browse List"}
        data={rows}
        columns={columns}
        options={options}
        
        /> 
        * <chart />
					<MUIDataTable
						title={"Graphs"}
						data={fRows}
						columns={fieldColumns}
						options={options}
					/>*/
	
    const formatTable = {
		display: "block",
		marginLeft: "auto",
		marginRight: "auto"
	}
    return (
	   <div>
			<table style={formatTable}><tr>
			<td>
		   <div>
				 <iframe width="500" height="400" frameborder="0" src="https://www.bing.com/maps/embed?h=400&w=500&cp=37.34211233036821~-120.47395737423523&lvl=16&typ=d&sty=h&src=SHELL&FORM=MBEDV8" scrolling="no">
				 </iframe>
			</div></td><td>
		   <MUIDataTable
				title={"Weekly Schedule"}
				data={rows}
				columns={columns}
				options={options}
			/></td></tr></table>
		</div>
    );
};


export default Dashboard;

