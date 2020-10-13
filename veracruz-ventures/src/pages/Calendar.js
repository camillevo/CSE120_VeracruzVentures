import React from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

const Calendar = props => {
  const classes = useStyles();
  return (
   <div className={classes.content}>
    This is Calendar page 
  </div>
  );
};

export default Calendar;





