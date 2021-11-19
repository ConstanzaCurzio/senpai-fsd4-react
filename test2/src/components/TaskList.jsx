import React from 'react';

import Task from './Task';

const TaskList = () => {
  const tasks = [
    { id: 1, title: 'Ir al cine' },
    { id: 2, title: 'Pasear el perro'},
    { id: 3, title: 'Comprar fruta' },
  ];

  return (
    tasks.map(task => <Task task={task} key={task.id} />)
  )
};

export default TaskList;
