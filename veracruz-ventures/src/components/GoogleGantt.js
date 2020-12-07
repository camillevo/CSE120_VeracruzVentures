import React, {useState, useEffect} from 'react';
//import { Chart } from "react-google-charts";
import Chart from "react-google-charts";

// const sampleData = [
//     [
//     { type: 'string', label: 'Task ID' },
//     { type: 'string', label: 'Task Name' },
//     { type: 'string', label: 'Resource' },
//     { type: 'date', label: 'Start Date' },
//     { type: 'date', label: 'End Date' },
//     { type: 'number', label: 'Duration' },
//     { type: 'number', label: 'Percent Complete' },
//     { type: 'string', label: 'Dependencies'}
//     ],
//     [
//     'Research',
//     'Find sources',
//     'first',
//     new Date(2015, 0, 1),
//     new Date(2015, 0, 5),
//     null,
//     100,
//     null
//     ],
//     [
//     'Write',
//     'Write paper',
//     'first',
//     null,
//     new Date(2015, 0, 9),
//     3 * 24 * 60 * 60 * 1000,
//     25,
//     null,
//     ],
//     [
//     'Cite',
//     'Create bibliography',
//     'second',
//     null,
//     new Date(2015, 0, 7),
//     1 * 24 * 60 * 60 * 1000,
//     20,
//     null,
//     ],
// ]

// const setUpArr = [{ type: 'string', label: 'Task ID' },
// { type: 'string', label: 'Task Name' },
// { type: 'string', label: 'Resource' },
// { type: 'date', label: 'Start Date' },
// { type: 'date', label: 'End Date' },
// { type: 'number', label: 'Duration' },
// { type: 'number', label: 'Percent Complete' },
// { type: 'string', label: 'Dependencies'}];

const GoogleGantt = (props) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(props.activities.unshift([{ type: 'string', label: 'Task ID' },
            { type: 'string', label: 'Task Name' },
            { type: 'string', label: 'Resource' },
            { type: 'date', label: 'Start Date' },
            { type: 'date', label: 'End Date' },
            { type: 'number', label: 'Duration' },
            { type: 'number', label: 'Percent Complete' },
            { type: 'string', label: 'Dependencies'}]
        ));
        setData(props.activities);
    }, [props.activities]);

    return(
        <Chart
        width={'930px'}
        height={'400px'}
        chartType="Gantt"
        loader={<div>Loading Chart</div>}
        data={props.activities}
        options={{
            gantt:{
                criticalPathEnabled: false,
                defaultStartDateMillis: new Date(2020, 1, 1),
            },
        }}
        rootProps={{ 'data-testid': '1' }}
        />
    )
}

export default GoogleGantt;