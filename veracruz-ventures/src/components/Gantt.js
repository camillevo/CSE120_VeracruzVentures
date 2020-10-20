import { FrappeGantt } from 'frappe-gantt-react';
import React from 'react';

const Gantt = () =>{
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
            id: 'Task 3',
            name: 'sample text 2',
            start: '2020-10-13',
            end: '2020-10-16',
            progress: 20,
            //dependencies: 'Task 2, Task 3'
        }
      ];

    return (
        <div>
            <FrappeGantt
                tasks={tasks}
                viewMode={'Week'}
                onClick={task => console.log(task)}
                onDateChange={(task, start, end) => console.log(task, start, end)}
                onProgressChange={(task, progress) => console.log(task, progress)}
                onTasksChange={tasks => console.log(tasks)}
            />
        </div>

    )

}

export default Gantt;