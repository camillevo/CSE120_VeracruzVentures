import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function Popup(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogContent>
          <DialogContentText>
            {props.name} on field {props.field}
          </DialogContentText>
          <TextField
            id="datetime-local"
            label="Start Date and Time"
            type="datetime-local"
            defaultValue={props.dateDue}
            InputLabelProps={{
            shrink: true,
            }}
        />
        <h2>   </h2>
        <TextField              
            id="time"
            label="Duration"
            type="time"
            defaultValue="07:30"
            InputLabelProps={{
            shrink: true,
            }}
            inputProps={{
            step: 300, // 5 min
            }}
        />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Add to Calendar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}