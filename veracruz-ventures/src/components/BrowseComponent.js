import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

export default function BrowseComponent(props) {
	//const {} = props;
	
	const browseComponentStyling = {
		padding: "20px",
        //marginRight: "10%",
        margin: "1% 1%",
        overflow: "auto",
        //display: "inline",
	}
	const viewDataButtonStyling = {
        float: "right",
        display: "inline-block",
		height: "50px",
		width: "100px",
        padding: '10px',
        marginRight: '20px',
        background: props.purchased? "#3f51b5":"#A4C639",
		color: "white",
		border: "none",
	    cursor: "pointer",
	}
	
	return(
        <Paper style={browseComponentStyling} elevation={2}>
            <Typography variant="h6" style={{display: "inline-block", width:"200px", height:"40px"}} noWrap>
                {props.name + '\n'}
            </Typography>
            <Typography variant="body2" style={{display: "inline-block", width:"170px"}}>
                {"Cost per Acre: $" + props.cpa}
            </Typography>
            <Typography variant="body2" style={{display: "inline-block"}}>
                {"Yield: " + props.yld}
            </Typography>
            <button style={viewDataButtonStyling} value={'hi'} onClick={(e) => props.action(e, props)}>
                <Typography variant="button" noWrap>{props.purchased? "View Data":"Buy"}</Typography>
            </button>
        </Paper>
	);
}