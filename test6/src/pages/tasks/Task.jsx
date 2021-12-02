import React from 'react';

import './Task.css';

const Task = (props) => {
  return (
    <div className="task">
      Task {props.id} {props.title}
    </div>
  )
};

export default Task;
