import { FrappeGantt } from 'frappe-gantt-react';
import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
      //flexGrow: 1,
      //backgroundColor: theme.palette.background.paper,
      width: 950,
    }
  }));


const Gantt = () =>{
    const classes = useStyles();

    let tasks = [
        {
          id: 'Task 1',
          name: 'Redesign website',
          start: '2020-10-9',
          end: '2020-10-10',
          progress: 20,
          //dependencies: 'Task 2, Task 3'
        },
        {
            id: 'Task 2',
            name: 'sample text',
            start: '2020-10-12',
            end: '2020-10-14',
            progress: 20,
            //dependencies: 'Task 2, Task 3'
        },
        {
           // id: 'Task 3',
            name: 'sample text 2',
            start: '2020-10-13',
            end: '2020-10-16',
            //progress: 20,
            //dependencies: 'Task 2, Task 3'
        }
      ];

    return (
        <div className={classes.root}>
            <FrappeGantt
                tasks={tasks}
                viewMode={'Day'}
                onClick={task => console.log(task)}
                customPopupHtml= {function(task) {
                    // the task object will contain the updated
                    // dates and progress value
                    const end_date = task._end.format('MMM D');
                    return `
                      <div class="details-container">
                        <h5>${task.name}</h5>
                        <p>Expected to finish by ${end_date}</p>
                        <p>${task.progress}% completed!</p>
                      </div>
                    `;
                  }
                }
                onDateChange={(task, start, end) => console.log(task, start, end)}
                onProgressChange={(task, progress) => console.log(task, progress)}
                onTasksChange={tasks => console.log(tasks)}
            />
        </div>

    )

}

export default Gantt;