import React, {useState, useEffect} from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import FilterVintageIcon from '@material-ui/icons/FilterVintage';
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

// const options = {
//     filterType: 'checkbox',
//     selectableRows: 'none',
//     print: 'false',
//     tableBodyHeight: '20%',
//     tableBodyMaxHeight: '20%',
// };

function GenerateList(props) {
    const {thisWeek, data} = props;
    let rtn = [];
    for(let curr in data){
        rtn.push(
            <ListItem>
                <ListItemIcon>
                    <FilterVintageIcon />
                </ListItemIcon>
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
        let today = new Date(); // today's date
        let dayOfWeek = today.getDay() // today day of week
        let weekStart = new Date(today.setDate(today.getDate() - (dayOfWeek - 1)));
        let weekEnd = new Date(today.setDate(weekStart.getDate() + 6))

        //alert(weekStart + "          "  + weekEnd);
        rawData.forEach(curr => {
            let taskStart = new Date(curr.startDate); 
            let taskEnd = new Date(curr.endDate);
            if ((taskStart >= weekStart && taskStart <= weekEnd) || 
                (taskEnd >= weekStart && taskEnd <= weekEnd) ||
                (taskStart <= weekStart && taskEnd >= weekEnd)) {
                parsedData.push({
                    name: curr.name,
                    field: curr.field,
                    endDate: new Date(curr.endDate),
                })
            }
        })
        console.log(parsedData);
        setData(parsedData);
    }, []);

    return (
	   <div>
            <div className = {classes.map}>
            <iframe width="700" height="500" frameborder="10" src="https://www.bing.com/maps/embed?h=800&w=1000&cp=37.34211233036821~-120.47395737423523&lvl=16&typ=d&sty=h&src=SHELL&FORM=MBEDV8" scrolling="no">
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