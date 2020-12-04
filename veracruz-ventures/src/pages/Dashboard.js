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

function GenerateList(props) {
    const {thisWeek, data} = props;
    let rtn = [];
    for(let curr in data){
        rtn.push(
            <ListItem>
            <ListItemText
                primary={data[curr].name + ", " + data[curr].field}
                secondary= {"Due: " + data[curr].endDate.toLocaleString()}
            />
            </ListItem>
        );
    }
    return (
        <List dense={false}>
            {rtn}
        </List>
    );
  }

const Dashboard = () => {
    const classes = useStyles();
    const [data, setData] = useState([]);

    useEffect(() => {
        let rawData = JSON.parse( localStorage.getItem("activities") );
        let parsedData = [];
        rawData.forEach(curr => {
            parsedData.push({
                name: curr.name,
                field: curr.field,
                endDate: new Date(curr.endDate),
            })
        })
        console.log(parsedData);
        setData(parsedData);
    }, []);

    return (
	   <div>
            <div className = {classes.map}>
            <iframe width="800" height="600" frameborder="10" src="https://www.bing.com/maps/embed?h=800&w=1000&cp=37.34211233036821~-120.47395737423523&lvl=16&typ=d&sty=h&src=SHELL&FORM=MBEDV8" scrolling="no">
				 </iframe>
            </div>
            <Typography variant="h5" className={classes.text}>
                This Week's Tasks
                <GenerateList data={data}/>
            </Typography>
		</div>
    );
};


export default Dashboard;