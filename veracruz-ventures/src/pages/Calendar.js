import React, {useState, useEffect} from 'react';
import Gantt from '../components/Gantt';
import GoogleGantt from '../components/GoogleGantt';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const Calendar = () => {
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
        rawData.forEach(curr => {
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
        })
        setData(parsedData);
    }, []);

    return (
    <div>
        <Typography variant="h4">Your Calendar</Typography>
        <Typography variant="body2" style={{margin: "10px 0px 20px 0px"}}>
            Hover over each task to see field information. To add activities to your calendar, 
            go to Data Overview and click on an activity.
        </Typography>
        {data == 0 ? 
            <h3>You must add 1 or more activities for calendar to display</h3> : 
            <GoogleGantt activities={data}/>}
            
        <Button variant="contained" color="secondary" onClick={() => {
            localStorage.setItem("activities", JSON.stringify([]));
            window.location.reload(false);
        }}>
            Clear Calendar
        </Button>

    </div>
    )
};


export default Calendar;




