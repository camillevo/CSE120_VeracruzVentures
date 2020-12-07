import React, {useState, useEffect} from 'react';
import GoogleGantt from '../components/GoogleGantt';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Popup from '../components/Popup';

const Calendar = () => {
    const [data, setData] = useState([]);
    const [popup, setPopup] = useState(false);

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
                null,
                100,
                null,       
            ])
        })
        console.log("old " + parsedData);
        setData(parsedData);
    }, [localStorage.getItem("activities")]);

    useEffect(() => {
        console.log("should rerender");
    }, [data]);

    const manualAdd = (name, start, end, field) => {
        let oldData = JSON.parse( localStorage.getItem("activities"));
        oldData.push({
            name: name,
            field: field,
            startDate: start,
            endDate: end,
        });
        localStorage.setItem("activities", JSON.stringify(oldData));
        setPopup(false);
    }

    return (
    <div>
        <Popup type="manualInput" isOpen={popup} onSubmit={manualAdd} myHandleClose={()=>setPopup(false)} />

        <Typography variant="h4">Your Calendar</Typography>
        <Typography variant="body2" style={{margin: "10px 0px 20px 0px"}}>
            Hover over each task to see field information. To add activities to your calendar, 
            go to Data Overview and click on an activity.
        </Typography>
        {data === 0 ? 
            <h3>You must add 1 or more activities for calendar to display</h3> : 
            <GoogleGantt activities={data}/>}
            
        <Button variant="contained" color="secondary" onClick={() => {
            localStorage.setItem("activities", JSON.stringify([]));
            window.location.reload(false);
        }}>
            Clear Calendar
        </Button>
        <Button variant="contained" color="primary" style={{marginLeft: "15px"}} onClick={() => {
            setPopup(true);
        }}>
            Add Item Manually
        </Button>

    </div>
    )
};


export default Calendar;




