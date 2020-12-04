import React, {useState, useEffect} from 'react';
import MUIDataTable from "mui-datatables";
import { makeStyles } from "@material-ui/core/styles";
import GoogleGantt from '../components/GoogleGantt';
//import { Chart } from "frappe-charts";

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

// const columns = [
//     {   name: "date",
//         label: "Date Due",
//     },
//     {   name: "farm",
//         label: "Farm",
//     },
//     {   name: "field",
//         label: "Field",
//     },
//     {
// 		name: "crop",
// 		label: "Crop",
// 	},
//     {   name: "activity",
//         label: "Activity",
//     }
// ];

// const fieldColumns = [
//     {   name: "farm",
//         label: "Farm",
//     },
//     {
// 		name: "crop",
// 		label: "Crop",
// 	}
// ];


const Dashboard = () => {
    const [rows, setRows] = React.useState([]);
    //const [fRows, setFRows] = React.useState([]);
    const [agRows, setAgRows] = React.useState([]);
    const [tabIndex, setTabIndex] = useState(0);
    const classes = useStyles();
    const [data, setData] = useState([]);
    
    let parsedData = [];

    useEffect(() => {
        let rawData = JSON.parse( localStorage.getItem("activities") );
        if(rawData === null) {
            setData(0);
            return;
        }
        if(rawData.length < 3) setData(0);
        let parsedData = [];

        let today = '2012-12-6';
        //alert(new Date(today));
        rawData.forEach(curr => {
            if (new Date(curr.startDate) >= new Date(today)){
                console.log(true);
            }


            //alert(new Date(curr.startDate));
            if (new Date(curr.startDate) >= new Date(today)){
                parsedData.push([
                    curr.name + curr.startDate,
                    curr.name,
                    curr.field,
                    new Date(curr.startDate),
                    new Date(curr.endDate),
                    //7 * 60 * 60 * 1000,
                    null,
                    100,
                    null,       
                ])
            }
        })
        setData(parsedData);
    }, []);

    const formatTable = {
		display: "block",
		marginLeft: "auto",
		marginRight: "auto"
	}
    return (
	   <div>
            <div>
            <iframe width="1000" height="600" frameborder="0" src="https://www.bing.com/maps/embed?h=600&w=1000&cp=37.34211233036821~-120.47395737423523&lvl=16&typ=d&sty=h&src=SHELL&FORM=MBEDV8" scrolling="no">
				 </iframe>
            </div>
            {data == 0 ? 
            <h3>There are no agenda</h3> : 
            <GoogleGantt activities={data}/>}
		</div>
    );
};


export default Dashboard;