import React from 'react';

import './Task.css';

const Task = (props) => {
  return (
    <div className="task">
      Task {props.task.id} {props.task.title}
    </div>
  )
};

export default Task;
