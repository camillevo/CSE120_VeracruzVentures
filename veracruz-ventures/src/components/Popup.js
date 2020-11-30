import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function Popup(props) {
  const { isOpen, onSubmit, name, field, myHandleClose} = props;
  const [open, setOpen] = React.useState(isOpen);
  const [start, setStart] = React.useState('');
  const [end, setEnd] = React.useState('');

  React.useEffect(() => {
    setOpen(isOpen);
    console.log("fired");
  }, [isOpen])

  const handleSubmit = () => {
    //setOpen(false);
    onSubmit(name, start, end, field);
  };

  const handleClose = () => {
    setOpen(false);
    myHandleClose();
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogContent>
          <DialogContentText>
            {name} on field {field}
          </DialogContentText>
          <TextField
            id="datetime-local"
            label="Start Date and Time"
            type="datetime-local"
            //defaultValue={dateDue}
            onChange={(e) => setStart(e.target.value)}
            InputLabelProps={{
            shrink: true,
            }}
        />
        <h2>  </h2>
        <TextField              
            id="datetime-local"
            label="End Date and Time"
            type="datetime-local"
            //defaultValue={dateDue}
            onChange={(e) => setEnd(e.target.value)}
            InputLabelProps={{
            shrink: true,
            }}
        />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleSubmit()} color="primary">
            Add to Calendar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}