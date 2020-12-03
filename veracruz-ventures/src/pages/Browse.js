import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
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
    contentStyling: {
		//window.innerHeight/1.2
		width: window.innerWidth-300,
		height: window.innerHeight/1.2,
		border: '2px',
		overflowY: 'auto', 
    },
    tabContentStyling: {
		//height: window.innerHeight/1.8,
		height: "70%",
		//padding: '10px',
		overflowY: 'auto',
		//boxShadow: '0px 4px 4px #CCCCCC',
	}
}));

function TabContent(props) {
    const {value, index, handlePopup} = props;
    let rtn = [];
    console.log(data);
    for(let curr in data){
        // on 0 show false
        console.log(data[curr]);
        if(index == 0 && data[curr].purchased == false) {
            rtn.push(<BrowseComponent {...data[curr]} action={handlePopup} />);
        }
        if(index == 1 && data[curr].purchased == true) {
            rtn.push(<BrowseComponent {...data[curr]} action={handlePopup} />);
        }
    }
    return (
        <div hidden={value !== index} >
			{rtn}
        </div>
    );
}

const data = [
    {name: "Bob", cpa: 213, yld: 500, purchased: false},
    {name: "Tom", cpa: 67, yld: 430, purchased: false},
    {name: "Jørn", cpa: 90, yld: 700, purchased: false},
    {name: "Jennifer", cpa: 148, yld: 278, purchased: false},
    {name: "Nan", cpa: 89, yld: 745, purchased: false},
    {name: "Hitoshi", cpa: 157, yld: 980, purchased: false},
    {name: "Sven", cpa: 190, yld: 678, purchased: false},
    {name: "Julie", cpa: 201, yld: 387, purchased: true},
    {name: "Steve", cpa: 113, yld: 600, purchased: true},
    {name: "Raku", cpa: 95, yld: 421, purchased: true}, 
];
    
const Browse = props => {
    const classes = useStyles();
    const [tabIndex, setTabIndex] = useState(0);
    const [openPopup, setOpenPopup] = useState(false);
    const [popupText, setPopupText] = useState('');

    const handleChange = (event, value) => {
        setTabIndex(value);
    };
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
    
    
    return (
     <div className={classes.root} className={classes.contentStyling}>
		<BrowsePopup isOpen={openPopup} txt={popupText} action={handlePopup}/>
		
		<Typography variant="h4">Browse Best Practices</Typography>
        <Typography variant="body2" style={{margin: "10px 0px 20px 0px"}}>
            Learn from other's successes by purchasing their tried and true Best Practices. You'll be able to
            view all of their daily farm activities and add to your calendar. You can view all of your purchased 
            Best Practices here too.
        </Typography>

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
        <div className={classes.tabContentStyling}>
        <TabContent value={tabIndex} index={0} handlePopup={handlePopup}/>
        <TabContent value={tabIndex} index={1} handlePopup={handlePopup}/>
        </div>
    </div>
    );
};

export default Browse;