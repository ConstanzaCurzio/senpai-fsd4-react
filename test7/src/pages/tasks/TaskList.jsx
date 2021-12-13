import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

import Task from './Task';
import './TaskList.css';

const TaskList = () => {
  const navigate = useNavigate();
  useEffect(() => {
    // CONSULTO URL DE TASKS - GET http://localhost:3000/tasks
    const getTasks = async () => {
      const token = JSON.parse(window.localStorage.getItem("app_user"))?.accessToken;
      console.log("TOKEN", token);
      const result = await axios.get("http://localhost:3000/660/tasks", { headers: { "Authorization": `Bearer ${token}`} });
      setTasks(result.data);
    };

    getTasks();
  }, []);

  if (!window.localStorage.getItem("app_user")) {
  // si no me devuelve un usuario la local storage
    navigate("/unauthorized");
  }

  const [tasks, setTasks] = useState(null);

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
    setNewValue({ ...newValue, 'name': e.target.value });
    setErrors({ ...errors, 'name': false })
  }

  const handleSubmit = async () => {
    // validate
    const newErrors = {};
    if (!newValue.name) {
      newErrors.name = true;
    }
    if (!newValue.id) {
      newErrors.id = true;
    }
    // if not valid, set the error state
    if (!newValue.id || !newValue.name) {
      setErrors(newErrors)
      return;
    }

    // submit
    const newTask = { id: newValue.id, name: newValue.name };
    const newTasks = [...tasks, newTask];
    // Si existe la tarea
    // ESTO SERIA API 
    if (tasks.find((task => task.id === newTask.id))) {
      // Actualizar
      const result = await axios.put(`http://localhost:3000/tasks/${newTask.id}`, {
        name: newValue.name,
      })
      console.log("RESULT", result);
    } else {
      // Add
      const result = await axios.post("http://localhost:3000/tasks", {
        id: newValue.id,
        name: newValue.name,
      })
      console.log("RESULT", result);
    }
    setTasks(newTasks);

    // reset form
    setNewValue({
      id: '',
      name: '',
    });
  };

  const handleDelete = async (id) => {
    const result = await axios.delete(`http://localhost:3000/tasks/${id}`);
    console.log("RESULT", result);
    setTasks(tasks.filter(task => task.id !== id))
  }

  if (!tasks) return <div>Loading ...</div>;

  return (
    <div className="taskList">
      {tasks.map(task => <Task {...task} key={task.id} onDelete={handleDelete} />)}

      <div className="addTaskContainer">
        <div className="inputContainer">
          <input value={newValue.id} onChange={writeId} placeholder="id" name="id" />
          {errors.id && <span className="errorText">Ingrese un id</span>}
        </div>

        <div className="inputContainer">
          <input value={newValue.name} onChange={writeTask} placeholder="task" name="name" />
          {errors.task && <span className="errorText">Ingrese una tarea</span>}
        </div>

        <button onClick={handleSubmit} className="addTask">Submit</button>
      </div>
    </div>
  )
};

export default TaskList;
