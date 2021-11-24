import React, { useState } from 'react';

import Task from './Task';
import './TaskList.css';

const TaskList = () => {
  const initialTasks = [
    { id: 1, title: 'Ir al cine' },
    { id: 2, title: 'Pasear el perro'},
    { id: 3, title: 'Comprar fruta' },
  ];

  const [tasks, setTasks] = useState(initialTasks);

  const addTask = () => {
    const newTask = { id: Math.random(), title: 'Nueva tarea' };
    const newTasks = [...tasks, newTask];
    setTasks(newTasks);
  };

  return (
    <div className="taskList">
      {tasks.map(task => <Task {...task} key={task.id} />)}
      <button onClick={addTask} className="addTask">Add task</button>
    </div>
  )
};

export default TaskList;
