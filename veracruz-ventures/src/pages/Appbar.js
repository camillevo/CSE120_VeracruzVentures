import React from 'react'; 
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    container: {
      display: "flex"
    }
});

const Appbar = props => {
    const classes = useStyles();
    return (
        <div className = {classes.container}>
            <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
            <Typography variant="h6" noWrap>
                Clipped drawer
            </Typography>
            </Toolbar>
            </AppBar>
        </div>
    );
};
    
export default Appbar;