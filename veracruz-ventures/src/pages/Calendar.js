import React, {useState, useEffect} from 'react';
import Gantt from '../components/Gantt';
import GoogleGantt from '../components/GoogleGantt'

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
        <h3>Head to Data Overview to add items to your calendar!</h3>
        {data == 0 ? 
            <h3>You must add 3 or more activities for calendar to display</h3> : 
            <GoogleGantt activities={data}/>}
    </div>
    )
};


export default Calendar;




