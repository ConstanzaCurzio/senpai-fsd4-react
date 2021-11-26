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

  const [newValue, setNewValue] = useState({
    id: '',
    task: '',
  });

  const [errors, setErrors] = useState({
    id: '',
    task: '',
  })

  const writeId = (e) => {
    setNewValue({ ...newValue, 'id': Number(e.target.value) });
    setErrors({ ...errors, 'id': false })
  }

  const writeTask = (e) => {
    setNewValue({ ...newValue, 'task': e.target.value });
    setErrors({ ...errors, 'task': false })
  }

  const addTask = () => {
    // validate
    const newErrors = {};
    if (!newValue.task) {
      newErrors.task = true;
    }
    if (!newValue.id) {
      newErrors.id = true;
    }
    // if not valid, set the error state
    if (!newValue.id || !newValue.task) {
      setErrors(newErrors)
      return;
    }

    // submit
    const newTask = { id: newValue.id, title: newValue.task };
    const newTasks = [...tasks, newTask];
    setTasks(newTasks);

    // reset form
    setNewValue({
      id: '',
      task: '',
    });
  };

  console.log('state: ', newValue)

  return (
    <div className="taskList">
      {tasks.map(task => <Task {...task} key={task.id} />)}

      <div className="addTaskContainer">
        <div className="inputContainer">
          <input value={newValue.id} onChange={writeId} placeholder="id" name="id" />
          {errors.id && <span className="errorText">Ingrese un id</span>}
        </div>

        <div className="inputContainer">
          <input value={newValue.task} onChange={writeTask} placeholder="task" name="task" />
          {errors.task && <span className="errorText">Ingrese una tarea</span>}
        </div>

        <button onClick={addTask} className="addTask">Add task</button>
      </div>
    </div>
  )
};

export default TaskList;
