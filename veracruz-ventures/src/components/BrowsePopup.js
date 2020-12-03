import React, {useState} from 'react';
import Typography from '@material-ui/core/Typography';


export default function BrowsePopup(props) {
	const {isOpen, txt, action} = props;
	const [open, setOpen] = React.useState(isOpen);

	React.useEffect(() => {
		setOpen(isOpen);
	}, [isOpen])
	
	const backStyling = {
	    zIndex: '1',
		position: 'fixed', 
		backgroundColor: 'rgba(0,0,0,0.4)', 
		left: '0',
		top: '0',
		width: '100%', 
		height: '100%', 
	}
	const browsePopupStyling = {
	    position: 'fixed',
		top: '50%',
		left: '50%',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',

	    width: "30%",
	    height: "20%",
	    wordWrap: 'break-word',
	    overflowY: 'auto',
	    boxShadow: '0px 4px 4px #CCCCCC',
	    
	    background: "white",
	    padding: "20px",
	}
	const browsePopupButtonStyling = {
		height: "50px",
		width: "200px",
	    padding: '10px',
		background: "#3f51b5",
		color: "white",
		border: "none",
	    cursor: "pointer",
	    
	}
	const browseCloseButtonStyling = {
		background: "#00000000",
		color: "grey",
		border: "none",
		cursor: "pointer",
		fontSize: '20px',
		padding: '5px',
		float: "right",
	}
	
	return(
		<div style={backStyling} hidden={!(open)}>
		<div style={browsePopupStyling}>
			<button style={browseCloseButtonStyling} onClick={action}><b>X</b></button>
			<center>
			<h3> View this data? {txt}</h3>
			<form action="https://paypal.com" target="_blank">
				<button style={browsePopupButtonStyling} type="submit">
					<Typography variant="h7" noWrap>Click Here to Purchase</Typography>
				</button>
			</form>
			</center>
		</div>
		</div>
	);
}