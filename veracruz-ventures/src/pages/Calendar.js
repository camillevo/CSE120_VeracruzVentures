import React from 'react';
import Gantt from '../components/Gantt';

const Calendar = () => {
    return (
    <div>
        <Gantt />
    </div>
    )
};

const Calendar = props => {
  const classes = useStyles();
  return (
   <div className={classes.content}>
    This is Calendar page 
  </div>
  );
};

export default Calendar;





