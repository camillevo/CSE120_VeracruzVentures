import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import BrowseComponent from "../components/BrowseComponent";
import BrowsePopup from "../components/BrowsePopup";
import {testData} from "./testData";

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
    const {value, index, buttonAction, data} = props;
    let rtn = [];
    //console.log(data);
    for(let curr in data){
        // on 0 show false
        //console.log(data[curr]);
        if(index === 0 && data[curr].purchased === false) {
            rtn.push(<BrowseComponent {...data[curr]} action={buttonAction} />);
        }
        if(index === 1 && data[curr].purchased === true) {
            rtn.push(<BrowseComponent {...data[curr]} action={buttonAction} />);
        }
    }
    return (
        <div hidden={value !== index} >
			{rtn}
        </div>
    );
}
    
const Browse = props => {
    const classes = useStyles();
    const [tabIndex, setTabIndex] = useState(0);
    const [openPopup, setOpenPopup] = useState(false);
    const [popupText, setPopupText] = useState({});
    const [data, setData] = useState([]);

    const handleChange = (event, value) => {
        setTabIndex(value);
    };
    const handlePopup = (event, value) => {
        setOpenPopup(!openPopup);
        if(openPopup) {
            setOpenPopup(false);
            setPopupText({name: "", cpa: 0, yld: 0, purchased: true});
        } else {
            setOpenPopup(true);
            setPopupText(value);
        } 
	};
    
    const purchase = (event, value) => {
        let temp = data.slice();
        (temp.find( ({ name }) => name === value )).purchased = true;
        setData(temp);
        localStorage.setItem("practices", JSON.stringify(temp));
    }

    const seeData = (event, value) => {
        let path = '/browse/' + value.name;
        //<Link to={`/browse/${value.name}`}>{user.name}'s Page</Link>
        window.location.href = path;
    }

	React.useEffect(() => {
		setOpenPopup(openPopup);
    }, [openPopup]);
    
    
	React.useEffect(() => {
		if(localStorage.getItem("practices") == null) {
            localStorage.setItem("practices", JSON.stringify(testData));
        }
        setData(JSON.parse( localStorage.getItem("practices")));
	}, [])
    
    return (
     <div className={[classes.root, classes.contentStyling]}>
		<BrowsePopup isOpen={openPopup} txt={popupText} handleClick={purchase} action={handlePopup}/>
		
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
        <TabContent value={tabIndex} index={0} buttonAction={handlePopup} data={data}/>
        <TabContent value={tabIndex} index={1} buttonAction={seeData} data={data}/>
        </div>
    </div>
    );
};

export default Browse;