import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import Grid from '@material-ui/core/Grid';
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import BrowseComponent from "../components/BrowseComponent";
import BrowsePopup from "../components/BrowsePopup";

const useStyles = makeStyles((theme) => ({
	root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      width: '100%',
    },
  content: {
    //flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    //padding: theme.spacing(3),
  },
}));

const BrowseBestPractice = () => {
    const classes = useStyles();
    return (
     <div className={classes.content}>

    </div>
    );
};

function TabContent(props) {
    const {value, index, content} = props;
    return (
        <div hidden={value !== index} >
			{content}
        </div>
    );
}
function PopupShown(props) {
	const {value, content} = props;
	return (
		<div>
			<BrowsePopup isOpen={value} txt={content}/>
		</div>
	);
}

const Browse = props => {
	
	var browseUsers = ["Bob", "Tom", "Jørn", "Jennifer", "Nan", "Hitoshi", "Sven"];
	var purchaseUsers = ["Julie", "Steve", "Raku", "Hamid", "Christian"];
	
    const classes = useStyles();
    const [tabIndex, setTabIndex] = useState(0);
    const handleChange = (event, value) => {
        setTabIndex(value);
        //handleGetData(value);
    };
    const [openPopup, setOpenPopup] = useState(false);
    const [popupText, setPopupText] = useState('');
    const handlePopup = (event, value) => {
		if(openPopup === false){
			setOpenPopup(true);
			setPopupText(value);
		}
		else{
			setOpenPopup(false);
			setPopupText('');
		}
	};
	
	React.useEffect(() => {
		setOpenPopup(openPopup);
	}, [openPopup])
    
    function ShowBrowseData () {
		var rtn = new Array(browseUsers.length);
		for(var i = 0; i < browseUsers.length; i ++){
			rtn[i] = <BrowseComponent title={browseUsers[i] + '\'s Data'} index={i} value="hi" action={handlePopup} />;
		}
		return(<div>{rtn}</div>);
	}
	
	function ShowPurchaseData () {
		var rtn = new Array(purchaseUsers.length);
		for(var i = 0; i < purchaseUsers.length; i ++){
			rtn[i] = <BrowseComponent title={purchaseUsers[i] + '\'s Data'} index={i} action={handlePopup} />;
		}
		return(<div>{rtn}</div>);
	}
    
    const contentStyling = {
		//window.innerHeight/1.2
		width: window.innerWidth-300,
		height: window.innerHeight/1.2,
		border: '2px',
		overflowY: 'auto', 
    }
    const tabContentStyling = {
		//height: window.innerHeight/1.8,
		height: "70%",
		padding: '10px',
		overflowY: 'auto',
		boxShadow: '0px 4px 4px #CCCCCC',
	}
	function BrowseContent () {
		return(
			<div>
				Browse Practices <br />
				<ShowBrowseData />
				
			</div>
		);
	}
	function PurchaseContent () {
		return (
			<div>
				Purchase Practices <br />
				<ShowPurchaseData />
			</div>
		);
	}
    
    return (
     <div className={classes.root} style={contentStyling}>
		<BrowsePopup isOpen={openPopup} txt={popupText} action={handlePopup}/>
		
		<h3>Browse Best Practices or View Purchased Practices</h3>
		<AppBar position="static" color="default">
			<Tabs
				value={tabIndex}
				onChange={handleChange}
				variant="fullWidth"
			>
				<Tab label="Browse Best Practices"/>
				<Tab label="Purchased Practices"/>
			</Tabs>
		</AppBar>
		<div style={tabContentStyling}>
			<TabContent value={tabIndex} index={0} content={<BrowseContent />} />
			<TabContent value={tabIndex} index={1} content={<PurchaseContent />} />
		</div>
    </div>
    );
};

export default Browse;



