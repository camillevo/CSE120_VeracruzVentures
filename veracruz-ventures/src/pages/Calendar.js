import React, {useState, useEffect} from 'react';
import Gantt from '../components/Gantt';
import GoogleGantt from '../components/GoogleGantt';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Modal from 'react-modal';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };


const Calendar = () => {
    const [data, setData] = useState([]);
    
    let parsedData = [];

    useEffect(() => {
        let rawData = JSON.parse( localStorage.getItem("activities") );
        if(rawData === null) {
            setData(0);
            return;
        }
        if(rawData.length < 3) setData(0);
        let parsedData = [];
        rawData.forEach(curr => {
            parsedData.push([
                curr.name + curr.startDate,
                curr.name,
                curr.field,
                new Date(curr.startDate),
                new Date(curr.endDate),
                //7 * 60 * 60 * 1000,
                null,
                100,
                null,       
            ])
        })
        setData(parsedData);
    }, []);

    //added code ********************************
    var subtitle;
    const [modalIsOpen,setIsOpen] = React.useState(false);
    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      //subtitle.style.color = '#f00';
    }
  
    function closeModal(){
      setIsOpen(false);
    }
    //*********************************************

    return (
    <div>
        <h3>Head to Data Overview to add items to your calendar!</h3>
        {data == 0 ? 
            <h3>You must add 1 or more activities for calendar to display</h3> : 
            <GoogleGantt activities={data}/>}
            
        <Button variant="contained" color="secondary" onClick={() => {
            localStorage.setItem("activities", JSON.stringify([]));
            window.location.reload(false);
        }}>
            Clear Calendar
        </Button>

        {/* added code  */}
        <Button onClick={openModal}>Add</Button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
            <DialogContent>
            <h2 ref={_subtitle => (subtitle = _subtitle)}>Add activities</h2>
            <TextField              
                id="activities"
                label="Activity Name"
                type="text"
                //onChange={(e) => setEnd(e.target.value)}
                InputLabelProps={{
                shrink: true,
                }}
            />
            <h2>
            <TextField
                    id="datetime-local"
                    label="Start Date and Time"
                    type="datetime-local"
                    //defaultValue={dateDue}
                    //onChange={(e) => setStart(e.target.value)}
                    InputLabelProps={{
                    shrink: true,
                    }}
                />
            </h2>
            <TextField              
                id="datetime-local"
                label="End Date and Time"
                type="datetime-local"
                //defaultValue={dateDue}
                //onChange={(e) => setEnd(e.target.value)}
                InputLabelProps={{
                shrink: true,
                }}
            />
            </DialogContent>
                <DialogActions>
                <Button color="primary">
                    Add to Calendar
                </Button>
                </DialogActions>
        </Modal>
    </div>
    )
};


export default Calendar;
