import React, {useState, useEffect} from 'react';
import MUIDataTable from "mui-datatables";
import { makeStyles } from "@material-ui/core/styles";
import GoogleGantt from '../components/GoogleGantt';
import Typography from '@material-ui/core/Typography';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
//import { Chart } from "frappe-charts";

const useStyles = makeStyles((theme) => ({
	root: {
	  flexGrow: 1,
	  backgroundColor: theme.palette.background.paper,
	  width: '100%',
	  position: 'relative'
    },
    map: {
        float: "left",
        marginLeft: "30px",
    },
    text: {
        marginLeft: "30px",
        float: "right",
    }
}));







const options = {
    filterType: 'checkbox',
    selectableRows: 'none',
    print: 'false',
    tableBodyHeight: '20%',
    tableBodyMaxHeight: '20%',
};

function generate(element) {
    return parsedData.map((value) =>
      React.cloneElement(element, {
        key: value,
      }),
    );
  }

const Dashboard = () => {
    const [rows, setRows] = React.useState([]);
    const [agRows, setAgRows] = React.useState([]);
    const [tabIndex, setTabIndex] = useState(0);
    

    const classes = useStyles();
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);

    const [data, setData] = useState([]);


    useEffect(() => {
        let rawData = JSON.parse( localStorage.getItem("activities") );
        let parsedData = [];
        rawData.forEach(curr => {
            parsedData.push([
                curr.name,
                new Date(curr.endDate),
            ])
        })
        setData(parsedData);
    }, []);

    return (
	   <div>
            <div className = {classes.map}>
            <iframe width="1000" height="800" frameborder="10" src="https://www.bing.com/maps/embed?h=800&w=1000&cp=37.34211233036821~-120.47395737423523&lvl=16&typ=d&sty=h&src=SHELL&FORM=MBEDV8" scrolling="no">
				 </iframe>
            </div>
            <Typography className={classes.text}>
                List
                <List dense={dense}>
                {generate(
                    <ListItem>
                    <ListItemText
                        primary="Single-line item"
                        secondary= "sec"
                    />
                    </ListItem>,
                )}
                </List>
            </Typography>
		</div>
    );
};


export default Dashboard;