import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import Grid from '@material-ui/core/Grid';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';


const useStyles = makeStyles((theme) => ({
  content: {
    //flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    //padding: theme.spacing(3),
  },

}));

const rows = [
  { field: 'field 1', plan: 'plan 1', date: 'date 1', activity: 'activity 1'},
  { field: 'field 2', plan: 'plan 2', date: 'date 2', activity: 'activity 2'},
  { field: 'field 2', plan: 'plan 1', date: 'date 3', activity: 'activity 4'},
  { field: 'field 3', plan: 'plan 3', date: 'date 3', activity: 'activity 3'},
];

const columns = [
  { id: 'field', label: 'Field', minWidth: 170 },
  { id: 'plan', label: 'Plan', minWidth: 100 },
  { id: 'date', label: 'Date', minWidth: 100},
  { id: 'activity', label: 'activity', minWidth:100}
];

const BrowseBestPractice = () => {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [change, setOutput] = React.useState('');
    const [vars, setVars] = React.useState({
                                              field: "",
                                              plan: "",
                                              date: "",
                                              activity: ""
                                              });
    
    const handleChange = (e, values) => {
      alert("id: " + e.currentTarget.id + ", value: " + values);
      setVars(prevVars => ({ ...prevVars, [e.currentTarget.id]: values }));
    }

    const onTagsChange = (event, values) => {
      
      setOutput(values);
      alert(values);
    }

    const returnValue = () => {
      alert(change)
      return change;
    }
    // const handleChange = (event, input) =>{
    //   // setOutput(input);
    //   console.log(input);
    // };

    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };

    return (
      <div className={classes.content}>
      This is Browse page 
      <Grid container direction={"row"} spacing={5}>
      <Grid item>   
      <div  style={{ width: 300 }}>
      <Autocomplete
        id="field"
        freeSolo
        options={rows.map((option) => option.field)}
        // onInputChange = {() => {
        //   handleChange(event,'field');
        // }}
        name="field"
        onInputChange={handleChange}

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
        
        options={rows.map((option) => option.plan)}
        onInputChange={onTagsChange}
        renderInput={(params) => (
          <TextField {...params} label="Search plan" margin="normal" variant="outlined" />
        )}
        
        //value={this.state.value}
        //onInputChange = {console.log(this.state.value)
      />
      </div>
      </Grid>
      <Grid item>
      <div  style={{ width: 300 }}>
      <Autocomplete
        id="search date"
        freeSolo
        options={rows.map((option) => option.date)}
        onInputChange={onTagsChange}
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
        options={rows.map((option) => option.activity)}
        onInputChange={onTagsChange}
        renderInput={(params) => (
          <TextField {...params} label="Search activity" margin="normal" variant="outlined" />
        )}
        
      />
      </div>
      </Grid>
    </Grid>





      <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              const value = row.field;


              if (value != change){
                return




              } else {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
                }
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 20]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
    </div>
    );
};  


