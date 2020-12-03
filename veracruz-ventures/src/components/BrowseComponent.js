import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


export default function BrowseComponent(props) {
	const {title, action, purchased, val} = props;
	
	const browseComponentStyling = {
		padding: "20px",
		marginRight: "10%",
		overflow: "auto",
	}
	const viewDataButtonStyling = {
		float: "right",
		height: "50px",
		width: "100px",
	    padding: '10px',
		background: "#3f51b5",
		color: "white",
		border: "none",
	    cursor: "pointer",
	}
	
	
	return(
		<div>
			<div style={browseComponentStyling}>
				<Typography variant="h8" noWrap>{props.title}</Typography>
				<button style={viewDataButtonStyling} value={'hi'} onClick={action}>
					<Typography variant="h7" noWrap>View Data</Typography>
				</button>
			</div>
			<hr />
		</div>
	);
}
