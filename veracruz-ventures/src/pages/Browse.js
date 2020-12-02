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
    const classes = useStyles();
    const [tabIndex, setTabIndex] = useState(0);
    const handleChange = (event, value) => {
        setTabIndex(value);
        //handleGetData(value);
    };
    const [openPopup, setOpenPopup] = useState(0);
    const handlePopup = (event, value) => {
		setOpenPopup(value);
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
				<BrowseComponent title="Bob's Browse" value={'false'} action={handlePopup}/>
				<BrowseComponent title="Joe's Browse"/>
				<BrowseComponent title="Jørn's Browse"/>
				<BrowseComponent title="Jennifer's Browse"/>
				<BrowseComponent title="Nan's Browse"/>
				<BrowseComponent title="Christian's Browse"/>
				<BrowseComponent title="Sven's Browse"/>
			</div>
		);
	}
	function PurchaseContent () {
		return (
			<div>
				Purchase Practices
			</div>
		);
	}
    
    return (
     <div className={classes.root} style={contentStyling}>
		<BrowsePopup />
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



