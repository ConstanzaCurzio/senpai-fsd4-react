import React from 'react';

import './Task.css';

const Task = (props) => {

  return (
    <div className="task">
      Task {props.id} {props.name}
      <button onClick={() => props.onDelete(props.id)}>🗑️</button>
    </div>
  )
};

export default Task;
