import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import Grid from '@material-ui/core/Grid';




const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },

}));

const fieldID = [
  { title: 'field 1', plan: 'plan 1', date: 'date 1', activity: 'activity 1'},
  { title: 'field 2', plan: 'plan 2', date: 'date 2', activity: 'activity 2'},
  { title: 'field 2', plan: 'plan 1', date: 'date 3', activity: 'activity 4'},
  { title: 'field 3', plan: 'plan 3', date: 'date 3', activity: 'activity 3'},
];

// indexOf

const BrowseBestPractice = () => {
    const classes = useStyles();
    return (
     <div className={classes.content}>
      <div className={classes.toolbar} />
      This is Browse page 
      <Grid container direction={"row"} spacing={5}>
      <Grid item>   
      <div  style={{ width: 300 }}>
      <Autocomplete
        id="search field"
        freeSolo
        options={fieldID.map((option) => option.title)}
        // onChange={handleInputChange}
        renderInput={(params) => (
          <TextField {...params} label="Search Field" margin="normal" variant="outlined" />
        )}
        
      />
      </div>
      </Grid>
      <Grid item>
      <div  style={{ width: 300 }}>
      <Autocomplete
        id="search plan"
        freeSolo
        options={fieldID.map((option) => option.plan)}
        renderInput={(params) => (
          <TextField {...params} label="Search plan" margin="normal" variant="outlined" />
        )}
        
      />
      </div>
      </Grid>
      <Grid item>
      <div  style={{ width: 300 }}>
      <Autocomplete
        id="search date"
        freeSolo
        options={fieldID.map((option) => option.date)}
        renderInput={(params) => (
          <TextField {...params} label="Search date" margin="normal" variant="outlined" />
        )}
        
      />
      </div>
      </Grid>
      <Grid item>
      <div  style={{ width: 300 }}>
      <Autocomplete
        id="search activity"
        freeSolo
        options={fieldID.map((option) => option.activity)}
        renderInput={(params) => (
          <TextField {...params} label="Search activity" margin="normal" variant="outlined" />
        )}
        
      />
      </div>
      </Grid>
    </Grid>

    </div>
    );
};

const Browse = props => {
    const classes = useStyles();
    return (
     <div className={classes.content}>
      This is Browse page 
      <Grid container direction={"row"} spacing={5}>
      <Grid item>   
      <div  style={{ width: 300 }}>
      <Autocomplete
        id="search field"
        freeSolo
        options={fieldID.map((option) => option.title)}
        // onChange={handleInputChange}
        renderInput={(params) => (
          <TextField {...params} label="Search Field" margin="normal" variant="outlined" />
        )}
        
      />
      </div>
      </Grid>
      <Grid item>
      <div  style={{ width: 300 }}>
      <Autocomplete
        id="search plan"
        freeSolo
        options={fieldID.map((option) => option.plan)}
        renderInput={(params) => (
          <TextField {...params} label="Search plan" margin="normal" variant="outlined" />
        )}
        
      />
      </div>
      </Grid>
      <Grid item>
      <div  style={{ width: 300 }}>
      <Autocomplete
        id="search date"
        freeSolo
        options={fieldID.map((option) => option.date)}
        renderInput={(params) => (
          <TextField {...params} label="Search date" margin="normal" variant="outlined" />
        )}
        
      />
      </div>
      </Grid>
      <Grid item>
      <div  style={{ width: 300 }}>
      <Autocomplete
        id="search activity"
        freeSolo
        options={fieldID.map((option) => option.activity)}
        renderInput={(params) => (
          <TextField {...params} label="Search activity" margin="normal" variant="outlined" />
        )}
        
      />
      </div>
      </Grid>
    </Grid>

    </div>
    );
};

export default Browse;



