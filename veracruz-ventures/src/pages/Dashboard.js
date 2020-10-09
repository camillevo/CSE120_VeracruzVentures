import React from 'react';
import Typography from '@material-ui/core/Typography';
import YieldContainer from './YieldContainer';


// placeholder map
import map from './placeholderMap.jpg';

const Dashboard = () => {
    const mapDiv = {
	width: window.innerWidth/2-130,
	height: window.innerHeight/1.8,
	border: '2px',
	overflowX: 'auto',
	overflowY: 'auto', 
    }
    const todayTasksDiv = {
	width: window.innerWidth/2-130,
	height: window.innerHeight/6,
	border: '2px',
	overflowX: 'auto',
	overflowY: 'auto', 
    }
    const myYieldsDiv = {
	width: window.innerWidth/2-200,
	height: window.innerHeight-200,
	border: '2px',
	//overflowX: 'wrap',
	overflowY: 'auto',
    }
    const overallLayout = {
	justifyContent: 'top',
	alignItems: 'top',
    }
    return( 
	<div >
	    <table style = {overallLayout}><tr><td>
	    <div style = {mapDiv}>
		<img src={map} width='1000px' />
	    </div>
	    <div>
		<Typography variant="h6" noWrap>Tasks For Today</Typography>
		<div style = {todayTasksDiv}>
		    6:00 - Work on Page for CSE 120 <br />
		    8:30 - Prepare for lesson and drink coffee <br />
		    9:30 - CSE 120 group meeting <br />
		    12:00 - Lesson <br />
		    1:00 - sleep <br />
		    4:30 - cse 160 lab <br />
		    7:00 - dinner <br />
		    8:00 - work on databases lab 5 <br />
		    12:00 - work on cse 160 project 2 <br />
		</div>
	    </div>
	    </td>
	    <td>
		<Typography variant="h6" noWrap>My Yields</Typography>
		<div style = {myYieldsDiv}>
		    <YieldContainer title="this is the title" />
		    <YieldContainer title="this is the title" />
		    <YieldContainer title="this is the title" />
		    <YieldContainer title="this is the title" />
		    <YieldContainer title="this is the title" />
		    <YieldContainer title="this is the title" />
		    <YieldContainer title="this is the title" />
		    <YieldContainer title="this is the title" />
		    <YieldContainer title="this is the title" />
		    <YieldContainer title="this is the title" />
		</div>
	    </td></tr></table>
	</div>
	
    );
};

export default Dashboard ;




