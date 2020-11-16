import React from 'react';
import ReactDOM from 'react-dom';
import Typography from '@material-ui/core/Typography';
import YieldContainer from './YieldContainer';
import Popup from 'reactjs-popup';


// placeholder map
import map from './placeholderMap.jpg';

class ThePopUp extends React.Component {
    constructor(props){
	super(props);
	this.state = {
	    title: 'Heres the title',
	    message: 'Heres the message <br /> line 2',
	    showPopUp: 'block',
	};
    }
    displayThePopUp = (props) => {
	this.setState({title: 'props.title'});
	this.setState({message: 'props.comment'});
	this.setState({showPopUp: 'block'});
    }
    closeThePopUp = () => {
	//alert('hi');
	this.setState({showPopUp: 'none'});
    }
    getTheTitle = () => {
	return(this.state.title);
    }
    getTheMessage = () => {
	return(this.state.message);
    }
    
    initiatePopUp = (props) => {
	this.displayThePopUp(props);
	return(<div>hi</div>);
    }
    render(){
	const thePopUp = {
	    display: this.state.showPopUp ,
	    position: 'fixed',
	    margin: 'auto 10%',
	    zIndex: '1',
	    width: window.innerWidth/2,
	    height: window.innetHeight/2,
	    wordWrap: 'break-word',
	    overflowY: 'auto',
	    boxShadow: '2px 2px 4px grey',
	}
	const popUpHeader = {
	    background: '#3f51b5',
	    padding: '20px',
	    color: 'white',
	}
	const popUpBody = {
	    background: '#FFFFFF',
	    padding: '20px',
	}
	const close = {
	    color: 'white',
	    float: 'right',
	    fontSize: '20px',
	    fontWeight: 'bold',
	    cursor: 'pointer',
	}
	const myYieldsDiv = {
	    width: window.innerWidth/2-200,
	    height: window.innerHeight-200,
	    border: '1px solid grey',
	    //overflowX: 'wrap',
	    overflowY: 'auto',
	    overflowX: 'wrap',
	}
	const yieldCellOne = {
	    width: window.innerWidth/2-214,
	    height: '100px',
	    padding: '10px',
	    background: 'linear-gradient(#FAFAFA, 95%, #E0E0E0)',
	    '& button:hover': {
		textDecoration:'underline',
	    },
	    textAlign: 'left',
	    border: 'none',
	    cursor: 'pointer',
	}
	
    const overallLayout = {
	width: window.innerWidth-250,
	justifyContent: 'top',
	alignItems: 'top',
    }
    const mapDiv = {
	width: window.innerWidth/2-130,
	height: window.innerHeight/1.8,
	border: '2px',
	overflowX: 'auto',
	overflowY: 'auto', 
    }
	function TheYieldContainer(props){
	    return (
		<button style={yieldCellOne} onClick={props.onclick}><b>{props.title}</b><br />{props.comment}</button>
	    );
	}
	return(
	    <div>
		<div style={thePopUp} class='myPopUp'>
		    <div style = {popUpHeader}>
			<span style={close} onClick={this.closeThePopUp}>X</span>
			<Typography variant="h6" noWrap>{this.state.title}</Typography>
		    </div>
		    <div style = {popUpBody}>
			{this.state.message}
		    </div>
		</div>
		<table style = {overallLayout}><tr><td>
	    
		<div>
		     <iframe width="500" height="400" frameborder="0" src="https://www.bing.com/maps/embed?h=400&w=500&cp=37.34211233036821~-120.47395737423523&lvl=16&typ=d&sty=h&src=SHELL&FORM=MBEDV8" scrolling="no">
		     </iframe>
		</div>
		</td>
		<td>
		<Typography variant="h6" noWrap>My Yields</Typography>
		<div style = {myYieldsDiv}>
		    <TheYieldContainer title="this is the title" comment = "this is a comment" onclick={this.initiatePopUp}/>
		    <TheYieldContainer title="here is title two" comment = "comment number 2" onclick={this.displayThePopUp}/>
		    <TheYieldContainer title="the third" comment = "3 comments in" onclick={this.displayThePopUp}/>
		    <TheYieldContainer title={"hi"} comment = "this is a comment" onclick={this.displayThePopUp}/>
		    <TheYieldContainer title="this is the title" comment = "this is a comment" onclick={this.displayThePopUp}/>
		    <TheYieldContainer title="this is the title" comment = "this is a comment" onclick={this.displayThePopUp}/>
		    <TheYieldContainer title="this is the title" comment = "this is a comment" onclick={this.displayThePopUp}/>
		    <TheYieldContainer title="this is the title" comment = "this is a comment" onclick={this.displayThePopUp}/>
		    <TheYieldContainer title="this is the title" comment = "this is a comment" onclick={this.displayThePopUp}/>
		    <TheYieldContainer title="this is the title" comment = "this is a comment" onclick={this.displayThePopUp}/>
		    <TheYieldContainer title="this is the title" comment = "this is a comment" onclick={this.displayThePopUp}/>
		    <TheYieldContainer title="this is the title" comment = "this is a comment" onclick={this.displayThePopUp}/>
		    <TheYieldContainer title="this is the title" comment = "this is a comment" onclick={this.displayThePopUp}/>
		</div>
		</td></tr></table>
	    </div>
	);
    }
}

class PopUpHelper extends ThePopUp{
    render(){
	return (
	    <div>
	    </div>
	);
    }
}

const Dashboard = () => {
    const todayTasksDiv = {
	width: window.innerWidth/2-130,
	height: window.innerHeight/6,
	border: '2px',
	overflowX: 'auto',
	overflowY: 'auto', 
    }
    return( 
	<div>
	    <ThePopUp />
	    <PopUpHelper />
	    <div>
		<Typography variant="h6" noWrap>Tasks For This Week</Typography>
		<div style = {todayTasksDiv}>
		    6:00 - Work on Page for CSE 120 <br />
		    8:30 - Prepare for lesson and drink coffee <br />
		    9:30 - CSE 120 group meeting <br />
		    12:00 - sleep <br />
		    1:00 - cse 111 presentation <br />
		    4:30 - demp cse 160 project <br />
		    7:00 - dinner <br />
		    8:00 - work on cse 120 page <br />
		    12:00 - work on cse 160 project 3 <br />
		</div>
	    </div>
	</div>
	
    );
};

export default Dashboard ;




